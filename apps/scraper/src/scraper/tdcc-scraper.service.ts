/* eslint-disable prettier/prettier */
import * as _ from 'lodash';
import * as numeral from 'numeral';
import * as csvtojson from 'csvtojson';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TdccScraperService implements OnApplicationBootstrap {
    constructor(private httpService: HttpService) { }

    //取得最新的集保戶股權分散表
    async fetchEquitiesHolders() {
        const url = 'https://smart.tdcc.com.tw/opendata/getOD.ashx?id=1-5';

        // 取得回應資料
        const responseData = await firstValueFrom(this.httpService.post(url))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(response.data));

        // 若無資料則回傳 null
        const [fields, ...rows] = responseData;
        if (fields[0] !== '資料日期') return null;

        // 整理股權分散數據
        const distributions = rows.map(row => {
            const [date, symbol, level, holders, shares, proportion] = row;
            return {
                date, //日期
                symbol, //股票代號
                level: numeral(level).value(), //持股數分級，需要注意 16 表示「差異數調整」；17 表示「合計」
                holders: numeral(holders).value(), //股東人數
                shares: numeral(shares).value(), //持股股數
                proportion: numeral(proportion).value(), //占集保庫存數比例 (%)
            };
        });

        // 按證券代碼分組後再處理資料格式
        const data = _(distributions) //陣列型態，代表集保戶股權分散資料
            .groupBy('symbol')
            .map((rows: any[]) => {
                const { date, symbol } = rows[0];
                const data = rows.map(row => _.omit(row, ['date', 'symbol']));
                return { date, symbol, data };
            })
            .value();

        return data;
    }

    async onApplicationBootstrap() {
        // const equitiesHolders = await this.fetchEquitiesHolders();
        // console.log(equitiesHolders); // 顯示最新的集保戶股權分散表
    }
}