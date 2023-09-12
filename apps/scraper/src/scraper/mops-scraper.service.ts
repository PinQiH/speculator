/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import * as _ from 'lodash';
import * as cheerio from 'cheerio';
import * as iconv from 'iconv-lite';
import * as numeral from 'numeral';
import { firstValueFrom } from 'rxjs';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

type Market = 'sii' | 'otc' | 'rotc' | 'pub'; //sii 表示上市公司；otc 表示上櫃公司，rotc 表示興櫃公司；pub 表示公開發行公司

@Injectable()
export class MopsScraperService implements OnApplicationBootstrap {
    constructor(private httpService: HttpService) { }

    //取得公司當季 EPS
    async fetchQuarterlyEps(options: { market: Market, year: number, quarter: number }) {
        const { market, year, quarter } = options;

        // 建立 FormData
        const form = new URLSearchParams({
            encodeURIComponent: '1',
            step: '1',
            firstin: '1',
            off: '1',
            isQuery: 'Y',
            TYPEK: market,
            year: numeral(year).subtract(1911).format(),
            season: numeral(quarter).format('00'),
        });
        const url = 'https://mops.twse.com.tw/mops/web/t163sb04';

        // 取得 HTML 頁面
        const page = await firstValueFrom(this.httpService.post(url, form)).then(response => response.data);

        // 使用 cheerio 載入 HTML 以取得表格的 table rows
        const $ = cheerio.load(page);

        // 遍歷每個 table row 並將其轉換成我們想要的資料格式
        const data = $('.even,.odd').map((i, el) => {
            const td = $(el).find('td');
            const symbol = td.eq(0).text().trim();  // 公司代號
            const name = td.eq(1).text().trim();  // 公司名稱
            const eps = numeral(td.eq(td.length - 1).text().trim()).value();  // 基本每股盈餘(元)
            return { symbol, name, eps, year, quarter };
        }).toArray();

        return _.orderBy(data, 'symbol', 'asc');  // 依股票代號排序
    }

    //取得公司當月營收
    async fetchMonthlyRevenue(options: { market: Market, year: number, month: number, type: number }) {
        const { market, year, month, type } = options;
        const suffix = `${numeral(year).subtract(1911).value()}_${month}_${type}`;
        const url = `https://mops.twse.com.tw/nas/t21/${market}/t21sc03_${suffix}.html`;

        // 取得 HTML 並轉換為 Big-5 編碼
        const page = await firstValueFrom(this.httpService.get(url, { responseType: 'arraybuffer' }))
            .then(response => iconv.decode(response.data, 'big5'));

        // 使用 cheerio 載入 HTML 以取得表格的 table rows
        const $ = cheerio.load(page);

        // 遍歷每個 table row 並轉換資料格式
        const data = $('tr [align=right]')
            .filter((i, el) => {
                const th = $(el).find('th');
                const td = $(el).find('td');
                return (th.length === 0) && !!td.eq(0).text();
            })
            .map((i, el) => {
                const td = $(el).find('td');
                const symbol = td.eq(0).text().trim();  // 公司代號
                const name = td.eq(1).text().trim();  // 公司名稱
                const revenue = numeral(td.eq(2).text().trim()).value(); // 當月營收
                return { symbol, name, revenue, year, month };
            })
            .toArray();

        return _.sortBy(data, 'symbol');  // 依股票代號排序
    }

    async onApplicationBootstrap() {
        // const options = {
        //     market: 'sii' as Market,     //市場別，sii 表示上市；otc 表示上櫃；rotc 表示興櫃；pub 表示公開發行
        //     year: 2023,       //年度
        //     quarter: 2,       //季別
        // };
        // const quarterlyEps = await this.fetchQuarterlyEps(options);
        // console.log(quarterlyEps); //顯示公司當季 EPS

        // const options_2 = {
        //     market: 'sii' as Market,     //市場別，sii 表示上市；otc 表示上櫃；rotc 表示興櫃；pub 表示公開發行
        //     year: 2023,       //年度
        //     month: 8,         //月份
        //     type: 0,          //公司類型。0 是本國公司；1 是外國公司
        // };
        // const monthlyRevenue = await this.fetchMonthlyRevenue(options_2);
        // console.log(monthlyRevenue); //顯示公司當月營收
    }
}
