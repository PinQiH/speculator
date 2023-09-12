/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { DateTime } from 'luxon';
import * as fs from 'fs';
import { Module, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { ScraperModule } from './scraper/scraper.module';
import { MarketStatsModule } from './market-stats/market-stats.module';
import { TickerModule } from './ticker/ticker.module';
import { MarketStatsService } from './market-stats/market-stats.service';
import { TickerService } from './ticker/ticker.service';
import { ReportModule } from './report/report.module';
import { ReportService } from './report/report.service';

@Module({
	imports: [
		ConfigModule.forRoot(),
		ScheduleModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGODB_URI),
		MailerModule.forRoot({
			transport: {
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: {
					type: 'oauth2',
					user: process.env.GOOGLE_USER,
					clientId: process.env.GOOGLE_CLIENT_ID,
					clientSecret: process.env.GOOGLE_CLIENT_SECRET,
					accessToken: process.env.GOOGLE_ACCESS_TOKEN,
					refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
				},
			},
			defaults: {
				from: process.env.MAILER_FROM,
				to: process.env.MAILER_TO,
			},
		}),
		ScraperModule,
		MarketStatsModule,
		TickerModule,
		ReportModule,
	],
})
export class AppModule implements OnApplicationBootstrap {
	constructor(
		private readonly marketStatsService: MarketStatsService,
		private readonly tickerService: TickerService,
		private readonly reportService: ReportService
	) { }

	async onApplicationBootstrap() {
		if (process.env.SCRAPER_INIT === 'true') {
			Logger.log('正在初始化應用程式...', AppModule.name);

			// const dt = DateTime.local()
			// // 使用 `minus` 方法減去一天
			// const previousDay = dt.minus({ days: 1 });

			const exportDate = '2023-09-07';

			// // 獲得前一天的日期
			// const previousDate = previousDay.toISODate();

			// await this.marketStatsService.updateMarketStats('2023-09-05');
			// await this.tickerService.updateTickers('2023-09-05');

			// await this.marketStatsService.updateMarketStats('2023-09-04');
			// await this.tickerService.updateTickers('2023-09-04');

			// await this.reportService.export({ date: exportDate })
			// 	.then(async (excelBuffer) => {
			// 		// 轉換 Excel 檔案的 Buffer 為 ArrayBufferView
			// 		const arrayBufferView = new Uint8Array(excelBuffer);

			// 		// 將 ArrayBufferView 寫入磁碟檔案
			// 		await fs.promises.writeFile(`C:/Users/User/Desktop/excel/excelreport_${exportDate}.xlsx`, arrayBufferView);

			// 		Logger.log('Excel 檔案已儲存');
			// 	})
			// 	.catch((error) => {
			// 		Logger.error('匯出 Excel 檔案時發生錯誤:', error);
			// 	});

			// for (let dt = DateTime.local(), days = 0; days < 31; dt = dt.minus({ day: 1 }), days++) {
			//   await this.marketStatsService.updateMarketStats(dt.toISODate());
			//   await this.tickerService.updateTickers(dt.toISODate());
			//   await this.reportService.export({ date: dt.toISODate() });
			// }

			await this.reportService.sendReport({ date: exportDate })

			Logger.log('應用程式初始化完成', AppModule.name);
		}
	}
}