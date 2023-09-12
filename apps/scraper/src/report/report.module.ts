/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MarketStatsModule } from '../market-stats/market-stats.module';
import { TickerModule } from '../ticker/ticker.module';
import { ReportService } from './report.service';

@Module({
    imports: [MarketStatsModule, TickerModule],
    providers: [ReportService],
    exports: [ReportService],
})
export class ReportModule { }