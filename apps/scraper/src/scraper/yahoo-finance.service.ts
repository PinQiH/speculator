/* eslint-disable prettier/prettier */
import { default as yahooFinance } from 'yahoo-finance2';
import { DateTime } from 'luxon';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class YahooFinanceService implements OnApplicationBootstrap {
    //取得美股四大指數報價
    async fetchUsStockMarketIndices(date: string) {
        const dt = DateTime.fromISO(date).endOf('day');
        const symbols = ['^DJI', '^GSPC', '^IXIC', '^SOX'];

        try {
            // 取得 yahoo finance 歷史報價
            const results = await Promise.all(symbols.map(symbol => (
                yahooFinance.historical(symbol, {
                    period1: dt.toISODate(),
                    period2: dt.plus({ day: 1 }).toISODate(),
                })
                    .then(result => result.find(data => DateTime.fromJSDate(data.date).toISODate() === date))
            )));

            const [
                dow30,  // 道瓊工業平均指數
                sp500,  // S&P500 指數
                nasdaq, // 那斯達克指數
                sox,    // 費城半導體指數
            ] = results;

            return { date, dow30, sp500, nasdaq, sox };
        } catch (err) {
            return null;  // 若非交易日或尚無資料則拋出錯誤回傳 null
        }
    }

    async onApplicationBootstrap() {
        // const usStockMarketIndices = await this.fetchUsStockMarketIndices('2023-09-07');
        // console.log(usStockMarketIndices); //顯示美股四大指數報價
    }
}
