/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/common/src/enums/exchange.enum.ts":
/*!************************************************!*\
  !*** ./libs/common/src/enums/exchange.enum.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Exchange = void 0;
var Exchange;
(function (Exchange) {
    Exchange["TWSE"] = "TWSE";
    Exchange["TPEx"] = "TPEx";
})(Exchange || (exports.Exchange = Exchange = {}));


/***/ }),

/***/ "./libs/common/src/enums/index.enum.ts":
/*!*********************************************!*\
  !*** ./libs/common/src/enums/index.enum.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Index = void 0;
var Index;
(function (Index) {
    Index["TAIEX"] = "IX0001";
    Index["NonFinance"] = "IX0007";
    Index["NonElectronics"] = "IX0008";
    Index["NonFinanceNonElectronics"] = "IX0009";
    Index["Cement"] = "IX0010";
    Index["Food"] = "IX0011";
    Index["Plastic"] = "IX0012";
    Index["CementAndCeramic"] = "IX0013";
    Index["PlasticAndChemical"] = "IX0014";
    Index["Electrical"] = "IX0015";
    Index["Textiles"] = "IX0016";
    Index["ElectricMachinery"] = "IX0017";
    Index["ElectricalAndCable"] = "IX0018";
    Index["ChemicalBiotechnologyAndMedicalCare"] = "IX0019";
    Index["Chemical"] = "IX0020";
    Index["BiotechnologyAndMedicalCare"] = "IX0021";
    Index["GlassAndCeramic"] = "IX0022";
    Index["PaperAndPulp"] = "IX0023";
    Index["IronAndSteel"] = "IX0024";
    Index["Rubber"] = "IX0025";
    Index["Automobile"] = "IX0026";
    Index["Electronics"] = "IX0027";
    Index["Semiconductors"] = "IX0028";
    Index["ComputerAndPeripheralEquipment"] = "IX0029";
    Index["Optoelectronics"] = "IX0030";
    Index["CommunicationsTechnologyAndInternet"] = "IX0031";
    Index["ElectronicPartsComponents"] = "IX0032";
    Index["ElectronicProductsDistirbution"] = "IX0033";
    Index["InformationService"] = "IX0034";
    Index["OtherElectronics"] = "IX0035";
    Index["BuildingMaterialsAndConstruction"] = "IX0036";
    Index["ShippingAndTransportation"] = "IX0037";
    Index["Tourism"] = "IX0038";
    Index["FinancialAndInsurance"] = "IX0039";
    Index["TradingAndConsumerGoods"] = "IX0040";
    Index["OilGasAndElectricity"] = "IX0041";
    Index["Other"] = "IX0042";
    Index["TPEX"] = "IX0043";
    Index["TPExTextiles"] = "IX0044";
    Index["TPExElectricMachinery"] = "IX0045";
    Index["TPExIronAndSteel"] = "IX0046";
    Index["TPExElectronic"] = "IX0047";
    Index["TPExBuildingMaterialsAndConstruction"] = "IX0048";
    Index["TPExShippingAndTransportation"] = "IX0049";
    Index["TPExTourism"] = "IX0050";
    Index["TPExChemical"] = "IX0051";
    Index["TPExBiotechnologyAndMedicalCare"] = "IX0052";
    Index["TPExSemiconductors"] = "IX0053";
    Index["TPExComputerAndPeripheralEquipment"] = "IX0054";
    Index["TPExOptoelectronic"] = "IX0055";
    Index["TPExCommunicationsAndInternet"] = "IX0056";
    Index["TPExElectronicPartsComponents"] = "IX0057";
    Index["TPExElectronicProductsDistribution"] = "IX0058";
    Index["TPExInformationService"] = "IX0059";
    Index["TPExCulturalAndCreative"] = "IX0075";
    Index["TPExOtherElectronic"] = "IX0099";
    Index["TPExOther"] = "IX0100";
})(Index || (exports.Index = Index = {}));


/***/ }),

/***/ "./libs/common/src/enums/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/enums/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./index.enum */ "./libs/common/src/enums/index.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./ticker-type.enum */ "./libs/common/src/enums/ticker-type.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./exchange.enum */ "./libs/common/src/enums/exchange.enum.ts"), exports);
__exportStar(__webpack_require__(/*! ./market.enum */ "./libs/common/src/enums/market.enum.ts"), exports);


/***/ }),

/***/ "./libs/common/src/enums/market.enum.ts":
/*!**********************************************!*\
  !*** ./libs/common/src/enums/market.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Market = void 0;
var Market;
(function (Market) {
    Market["TSE"] = "TSE";
    Market["OTC"] = "OTC";
    Market["ESB"] = "ESB";
    Market["TIB"] = "TIB";
    Market["PSB"] = "PSB";
})(Market || (exports.Market = Market = {}));


/***/ }),

/***/ "./libs/common/src/enums/ticker-type.enum.ts":
/*!***************************************************!*\
  !*** ./libs/common/src/enums/ticker-type.enum.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerType = void 0;
var TickerType;
(function (TickerType) {
    TickerType["Equity"] = "EQUITY";
    TickerType["Index"] = "INDEX";
})(TickerType || (exports.TickerType = TickerType = {}));


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./enums */ "./libs/common/src/enums/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./libs/common/src/utils/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/utils/get-market-name.util.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/utils/get-market-name.util.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMarketName = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "./libs/common/src/enums/index.ts");
function getMarketName(market) {
    const markets = {
        [enums_1.Market.TSE]: '上市',
        [enums_1.Market.OTC]: '上櫃',
        [enums_1.Market.ESB]: '興櫃一般板',
        [enums_1.Market.TIB]: '臺灣創新板',
        [enums_1.Market.PSB]: '興櫃戰略新板',
    };
    return markets[market];
}
exports.getMarketName = getMarketName;


/***/ }),

/***/ "./libs/common/src/utils/get-sector-name.util.ts":
/*!*******************************************************!*\
  !*** ./libs/common/src/utils/get-sector-name.util.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSectorName = void 0;
function getSectorName(name) {
    const indices = ['發行量加權股價指數', '未含金融保險股指數', '未含電子股指數', '未含金融電子股指數', '櫃檯指數'];
    return !indices.includes(name) ? name.replace('櫃檯', '').replace('類指數', '') : name;
}
exports.getSectorName = getSectorName;


/***/ }),

/***/ "./libs/common/src/utils/get-tpex-index-symbol-by-name.util.ts":
/*!*********************************************************************!*\
  !*** ./libs/common/src/utils/get-tpex-index-symbol-by-name.util.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTpexIndexSymbolByName = void 0;
const index_enum_1 = __webpack_require__(/*! ../enums/index.enum */ "./libs/common/src/enums/index.enum.ts");
function getTpexIndexSymbolByName(name) {
    const indices = {
        '光電業': index_enum_1.Index.TPExOptoelectronic,
        '其他': index_enum_1.Index.TPExOther,
        '其他電子業': index_enum_1.Index.TPExOtherElectronic,
        '化學工業': index_enum_1.Index.TPExChemical,
        '半導體業': index_enum_1.Index.TPExSemiconductors,
        '建材營造': index_enum_1.Index.TPExBuildingMaterialsAndConstruction,
        '文化創意業': index_enum_1.Index.TPExCulturalAndCreative,
        '生技醫療': index_enum_1.Index.TPExBiotechnologyAndMedicalCare,
        '紡織纖維': index_enum_1.Index.TPExTextiles,
        '航運業': index_enum_1.Index.TPExShippingAndTransportation,
        '觀光事業': index_enum_1.Index.TPExTourism,
        '資訊服務業': index_enum_1.Index.TPExInformationService,
        '通信網路業': index_enum_1.Index.TPExCommunicationsAndInternet,
        '鋼鐵工業': index_enum_1.Index.TPExIronAndSteel,
        '電子通路業': index_enum_1.Index.TPExElectronicProductsDistribution,
        '電子零組件業': index_enum_1.Index.TPExElectronicPartsComponents,
        '電機機械': index_enum_1.Index.TPExElectricMachinery,
        '電腦及週邊設備業': index_enum_1.Index.TPExComputerAndPeripheralEquipment,
    };
    return indices[name];
}
exports.getTpexIndexSymbolByName = getTpexIndexSymbolByName;


/***/ }),

/***/ "./libs/common/src/utils/get-twse-index-symbol-by-name.util.ts":
/*!*********************************************************************!*\
  !*** ./libs/common/src/utils/get-twse-index-symbol-by-name.util.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTwseIndexSymbolByName = void 0;
const index_enum_1 = __webpack_require__(/*! ../enums/index.enum */ "./libs/common/src/enums/index.enum.ts");
function getTwseIndexSymbolByName(name) {
    const indices = {
        '水泥類指數': index_enum_1.Index.Cement,
        '食品類指數': index_enum_1.Index.Food,
        '塑膠類指數': index_enum_1.Index.Plastic,
        '紡織纖維類指數': index_enum_1.Index.Textiles,
        '電機機械類指數': index_enum_1.Index.ElectricMachinery,
        '電器電纜類指數': index_enum_1.Index.ElectricalAndCable,
        '化學生技醫療類指數': index_enum_1.Index.ChemicalBiotechnologyAndMedicalCare,
        '化學類指數': index_enum_1.Index.Chemical,
        '生技醫療類指數': index_enum_1.Index.BiotechnologyAndMedicalCare,
        '玻璃陶瓷類指數': index_enum_1.Index.GlassAndCeramic,
        '造紙類指數': index_enum_1.Index.PaperAndPulp,
        '鋼鐵類指數': index_enum_1.Index.IronAndSteel,
        '橡膠類指數': index_enum_1.Index.Rubber,
        '汽車類指數': index_enum_1.Index.Automobile,
        '電子類指數': index_enum_1.Index.Electronics,
        '半導體類指數': index_enum_1.Index.Semiconductors,
        '電腦及週邊設備類指數': index_enum_1.Index.ComputerAndPeripheralEquipment,
        '光電類指數': index_enum_1.Index.Optoelectronics,
        '通信網路類指數': index_enum_1.Index.CommunicationsTechnologyAndInternet,
        '電子零組件類指數': index_enum_1.Index.ElectronicPartsComponents,
        '電子通路類指數': index_enum_1.Index.ElectronicProductsDistirbution,
        '資訊服務類指數': index_enum_1.Index.InformationService,
        '其他電子類指數': index_enum_1.Index.OtherElectronics,
        '建材營造類指數': index_enum_1.Index.BuildingMaterialsAndConstruction,
        '航運業類指數': index_enum_1.Index.ShippingAndTransportation,
        '觀光事業類指數': index_enum_1.Index.Tourism,
        '金融保險類指數': index_enum_1.Index.FinancialAndInsurance,
        '貿易百貨類指數': index_enum_1.Index.TradingAndConsumerGoods,
        '油電燃氣類指數': index_enum_1.Index.OilGasAndElectricity,
        '其他類指數': index_enum_1.Index.Other,
        '電子工業類指數': index_enum_1.Index.Electronics,
        '航運類指數': index_enum_1.Index.ShippingAndTransportation,
        '觀光類指數': index_enum_1.Index.Tourism,
    };
    return indices[name];
}
exports.getTwseIndexSymbolByName = getTwseIndexSymbolByName;


/***/ }),

/***/ "./libs/common/src/utils/index.ts":
/*!****************************************!*\
  !*** ./libs/common/src/utils/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./get-twse-index-symbol-by-name.util */ "./libs/common/src/utils/get-twse-index-symbol-by-name.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./get-tpex-index-symbol-by-name.util */ "./libs/common/src/utils/get-tpex-index-symbol-by-name.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./is-warrant.util */ "./libs/common/src/utils/is-warrant.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./get-market-name.util */ "./libs/common/src/utils/get-market-name.util.ts"), exports);
__exportStar(__webpack_require__(/*! ./get-sector-name.util */ "./libs/common/src/utils/get-sector-name.util.ts"), exports);


/***/ }),

/***/ "./libs/common/src/utils/is-warrant.util.ts":
/*!**************************************************!*\
  !*** ./libs/common/src/utils/is-warrant.util.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isWarrant = void 0;
function isWarrant(symbol) {
    const rules = [
        /^0[3-8][0-9][0-9][0-9][0-9]$/,
        /^0[3-8][0-9][0-9][0-9]P$/,
        /^0[3-8][0-9][0-9][0-9]F$/,
        /^0[3-8][0-9][0-9][0-9]Q$/,
        /^0[3-8][0-9][0-9][0-9]C$/,
        /^0[3-8][0-9][0-9][0-9]B$/,
        /^0[3-8][0-9][0-9][0-9]X$/,
        /^0[3-8][0-9][0-9][0-9]Y$/,
        /^7[0-3][0-9][0-9][0-9][0-9]$/,
        /^7[0-3][0-9][0-9][0-9]P$/,
        /^7[0-3][0-9][0-9][0-9]F$/,
        /^7[0-3][0-9][0-9][0-9]Q$/,
        /^7[0-3][0-9][0-9][0-9]C$/,
        /^7[0-3][0-9][0-9][0-9]B$/,
        /^7[0-3][0-9][0-9][0-9]X$/,
        /^7[0-3][0-9][0-9][0-9]Y$/,
    ];
    return rules.some(regex => regex.test(symbol));
}
exports.isWarrant = isWarrant;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AppModule_1;
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const scraper_module_1 = __webpack_require__(/*! ./scraper/scraper.module */ "./src/scraper/scraper.module.ts");
const market_stats_module_1 = __webpack_require__(/*! ./market-stats/market-stats.module */ "./src/market-stats/market-stats.module.ts");
const ticker_module_1 = __webpack_require__(/*! ./ticker/ticker.module */ "./src/ticker/ticker.module.ts");
const market_stats_service_1 = __webpack_require__(/*! ./market-stats/market-stats.service */ "./src/market-stats/market-stats.service.ts");
const ticker_service_1 = __webpack_require__(/*! ./ticker/ticker.service */ "./src/ticker/ticker.service.ts");
const report_module_1 = __webpack_require__(/*! ./report/report.module */ "./src/report/report.module.ts");
let AppModule = AppModule_1 = class AppModule {
    constructor(marketStatsService, tickerService) {
        this.marketStatsService = marketStatsService;
        this.tickerService = tickerService;
    }
    async onApplicationBootstrap() {
        if (process.env.SCRAPER_INIT === 'true') {
            common_1.Logger.log('正在初始化應用程式...', AppModule_1.name);
            for (let dt = luxon_1.DateTime.local(), days = 0; days < 31; dt = dt.minus({ day: 1 }), days++) {
                await this.marketStatsService.updateMarketStats(dt.toISODate());
                await this.tickerService.updateTickers(dt.toISODate());
            }
            common_1.Logger.log('應用程式初始化完成', AppModule_1.name);
        }
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = AppModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            schedule_1.ScheduleModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            scraper_module_1.ScraperModule,
            market_stats_module_1.MarketStatsModule,
            ticker_module_1.TickerModule,
            report_module_1.ReportModule,
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof market_stats_service_1.MarketStatsService !== "undefined" && market_stats_service_1.MarketStatsService) === "function" ? _a : Object, typeof (_b = typeof ticker_service_1.TickerService !== "undefined" && ticker_service_1.TickerService) === "function" ? _b : Object])
], AppModule);


/***/ }),

/***/ "./src/market-stats/market-stats.module.ts":
/*!*************************************************!*\
  !*** ./src/market-stats/market-stats.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketStatsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const market_stats_schema_1 = __webpack_require__(/*! ./market-stats.schema */ "./src/market-stats/market-stats.schema.ts");
const market_stats_repository_1 = __webpack_require__(/*! ./market-stats.repository */ "./src/market-stats/market-stats.repository.ts");
const market_stats_service_1 = __webpack_require__(/*! ./market-stats.service */ "./src/market-stats/market-stats.service.ts");
const scraper_module_1 = __webpack_require__(/*! ../scraper/scraper.module */ "./src/scraper/scraper.module.ts");
let MarketStatsModule = class MarketStatsModule {
};
exports.MarketStatsModule = MarketStatsModule;
exports.MarketStatsModule = MarketStatsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: market_stats_schema_1.MarketStats.name, schema: market_stats_schema_1.MarketStatsSchema },
            ]),
            scraper_module_1.ScraperModule,
        ],
        providers: [market_stats_repository_1.MarketStatsRepository, market_stats_service_1.MarketStatsService],
        exports: [market_stats_repository_1.MarketStatsRepository, market_stats_service_1.MarketStatsService],
    })
], MarketStatsModule);


/***/ }),

/***/ "./src/market-stats/market-stats.repository.ts":
/*!*****************************************************!*\
  !*** ./src/market-stats/market-stats.repository.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketStatsRepository = void 0;
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const market_stats_schema_1 = __webpack_require__(/*! ./market-stats.schema */ "./src/market-stats/market-stats.schema.ts");
let MarketStatsRepository = class MarketStatsRepository {
    constructor(model) {
        this.model = model;
    }
    async updateMarketStats(marketStats) {
        const { date } = marketStats;
        return this.model.updateOne({ date }, marketStats, { upsert: true });
    }
    async getMarketStats(options) {
        const date = options?.date || luxon_1.DateTime.local().toISODate();
        const days = options?.days || 30;
        const results = await this.model.aggregate([
            { $match: { date: { $lte: date } } },
            { $project: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } },
            { $sort: { date: -1 } },
            { $limit: days + 1 },
        ]);
        const data = results.map((doc, i) => (i < results.length - 1 ? {
            ...doc,
            taiexChangePercent: doc.taiexPrice && Math.round((doc.taiexChange / (doc.taiexPrice - doc.taiexChange)) * 10000) / 100,
            usdtwdChange: doc.usdtwd && parseFloat((doc.usdtwd - results[i + 1].usdtwd).toPrecision(12)),
            finiTxfNetOiChange: doc.finiTxfNetOi && (doc.finiTxfNetOi - results[i + 1].finiTxfNetOi),
            finiTxoCallsNetOiValueChange: doc.finiTxoCallsNetOiValue && (doc.finiTxoCallsNetOiValue - results[i + 1].finiTxoCallsNetOiValue),
            finiTxoPutsNetOiValueChange: doc.finiTxoPutsNetOiValue && (doc.finiTxoPutsNetOiValue - results[i + 1].finiTxoPutsNetOiValue),
            top10SpecificTxfFrontMonthNetOiChange: doc.top10SpecificTxfFrontMonthNetOi && (doc.top10SpecificTxfFrontMonthNetOi - results[i + 1].top10SpecificTxfFrontMonthNetOi),
            top10SpecificTxfBackMonthsNetOiChange: doc.top10SpecificTxfBackMonthsNetOi && (doc.top10SpecificTxfBackMonthsNetOi - results[i + 1].top10SpecificTxfBackMonthsNetOi),
            retailMxfNetOiChange: doc.retailMxfNetOi && (doc.retailMxfNetOi - results[i + 1].retailMxfNetOi),
        } : doc)).slice(0, -1);
        return data;
    }
};
exports.MarketStatsRepository = MarketStatsRepository;
exports.MarketStatsRepository = MarketStatsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(market_stats_schema_1.MarketStats.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], MarketStatsRepository);


/***/ }),

/***/ "./src/market-stats/market-stats.schema.ts":
/*!*************************************************!*\
  !*** ./src/market-stats/market-stats.schema.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketStatsSchema = exports.MarketStats = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let MarketStats = class MarketStats {
};
exports.MarketStats = MarketStats;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], MarketStats.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "taiexPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "taiexChange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "taiexTradeValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "finiNetBuySell", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "sitcNetBuySell", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "dealersNetBuySell", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "marginBalance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "marginBalanceChange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "shortBalance", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "shortBalanceChange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "finiTxfNetOi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "finiTxoCallsNetOiValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "finiTxoPutsNetOiValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "top10SpecificTxfFrontMonthNetOi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "top10SpecificTxfBackMonthsNetOi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "retailMxfNetOi", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "retailMxfLongShortRatio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "txoPutCallRatio", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MarketStats.prototype, "usdtwd", void 0);
exports.MarketStats = MarketStats = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], MarketStats);
exports.MarketStatsSchema = mongoose_1.SchemaFactory.createForClass(MarketStats)
    .index({ date: -1 }, { unique: true });


/***/ }),

/***/ "./src/market-stats/market-stats.service.ts":
/*!**************************************************!*\
  !*** ./src/market-stats/market-stats.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MarketStatsService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MarketStatsService = void 0;
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const market_stats_repository_1 = __webpack_require__(/*! ./market-stats.repository */ "./src/market-stats/market-stats.repository.ts");
const twse_scraper_service_1 = __webpack_require__(/*! ../scraper/twse-scraper.service */ "./src/scraper/twse-scraper.service.ts");
const taifex_scraper_service_1 = __webpack_require__(/*! ../scraper/taifex-scraper.service */ "./src/scraper/taifex-scraper.service.ts");
let MarketStatsService = MarketStatsService_1 = class MarketStatsService {
    constructor(marketStatsRepository, twseScraperService, taifexScraperService) {
        this.marketStatsRepository = marketStatsRepository;
        this.twseScraperService = twseScraperService;
        this.taifexScraperService = taifexScraperService;
    }
    async updateMarketStats(date = luxon_1.DateTime.local().toISODate()) {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await this.updateTaiex(date).then(() => delay(5000));
        await this.updateInstInvestorsTrades(date).then(() => delay(5000));
        await this.updateMarginTransactions(date).then(() => delay(5000));
        await this.updateFiniTxfNetOi(date).then(() => delay(5000));
        await this.updateFiniTxoNetOiValue(date).then(() => delay(5000));
        await this.updateLargeTradersTxfNetOi(date).then(() => delay(5000));
        await this.updateRetailMxfPosition(date).then(() => delay(5000));
        await this.updateTxoPutCallRatio(date).then(() => delay(5000));
        await this.updateUsdTwdRate(date).then(() => delay(5000));
        common_1.Logger.log(`${date} 已完成`, MarketStatsService_1.name);
    }
    async updateTaiex(date) {
        const updated = await this.twseScraperService.fetchMarketTrades(date)
            .then(data => data && {
            date,
            taiexPrice: data.price,
            taiexChange: data.change,
            taiexTradeValue: data.tradeValue,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 集中市場加權指數: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 集中市場加權指數: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateInstInvestorsTrades(date) {
        const updated = await this.twseScraperService.fetchInstInvestorsTrades(date)
            .then(data => data && {
            date,
            finiNetBuySell: data.foreignInvestorsNetBuySell,
            sitcNetBuySell: data.sitcNetBuySell,
            dealersNetBuySell: data.dealersNetBuySell,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 集中市場三大法人買賣超: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 集中市場三大法人買賣超: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateMarginTransactions(date) {
        const updated = await this.twseScraperService.fetchMarginTransactions(date)
            .then(data => data && {
            date,
            marginBalance: data.marginBalance,
            marginBalanceChange: data.marginBalanceChange,
            shortBalance: data.shortBalance,
            shortBalanceChange: data.shortBalanceChange,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 集中市場信用交易: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 集中市場信用交易: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateFiniTxfNetOi(date) {
        const updated = await this.taifexScraperService.fetchInstInvestorsTxfTrades(date)
            .then(data => data && {
            date,
            finiTxfNetOi: data.finiNetOiVolume,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 外資臺股期貨未平倉淨口數: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 外資臺股期貨未平倉淨口數: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateFiniTxoNetOiValue(date) {
        const updated = await this.taifexScraperService.fetchInstInvestorsTxoTrades(date)
            .then(data => data && {
            date,
            finiTxoCallsNetOiValue: data.finiCallsNetOiValue,
            finiTxoPutsNetOiValue: data.finiPutsNetOiValue,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 外資臺指選擇權未平倉淨金額: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 外資臺指選擇權未平倉淨金額: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateLargeTradersTxfNetOi(date) {
        const updated = await this.taifexScraperService.fetchLargeTradersTxfPosition(date)
            .then(data => data && {
            date,
            top10SpecificTxfFrontMonthNetOi: data.top10SpecificFrontMonthNetOi,
            top10SpecificTxfBackMonthsNetOi: data.top10SpecificBackMonthsNetOi,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 十大特法臺股期貨未平倉淨口數: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 十大特法臺股期貨未平倉淨口數: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateRetailMxfPosition(date) {
        const updated = await this.taifexScraperService.fetchRetailMxfPosition(date)
            .then(data => data && {
            date,
            retailMxfNetOi: data.retailMxfNetOi,
            retailMxfLongShortRatio: data.retailMxfLongShortRatio,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 散戶小台淨部位: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 散戶小台淨部位: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateTxoPutCallRatio(date) {
        const updated = await this.taifexScraperService.fetchTxoPutCallRatio(date)
            .then(data => data && {
            date,
            txoPutCallRatio: data.txoPutCallRatio,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 臺指選擇權 Put/Call Ratio: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 臺指選擇權 Put/Call Ratio: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
    async updateUsdTwdRate(date) {
        const updated = await this.taifexScraperService.fetchExchangeRates(date)
            .then(data => data && {
            date,
            usdtwd: data.usdtwd,
        })
            .then(data => data && this.marketStatsRepository.updateMarketStats(data));
        if (updated)
            common_1.Logger.log(`${date} 美元兌新臺幣匯率: 已更新`, MarketStatsService_1.name);
        else
            common_1.Logger.warn(`${date} 美元兌新臺幣匯率: 尚無資料或非交易日`, MarketStatsService_1.name);
    }
};
exports.MarketStatsService = MarketStatsService;
__decorate([
    (0, schedule_1.Cron)('0 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateTaiex", null);
__decorate([
    (0, schedule_1.Cron)('0 30 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateInstInvestorsTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 30 21 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateMarginTransactions", null);
__decorate([
    (0, schedule_1.Cron)('0 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateFiniTxfNetOi", null);
__decorate([
    (0, schedule_1.Cron)('5 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateFiniTxoNetOiValue", null);
__decorate([
    (0, schedule_1.Cron)('10 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateLargeTradersTxfNetOi", null);
__decorate([
    (0, schedule_1.Cron)('15 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateRetailMxfPosition", null);
__decorate([
    (0, schedule_1.Cron)('20 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateTxoPutCallRatio", null);
__decorate([
    (0, schedule_1.Cron)('0 0 17 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketStatsService.prototype, "updateUsdTwdRate", null);
exports.MarketStatsService = MarketStatsService = MarketStatsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof market_stats_repository_1.MarketStatsRepository !== "undefined" && market_stats_repository_1.MarketStatsRepository) === "function" ? _a : Object, typeof (_b = typeof twse_scraper_service_1.TwseScraperService !== "undefined" && twse_scraper_service_1.TwseScraperService) === "function" ? _b : Object, typeof (_c = typeof taifex_scraper_service_1.TaifexScraperService !== "undefined" && taifex_scraper_service_1.TaifexScraperService) === "function" ? _c : Object])
], MarketStatsService);


/***/ }),

/***/ "./src/report/enums/color.enum.ts":
/*!****************************************!*\
  !*** ./src/report/enums/color.enum.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Color = void 0;
var Color;
(function (Color) {
    Color["Up"] = "b71c1c";
    Color["Down"] = "1b5e20";
    Color["Unchanged"] = "000000";
})(Color || (exports.Color = Color = {}));


/***/ }),

/***/ "./src/report/enums/index.ts":
/*!***********************************!*\
  !*** ./src/report/enums/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./color.enum */ "./src/report/enums/color.enum.ts"), exports);


/***/ }),

/***/ "./src/report/report.module.ts":
/*!*************************************!*\
  !*** ./src/report/report.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const market_stats_module_1 = __webpack_require__(/*! ../market-stats/market-stats.module */ "./src/market-stats/market-stats.module.ts");
const ticker_module_1 = __webpack_require__(/*! ../ticker/ticker.module */ "./src/ticker/ticker.module.ts");
const report_service_1 = __webpack_require__(/*! ./report.service */ "./src/report/report.service.ts");
let ReportModule = class ReportModule {
};
exports.ReportModule = ReportModule;
exports.ReportModule = ReportModule = __decorate([
    (0, common_1.Module)({
        imports: [market_stats_module_1.MarketStatsModule, ticker_module_1.TickerModule],
        providers: [report_service_1.ReportService],
    })
], ReportModule);


/***/ }),

/***/ "./src/report/report.service.ts":
/*!**************************************!*\
  !*** ./src/report/report.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReportService = void 0;
const fs = __webpack_require__(/*! fs */ "fs");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const ExcelJS = __webpack_require__(/*! exceljs */ "exceljs");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const common_2 = __webpack_require__(/*! @speculator/common */ "./libs/common/src/index.ts");
const utils_1 = __webpack_require__(/*! ./utils */ "./src/report/utils/index.ts");
const market_stats_repository_1 = __webpack_require__(/*! ../market-stats/market-stats.repository */ "./src/market-stats/market-stats.repository.ts");
const ticker_repository_1 = __webpack_require__(/*! ../ticker/ticker.repository */ "./src/ticker/ticker.repository.ts");
let ReportService = class ReportService {
    constructor(marketStatsRepository, tickerRepository) {
        this.marketStatsRepository = marketStatsRepository;
        this.tickerRepository = tickerRepository;
    }
    async createWorkbook() {
        const workbook = new ExcelJS.Workbook();
        return workbook;
    }
    async addMarketStatsSheet(workbook, options) {
        const worksheet = workbook.addWorksheet();
        worksheet.columns = [
            { header: '日期', key: 'date', width: 10, style: { alignment: { vertical: 'middle', horizontal: 'center' } } },
            { header: '加權指數', key: 'taiexPrice', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffcdd2' } } } },
            { header: '漲跌', key: 'taiexChange', width: 12.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffcdd2' } } } },
            { header: '漲跌幅', key: 'taiexChangePercent', width: 12.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffcdd2' } } } },
            { header: '成交量(億)', key: 'taiexTradeValue', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffcdd2' } } } },
            { header: '外資\r\n買賣超(億)', key: 'finiNetBuySell', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fff9c4' } } } },
            { header: '投信\r\n買賣超(億)', key: 'sitcNetBuySell', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fff9c4' } } } },
            { header: '自營商\r\n買賣超(億)', key: 'dealersNetBuySell', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'fff9c4' } } } },
            { header: '融資\r\n餘額(億)', key: 'marginBalance', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'c8e6c9' } } } },
            { header: '融資\r\n餘額增減(億)', key: 'marginBalanceChange', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'c8e6c9' } } } },
            { header: '融券\r\n餘額(張)', key: 'shortBalance', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'c8e6c9' } } } },
            { header: '融券\r\n餘額增減(張)', key: 'shortBalanceChange', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'c8e6c9' } } } },
            { header: '外資台指期\r\nOI淨口數', key: 'finiTxfNetOi', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bbdefb' } } } },
            { header: '外資台指期\r\nOI淨口數增減', key: 'finiTxfNetOiChange', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'bbdefb' } } } },
            { header: '外資台指買權\r\nOI淨金額(億)', key: 'finiTxoCallsNetOiValue', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b3e5fc' } } } },
            { header: '外資台指買權\r\nOI淨金額增減(億)', key: 'finiTxoCallsNetOiValueChange', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b3e5fc' } } } },
            { header: '外資台指賣權\r\nOI淨金額(億)', key: 'finiTxoPutsNetOiValue', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b3e5fc' } } } },
            { header: '外資台指賣權\r\nOI淨金額增減(億)', key: 'finiTxoPutsNetOiValueChange', width: 17.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b3e5fc' } } } },
            { header: '十大特法台指\r\n近月OI淨口數', key: 'top10SpecificTxfFrontMonthNetOi', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2ebf2' } } } },
            { header: '十大特法台指\r\n近月OI淨口數增減', key: 'top10SpecificTxfFrontMonthNetOiChange', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2ebf2' } } } },
            { header: '十大特法台指\r\n遠月OI淨口數', key: 'top10SpecificTxfBackMonthsNetOi', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2ebf2' } } } },
            { header: '十大特法台指\r\n遠月OI淨口數增減', key: 'top10SpecificTxfBackMonthsNetOiChange', width: 20, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2ebf2' } } } },
            { header: '散戶小台\r\nOI淨口數', key: 'retailMxfNetOi', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2dfdb' } } } },
            { header: '散戶小台\r\nOI淨口數增減', key: 'retailMxfNetOiChange', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2dfdb' } } } },
            { header: '散戶多空比', key: 'retailMtxLongShortRatio', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'b2dfdb' } } } },
            { header: '台指選擇權\r\nPut/Call Ratio', key: 'txoPutCallRatio', width: 15, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'cfd8dc' } } } },
            { header: '美元/新台幣', key: 'usdtwd', width: 12.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffccbc' } } } },
            { header: '新台幣升貶', key: 'usdtwdChange', width: 12.5, style: { alignment: { vertical: 'middle', horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffccbc' } } } },
        ];
        const data = await this.marketStatsRepository.getMarketStats(options);
        data.forEach(row => {
            row = {
                ...row,
                taiexChangePercent: row.taiexChangePercent && numeral(row.taiexChangePercent).divide(100).value(),
                taiexTradeValue: row.taiexTradeValue && numeral(row.taiexTradeValue).divide(100000000).value(),
                finiNetBuySell: row.finiNetBuySell && numeral(row.finiNetBuySell).divide(100000000).value(),
                sitcNetBuySell: row.sitcNetBuySell && numeral(row.sitcNetBuySell).divide(100000000).value(),
                dealersNetBuySell: row.dealersNetBuySell && numeral(row.dealersNetBuySell).divide(100000000).value(),
                marginBalance: row.marginBalance && numeral(row.marginBalance).divide(100000).value(),
                marginBalanceChange: row.marginBalanceChange && numeral(row.marginBalanceChange).divide(100000).value(),
                finiTxoCallsNetOiValue: row.finiTxoCallsNetOiValue && numeral(row.finiTxoCallsNetOiValue).divide(100000).value(),
                finiTxoCallsNetOiValueChange: row.finiTxoCallsNetOiValueChange && numeral(row.finiTxoCallsNetOiValueChange).divide(100000).value(),
                finiTxoPutsNetOiValue: row.finiTxoPutsNetOiValue && numeral(row.finiTxoPutsNetOiValue).divide(100000).value(),
                finiTxoPutsNetOiValueChange: row.finiTxoPutsNetOiValueChange && numeral(row.finiTxoPutsNetOiValueChange).divide(100000).value(),
                usdtwdChange: row.usdtwdChange * -1,
            };
            const dataRow = worksheet.addRow(row);
            dataRow.getCell('date').style = { alignment: { horizontal: 'center' } };
            dataRow.getCell('taiexPrice').font = { color: { argb: (0, utils_1.getFontColorByNetChange)(row.taiexChange) } };
            dataRow.getCell('taiexChange').style = { font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.taiexChange) } } };
            dataRow.getCell('taiexChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.taiexChangePercent) } } };
            dataRow.getCell('taiexTradeValue').style = { numFmt: '#,##0.00' };
            dataRow.getCell('finiNetBuySell').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiNetBuySell) } } };
            dataRow.getCell('sitcNetBuySell').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.sitcNetBuySell) } } };
            dataRow.getCell('dealersNetBuySell').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.dealersNetBuySell) } } };
            dataRow.getCell('marginBalance').style = { numFmt: '#,##0.00' };
            dataRow.getCell('marginBalanceChange').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.marginPurchaseChange) } } };
            dataRow.getCell('shortBalance').style = { numFmt: '#,##0' };
            dataRow.getCell('shortBalanceChange').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.shortSaleChange) } } };
            dataRow.getCell('finiTxfNetOi').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxNetOi) } } };
            dataRow.getCell('finiTxfNetOiChange').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxNetOiChange) } } };
            dataRow.getCell('finiTxoCallsNetOiValue').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxoCallsNetOiValue) } } };
            dataRow.getCell('finiTxoCallsNetOiValueChange').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxoCallsNetOiValueChange) } } };
            dataRow.getCell('finiTxoPutsNetOiValue').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxoPutsNetOiValue) } } };
            dataRow.getCell('finiTxoPutsNetOiValueChange').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.finiTxoPutsNetOiValueChange) } } };
            dataRow.getCell('top10SpecificTxfFrontMonthNetOi').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.specificTop10TxFrontMonthNetOi) } } };
            dataRow.getCell('top10SpecificTxfFrontMonthNetOiChange').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.specificTop10TxFrontMonthNetOiChange) } } };
            dataRow.getCell('top10SpecificTxfBackMonthsNetOi').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.specificTop10TxBackMonthsNetOi) } } };
            dataRow.getCell('top10SpecificTxfBackMonthsNetOiChange').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.specificTop10TxBackMonthsNetOiChange) } } };
            dataRow.getCell('retailMxfNetOi').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.retailMxfNetOi) } } };
            dataRow.getCell('retailMxfNetOiChange').style = { numFmt: '#,##0', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.retailMxfNetOiChange) } } };
            dataRow.getCell('retailMtxLongShortRatio').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.retailMtxLongShortRatio) } } };
            dataRow.getCell('txoPutCallRatio').style = { numFmt: '#0.00%' };
            dataRow.getCell('usdtwd').style = { numFmt: '0.000', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.usdtwdChange * -1) } } };
            dataRow.getCell('usdtwdChange').style = { numFmt: '0.000', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.usdtwdChange * -1) } } };
            dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
            dataRow.height = 20;
        });
        const date = data[0].date.replace(/-/g, '');
        worksheet.name = `${date} 大盤籌碼`;
        return workbook;
    }
    async addMoneyFlowSheet(workbook, options) {
        const worksheet = workbook.addWorksheet();
        worksheet.columns = [
            { header: '指數(類股)', key: 'name', width: 17.5, style: { alignment: { horizontal: 'left' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '指數', key: 'closePrice', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '漲跌', key: 'change', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '漲跌幅', key: 'changePercent', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '成交金額(億)', key: 'tradeValue', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '昨日金額(億)', key: 'tradeValuePrev', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '金額差(億)', key: 'tradeValueChange', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '成交比重', key: 'tradeWeight', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '昨日比重', key: 'tradeWeightPrev', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
            { header: '比重差', key: 'tradeWeightChange', width: 12.5, style: { alignment: { horizontal: 'right' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } } },
        ];
        const data = await this.tickerRepository.getMoneyFlow(options);
        data.forEach(row => {
            row = {
                ...row,
                name: (0, common_2.getSectorName)(row.name),
                changePercent: row.changePercent && numeral(row.changePercent).divide(100).value(),
                tradeValue: row.tradeValue && numeral(row.tradeValue).divide(100000000).value(),
                tradeValuePrev: row.tradeValuePrev && numeral(row.tradeValuePrev).divide(100000000).value(),
                tradeValueChange: row.tradeValueChange && numeral(row.tradeValueChange).divide(100000000).value(),
                tradeWeight: row.tradeWeight && numeral(row.tradeWeight).divide(100).value(),
                tradeWeightPrev: row.tradeWeightPrev && numeral(row.tradeWeightPrev).divide(100).value(),
                tradeWeightChange: row.tradeWeightChange && numeral(row.tradeWeightChange).divide(100).value(),
            };
            const dataRow = worksheet.addRow(row);
            dataRow.getCell('closePrice').style = { numFmt: '##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.change) } } };
            dataRow.getCell('change').style = { numFmt: '##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.change) } } };
            dataRow.getCell('changePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.change) } } };
            dataRow.getCell('tradeValue').style = { numFmt: '#,##0.00' };
            dataRow.getCell('tradeValuePrev').style = { numFmt: '#,##0.00' };
            dataRow.getCell('tradeValueChange').style = { numFmt: '#,##0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.tradeValueChange) } } };
            dataRow.getCell('tradeWeight').style = { numFmt: '#0.00%' };
            dataRow.getCell('tradeWeightPrev').style = { numFmt: '#0.00%' };
            dataRow.getCell('tradeWeightChange').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(row.tradeWeightChange) } } };
            dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
            dataRow.height = 20;
        });
        const market = (0, common_2.getMarketName)(options.market);
        worksheet.name = `${market}資金流向`;
        worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
        worksheet.getRow(1).height = 20;
        return workbook;
    }
    async addTopMoversSheet(workbook, options) {
        const worksheet = workbook.addWorksheet();
        worksheet.columns = [
            { header: '代號', key: 'gainerSymbol', width: 10 },
            { header: '股票', key: 'gainerName', width: 15 },
            { header: '股價', key: 'gainerClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌', key: 'gainerChange', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'gainerChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'gainerTradeVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
            { header: '', key: '', width: 8 },
            { header: '代號', key: 'loserSymbol', width: 10 },
            { header: '股票', key: 'loserName', width: 15 },
            { header: '股價', key: 'loserClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌', key: 'loserChange', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'loserChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'loserTradeVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
        ];
        const gainers = await this.tickerRepository.getTopMovers({ ...options, direction: 'up' });
        const losers = await this.tickerRepository.getTopMovers({ ...options, direction: 'down' });
        const length = Math.max(gainers.length, losers.length);
        Array(length).fill({}).forEach((row, i) => {
            row = {
                gainerSymbol: gainers[i]?.symbol,
                gainerName: gainers[i]?.name,
                gainerClosePrice: gainers[i]?.closePrice,
                gainerChange: gainers[i]?.change,
                gainerChangePercent: gainers[i]?.changePercent && numeral(gainers[i].changePercent).divide(100).value(),
                gainerTradeVolume: gainers[i]?.tradeVolume && numeral(gainers[i].tradeVolume).divide(1000).value(),
                loserSymbol: losers[i]?.symbol,
                loserName: losers[i]?.name,
                loserClosePrice: losers[i]?.closePrice,
                loserChange: losers[i]?.change,
                loserChangePercent: losers[i]?.changePercent && numeral(losers[i].changePercent).divide(100).value(),
                loserTradeVolume: losers[i]?.tradeVolume && numeral(losers[i].tradeVolume).divide(1000).value(),
            };
            const dataRow = worksheet.addRow(row);
            dataRow.getCell('gainerClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(gainers[i]?.change) } } };
            dataRow.getCell('gainerChange').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(gainers[i]?.change) } } };
            dataRow.getCell('gainerChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(gainers[i]?.change) } } };
            dataRow.getCell('gainerTradeVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('loserClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(losers[i]?.change) } } };
            dataRow.getCell('loserChange').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(losers[i]?.change) } } };
            dataRow.getCell('loserChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(losers[i]?.change) } } };
            dataRow.getCell('loserTradeVolume').style = { numFmt: '#,##0' };
            dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
            dataRow.height = 20;
        });
        const headerRow = worksheet.insertRow(1, ['漲幅排行', '', '', '', '', '', '', '跌幅排行', '', '', '', '', '']);
        const titleGainersCell = headerRow.getCell(1);
        const titleLosersCell = headerRow.getCell(8);
        titleGainersCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        titleLosersCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        worksheet.mergeCells(+titleGainersCell.row, +titleGainersCell.col, +titleGainersCell.row, +titleGainersCell.col + 5);
        worksheet.mergeCells(+titleLosersCell.row, +titleLosersCell.col, +titleLosersCell.row, +titleLosersCell.col + 5);
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
        headerRow.height = 20;
        const market = (0, common_2.getMarketName)(options.market);
        worksheet.name = `${market}漲跌幅排行`;
        worksheet.getRow(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
        return workbook;
    }
    async addMostActivesSheet(workbook, options) {
        const worksheet = workbook.addWorksheet();
        worksheet.columns = [
            { header: '代號', key: 'volumeSymbol', width: 10 },
            { header: '股票', key: 'volumeName', width: 15 },
            { header: '股價', key: 'volumeClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌', key: 'volumeChange', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'volumeChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'volumeTradeVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
            { header: '', key: '', width: 8 },
            { header: '代號', key: 'valueSymbol', width: 10 },
            { header: '股票', key: 'valueName', width: 15 },
            { header: '股價', key: 'valueClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌', key: 'valueChange', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'valueChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交值(億)', key: 'valueTradeValue', width: 12, style: { alignment: { horizontal: 'right' } } },
        ];
        const mostActivesByVolume = await this.tickerRepository.getMostActives({ ...options, trade: 'volume' });
        const mostActivesByValue = await this.tickerRepository.getMostActives({ ...options, trade: 'value' });
        const length = mostActivesByVolume.length;
        Array(length).fill({}).forEach((row, i) => {
            row = {
                volumeSymbol: mostActivesByVolume[i]?.symbol,
                volumeName: mostActivesByVolume[i]?.name,
                volumeClosePrice: mostActivesByVolume[i]?.closePrice,
                volumeChange: mostActivesByVolume[i]?.change,
                volumeChangePercent: mostActivesByVolume[i]?.changePercent && numeral(mostActivesByVolume[i].changePercent).divide(100).value(),
                volumeTradeVolume: mostActivesByVolume[i]?.tradeVolume && numeral(mostActivesByVolume[i].tradeVolume).divide(1000).value(),
                valueSymbol: mostActivesByValue[i]?.symbol,
                valueName: mostActivesByValue[i]?.name,
                valueClosePrice: mostActivesByValue[i]?.closePrice,
                valueChange: mostActivesByValue[i]?.change,
                valueChangePercent: mostActivesByValue[i]?.changePercent && numeral(mostActivesByValue[i].changePercent).divide(100).value(),
                valueTradeValue: mostActivesByValue[i]?.tradeValue && numeral(mostActivesByValue[i].tradeValue).divide(100000000).value(),
            };
            const dataRow = worksheet.addRow(row);
            dataRow.getCell('volumeClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByVolume[i]?.change) } } };
            dataRow.getCell('volumeChange').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByVolume[i]?.change) } } };
            dataRow.getCell('volumeChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByVolume[i]?.change) } } };
            dataRow.getCell('volumeTradeVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('valueClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByValue[i]?.change) } } };
            dataRow.getCell('valueChange').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByValue[i]?.change) } } };
            dataRow.getCell('valueChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(mostActivesByValue[i]?.change) } } };
            dataRow.getCell('valueTradeValue').style = { numFmt: '#,##0.00' };
            dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
            dataRow.height = 20;
        });
        const headerRow = worksheet.insertRow(1, ['成交量排行', '', '', '', '', '', '', '成交值排行', '', '', '', '', '']);
        const titleMostActivesByVolumeCell = headerRow.getCell(1);
        const titleMostActivesByValueCell = headerRow.getCell(8);
        titleMostActivesByVolumeCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        titleMostActivesByValueCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        worksheet.mergeCells(+titleMostActivesByVolumeCell.row, +titleMostActivesByVolumeCell.col, +titleMostActivesByVolumeCell.row, +titleMostActivesByVolumeCell.col + 5);
        worksheet.mergeCells(+titleMostActivesByValueCell.row, +titleMostActivesByValueCell.col, +titleMostActivesByValueCell.row, +titleMostActivesByValueCell.col + 5);
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
        headerRow.height = 20;
        const market = (0, common_2.getMarketName)(options.market);
        worksheet.name = `${market}成交量值排行`;
        worksheet.getRow(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
        return workbook;
    }
    async addInstInvestorsTradesSheet(workbook, options) {
        const worksheet = workbook.addWorksheet();
        worksheet.columns = [
            { header: '代號', key: 'finiNetBuySymbol', width: 10 },
            { header: '股票', key: 'finiNetBuyName', width: 15 },
            { header: '張數', key: 'finiNetBuyVolume', width: 10, style: { alignment: { horizontal: 'right' } } },
            { header: '股價', key: 'finiNetBuyClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'finiNetBuyChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'finiNetBuyTotalVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
            { header: '', key: '', width: 8 },
            { header: '代號', key: 'finiNetSellSymbol', width: 10 },
            { header: '股票', key: 'finiNetSellName', width: 15 },
            { header: '張數', key: 'finiNetSellVolume', width: 10, style: { alignment: { horizontal: 'right' } } },
            { header: '股價', key: 'finiNetSellClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'finiNetSellChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'finiNetSellTotalVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
            { header: '', key: '', width: 8 },
            { header: '代號', key: 'sitcNetBuySymbol', width: 10 },
            { header: '股票', key: 'sitcNetBuyName', width: 15 },
            { header: '張數', key: 'sitcNetBuyVolume', width: 10, style: { alignment: { horizontal: 'right' } } },
            { header: '股價', key: 'sitcNetBuyClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'sitcNetBuyChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'sitcNetBuyTotalVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
            { header: '', key: '', width: 8 },
            { header: '代號', key: 'sitcNetSellSymbol', width: 10 },
            { header: '股票', key: 'sitcNetSellName', width: 15 },
            { header: '張數', key: 'sitcNetSellVolume', width: 10, style: { alignment: { horizontal: 'right' } } },
            { header: '股價', key: 'sitcNetSellClosePrice', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '漲跌幅', key: 'sitcNetSellChangePercent', width: 8, style: { alignment: { horizontal: 'right' } } },
            { header: '成交量(張)', key: 'sitcNetSellTotalVolume', width: 12, style: { alignment: { horizontal: 'right' } } },
        ];
        const finiNetBuyList = await this.tickerRepository.getInstInvestorsTrades({ ...options, inst: 'fini', net: 'buy' });
        const finiNetSellList = await this.tickerRepository.getInstInvestorsTrades({ ...options, inst: 'fini', net: 'sell' });
        const sitcNetBuyList = await this.tickerRepository.getInstInvestorsTrades({ ...options, inst: 'sitc', net: 'buy' });
        const sitcNetSellList = await this.tickerRepository.getInstInvestorsTrades({ ...options, inst: 'sitc', net: 'sell' });
        const length = Math.max(finiNetBuyList.length, finiNetSellList.length, sitcNetBuyList.length, sitcNetSellList.length);
        Array(length).fill({}).forEach((row, i) => {
            row = {
                finiNetBuySymbol: finiNetBuyList[i]?.symbol,
                finiNetBuyName: finiNetBuyList[i]?.name,
                finiNetBuyVolume: finiNetBuyList[i]?.finiNetBuySell && numeral(finiNetBuyList[i].finiNetBuySell).divide(1000).value(),
                finiNetBuyClosePrice: finiNetBuyList[i]?.closePrice,
                finiNetBuyChangePercent: finiNetBuyList[i]?.changePercent && numeral(finiNetBuyList[i].changePercent).divide(100).value(),
                finiNetBuyTotalVolume: finiNetBuyList[i]?.tradeVolume && numeral(finiNetBuyList[i].tradeVolume).divide(1000).value(),
                finiNetSellSymbol: finiNetSellList[i]?.symbol,
                finiNetSellName: finiNetSellList[i]?.name,
                finiNetSellVolume: finiNetSellList[i]?.finiNetBuySell && numeral(finiNetSellList[i].finiNetBuySell).divide(1000).value(),
                finiNetSellClosePrice: finiNetSellList[i]?.closePrice,
                finiNetSellChangePercent: finiNetSellList[i]?.changePercent && numeral(finiNetSellList[i].changePercent).divide(100).value(),
                finiNetSellTotalVolume: finiNetSellList[i]?.tradeVolume && numeral(finiNetSellList[i].tradeVolume).divide(1000).value(),
                sitcNetBuySymbol: sitcNetBuyList[i]?.symbol,
                sitcNetBuyName: sitcNetBuyList[i]?.name,
                sitcNetBuyVolume: sitcNetBuyList[i]?.finiNetBuySell && numeral(sitcNetBuyList[i].sitcNetBuySell).divide(1000).value(),
                sitcNetBuyClosePrice: sitcNetBuyList[i]?.closePrice,
                sitcNetBuyChangePercent: sitcNetBuyList[i]?.changePercent && numeral(sitcNetBuyList[i].changePercent).divide(100).value(),
                sitcNetBuyTotalVolume: sitcNetBuyList[i]?.tradeVolume && numeral(sitcNetBuyList[i].tradeVolume).divide(1000).value(),
                sitcNetSellSymbol: sitcNetSellList[i]?.symbol,
                sitcNetSellName: sitcNetSellList[i]?.name,
                sitcNetSellVolume: sitcNetSellList[i]?.finiNetBuySell && numeral(sitcNetSellList[i].sitcNetBuySell).divide(1000).value(),
                sitcNetSellClosePrice: sitcNetSellList[i]?.closePrice,
                sitcNetSellChangePercent: sitcNetSellList[i]?.changePercent && numeral(sitcNetSellList[i].changePercent).divide(100).value(),
                sitcNetSellTotalVolume: sitcNetSellList[i]?.tradeVolume && numeral(sitcNetSellList[i].tradeVolume).divide(1000).value(),
            };
            const dataRow = worksheet.addRow(row);
            dataRow.getCell('finiNetBuyVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('finiNetBuyClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(finiNetBuyList[i]?.change) } } };
            dataRow.getCell('finiNetBuyChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(finiNetBuyList[i]?.change) } } };
            dataRow.getCell('finiNetBuyTotalVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('finiNetSellVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('finiNetSellClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(finiNetSellList[i]?.change) } } };
            dataRow.getCell('finiNetSellChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(finiNetSellList[i]?.change) } } };
            dataRow.getCell('finiNetSellTotalVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('sitcNetBuyVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('sitcNetBuyClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(sitcNetBuyList[i]?.change) } } };
            dataRow.getCell('sitcNetBuyChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(sitcNetBuyList[i]?.change) } } };
            dataRow.getCell('sitcNetBuyTotalVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('sitcNetSellVolume').style = { numFmt: '#,##0' };
            dataRow.getCell('sitcNetSellClosePrice').style = { numFmt: '#0.00', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(sitcNetSellList[i]?.change) } } };
            dataRow.getCell('sitcNetSellChangePercent').style = { numFmt: '#0.00%', font: { color: { argb: (0, utils_1.getFontColorByNetChange)(sitcNetSellList[i]?.change) } } };
            dataRow.getCell('sitcNetSellTotalVolume').style = { numFmt: '#,##0' };
            dataRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
            dataRow.height = 20;
        });
        const headerRow = worksheet.insertRow(1, ['外資買超', '', '', '', '', '', '', '外資賣超', '', '', '', '', '', '', '投信買超', '', '', '', '', '', '', '投信賣超', '', '', '', '', '']);
        const titlefiniNetBuyCell = headerRow.getCell(1);
        const titlefiniNetSellCell = headerRow.getCell(8);
        const titleSticNetBuyCell = headerRow.getCell(15);
        const titlesitcNetSellCell = headerRow.getCell(22);
        titlefiniNetBuyCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        titlefiniNetSellCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        titleSticNetBuyCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        titlesitcNetSellCell.style = { alignment: { horizontal: 'center' }, fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffe0b2' } } };
        worksheet.mergeCells(+titlefiniNetBuyCell.row, +titlefiniNetBuyCell.col, +titlefiniNetBuyCell.row, +titlefiniNetBuyCell.col + 5);
        worksheet.mergeCells(+titlefiniNetSellCell.row, +titlefiniNetSellCell.col, +titlefiniNetSellCell.row, +titlefiniNetSellCell.col + 5);
        worksheet.mergeCells(+titleSticNetBuyCell.row, +titleSticNetBuyCell.col, +titleSticNetBuyCell.row, +titleSticNetBuyCell.col + 5);
        worksheet.mergeCells(+titlesitcNetSellCell.row, +titlesitcNetSellCell.col, +titlesitcNetSellCell.row, +titlesitcNetSellCell.col + 5);
        headerRow.alignment = { vertical: 'middle', horizontal: 'center' };
        headerRow.height = 20;
        const market = (0, common_2.getMarketName)(options.market);
        worksheet.name = `${market}外資投信買賣超排行`;
        worksheet.getRow(2).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'ffffff' } };
    }
    async export(options) {
        const workbook = await this.createWorkbook();
        await this.addMarketStatsSheet(workbook, options);
        await this.addMoneyFlowSheet(workbook, { date: options.date, market: common_2.Market.TSE });
        await this.addMoneyFlowSheet(workbook, { date: options.date, market: common_2.Market.OTC });
        await this.addTopMoversSheet(workbook, { date: options.date, market: common_2.Market.TSE });
        await this.addTopMoversSheet(workbook, { date: options.date, market: common_2.Market.OTC });
        await this.addMostActivesSheet(workbook, { date: options.date, market: common_2.Market.TSE });
        await this.addMostActivesSheet(workbook, { date: options.date, market: common_2.Market.OTC });
        await this.addInstInvestorsTradesSheet(workbook, { date: options.date, market: common_2.Market.TSE });
        await this.addInstInvestorsTradesSheet(workbook, { date: options.date, market: common_2.Market.OTC });
        return workbook.xlsx.writeBuffer();
    }
    async onApplicationBootstrap() {
        const buffer = await this.export({ date: '2023-09-07' });
        fs.writeFileSync('20230907.xlsx', buffer);
    }
};
exports.ReportService = ReportService;
exports.ReportService = ReportService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof market_stats_repository_1.MarketStatsRepository !== "undefined" && market_stats_repository_1.MarketStatsRepository) === "function" ? _a : Object, typeof (_b = typeof ticker_repository_1.TickerRepository !== "undefined" && ticker_repository_1.TickerRepository) === "function" ? _b : Object])
], ReportService);


/***/ }),

/***/ "./src/report/utils/get-font-color-by-net-change.util.ts":
/*!***************************************************************!*\
  !*** ./src/report/utils/get-font-color-by-net-change.util.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFontColorByNetChange = void 0;
const enums_1 = __webpack_require__(/*! ../enums */ "./src/report/enums/index.ts");
function getFontColorByNetChange(netChange) {
    if (netChange > 0)
        return enums_1.Color.Up;
    if (netChange < 0)
        return enums_1.Color.Down;
    return enums_1.Color.Unchanged;
}
exports.getFontColorByNetChange = getFontColorByNetChange;


/***/ }),

/***/ "./src/report/utils/index.ts":
/*!***********************************!*\
  !*** ./src/report/utils/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./get-font-color-by-net-change.util */ "./src/report/utils/get-font-color-by-net-change.util.ts"), exports);


/***/ }),

/***/ "./src/scraper/mops-scraper.service.ts":
/*!*********************************************!*\
  !*** ./src/scraper/mops-scraper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MopsScraperService = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
const cheerio = __webpack_require__(/*! cheerio */ "cheerio");
const iconv = __webpack_require__(/*! iconv-lite */ "iconv-lite");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
let MopsScraperService = class MopsScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchQuarterlyEps(options) {
        const { market, year, quarter } = options;
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
        const page = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form)).then(response => response.data);
        const $ = cheerio.load(page);
        const data = $('.even,.odd').map((i, el) => {
            const td = $(el).find('td');
            const symbol = td.eq(0).text().trim();
            const name = td.eq(1).text().trim();
            const eps = numeral(td.eq(td.length - 1).text().trim()).value();
            return { symbol, name, eps, year, quarter };
        }).toArray();
        return _.orderBy(data, 'symbol', 'asc');
    }
    async fetchMonthlyRevenue(options) {
        const { market, year, month, type } = options;
        const suffix = `${numeral(year).subtract(1911).value()}_${month}_${type}`;
        const url = `https://mops.twse.com.tw/nas/t21/${market}/t21sc03_${suffix}.html`;
        const page = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { responseType: 'arraybuffer' }))
            .then(response => iconv.decode(response.data, 'big5'));
        const $ = cheerio.load(page);
        const data = $('tr [align=right]')
            .filter((i, el) => {
            const th = $(el).find('th');
            const td = $(el).find('td');
            return (th.length === 0) && !!td.eq(0).text();
        })
            .map((i, el) => {
            const td = $(el).find('td');
            const symbol = td.eq(0).text().trim();
            const name = td.eq(1).text().trim();
            const revenue = numeral(td.eq(2).text().trim()).value();
            return { symbol, name, revenue, year, month };
        })
            .toArray();
        return _.sortBy(data, 'symbol');
    }
    async onApplicationBootstrap() {
    }
};
exports.MopsScraperService = MopsScraperService;
exports.MopsScraperService = MopsScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], MopsScraperService);


/***/ }),

/***/ "./src/scraper/scraper.module.ts":
/*!***************************************!*\
  !*** ./src/scraper/scraper.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScraperModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const twse_scraper_service_1 = __webpack_require__(/*! ./twse-scraper.service */ "./src/scraper/twse-scraper.service.ts");
const tpex_scraper_service_1 = __webpack_require__(/*! ./tpex-scraper.service */ "./src/scraper/tpex-scraper.service.ts");
const taifex_scraper_service_1 = __webpack_require__(/*! ./taifex-scraper.service */ "./src/scraper/taifex-scraper.service.ts");
const tdcc_scraper_service_1 = __webpack_require__(/*! ./tdcc-scraper.service */ "./src/scraper/tdcc-scraper.service.ts");
const mops_scraper_service_1 = __webpack_require__(/*! ./mops-scraper.service */ "./src/scraper/mops-scraper.service.ts");
const usdt_scraper_service_1 = __webpack_require__(/*! ./usdt-scraper.service */ "./src/scraper/usdt-scraper.service.ts");
const yahoo_finance_service_1 = __webpack_require__(/*! ./yahoo-finance.service */ "./src/scraper/yahoo-finance.service.ts");
let ScraperModule = class ScraperModule {
};
exports.ScraperModule = ScraperModule;
exports.ScraperModule = ScraperModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        providers: [
            twse_scraper_service_1.TwseScraperService,
            tpex_scraper_service_1.TpexScraperService,
            taifex_scraper_service_1.TaifexScraperService,
            tdcc_scraper_service_1.TdccScraperService,
            mops_scraper_service_1.MopsScraperService,
            usdt_scraper_service_1.UsdtScraperService,
            yahoo_finance_service_1.YahooFinanceService,
        ],
        exports: [
            twse_scraper_service_1.TwseScraperService,
            tpex_scraper_service_1.TpexScraperService,
            taifex_scraper_service_1.TaifexScraperService,
            tdcc_scraper_service_1.TdccScraperService,
            mops_scraper_service_1.MopsScraperService,
            usdt_scraper_service_1.UsdtScraperService,
            yahoo_finance_service_1.YahooFinanceService,
        ],
    })
], ScraperModule);


/***/ }),

/***/ "./src/scraper/taifex-scraper.service.ts":
/*!***********************************************!*\
  !*** ./src/scraper/taifex-scraper.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaifexScraperService = void 0;
const csvtojson = __webpack_require__(/*! csvtojson */ "csvtojson");
const iconv = __webpack_require__(/*! iconv-lite */ "iconv-lite");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let TaifexScraperService = class TaifexScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchInstInvestorsTxfTrades(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
            commodityId: 'TXF',
        });
        const url = 'https://www.taifex.com.tw/cht/3/futContractsDateDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, dealers, sitc, fini] = responseData;
        if (fields[0] !== '日期')
            return null;
        const raw = [...dealers.slice(3), ...sitc.slice(3), ...fini.slice(3)]
            .map(data => numeral(data).value());
        const [dealersLongTradeVolume, dealersLongTradeValue, dealersShortTradeVolume, dealersShortTradeValue, dealersNetTradeVolume, dealersNetTradeValue, dealersLongOiVolume, dealersLongOiValue, dealersShortOiVolume, dealersShortOiValue, dealersNetOiVolume, dealersNetOiValue, sitcLongTradeVolume, sitcLongTradeValue, sitcShortTradeVolume, sitcShortTradeValue, sitcNetTradeVolume, sitcNetTradeValue, sitcLongOiVolume, sitcLongOiValue, sitcShortOiVolume, sitcShortOiValue, sitcNetOiVolume, sitcNetOiValue, finiLongTradeVolume, finiLongTradeValue, finiShortTradeVolume, finiShortTradeValue, finiNetTradeVolume, finiNetTradeValue, finiLongOiVolume, finiLongOiValue, finiShortOiVolume, finiShortOiValue, finiNetOiVolume, finiNetOiValue,] = raw;
        return {
            date,
            finiLongTradeVolume,
            finiLongTradeValue,
            finiShortTradeVolume,
            finiShortTradeValue,
            finiNetTradeVolume,
            finiNetTradeValue,
            finiLongOiVolume,
            finiLongOiValue,
            finiShortOiVolume,
            finiShortOiValue,
            finiNetOiVolume,
            finiNetOiValue,
            sitcLongTradeVolume,
            sitcLongTradeValue,
            sitcShortTradeVolume,
            sitcShortTradeValue,
            sitcNetTradeVolume,
            sitcNetTradeValue,
            sitcLongOiVolume,
            sitcLongOiValue,
            sitcShortOiVolume,
            sitcShortOiValue,
            sitcNetOiVolume,
            sitcNetOiValue,
            dealersLongTradeVolume,
            dealersLongTradeValue,
            dealersShortTradeVolume,
            dealersShortTradeValue,
            dealersNetTradeVolume,
            dealersNetTradeValue,
            dealersLongOiVolume,
            dealersLongOiValue,
            dealersShortOiVolume,
            dealersShortOiValue,
            dealersNetOiVolume,
            dealersNetOiValue,
        };
    }
    async fetchInstInvestorsTxoTrades(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
            commodityId: 'TXO',
        });
        const url = 'https://www.taifex.com.tw/cht/3/callsAndPutsDateDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, dealersCalls, sitcCalls, finiCalls, dealersPuts, sitcPuts, finiPuts] = responseData;
        if (fields[0] !== '日期')
            return null;
        const raw = [
            ...dealersCalls.slice(4),
            ...sitcCalls.slice(4),
            ...finiCalls.slice(4),
            ...dealersPuts.slice(4),
            ...sitcPuts.slice(4),
            ...finiPuts.slice(4),
        ].map(data => numeral(data).value());
        const [dealersCallsLongTradeVolume, dealersCallsLongTradeValue, dealersCallsShortTradeVolume, dealersCallsShortTradeValue, dealersCallsNetTradeVolume, dealersCallsNetTradeValue, dealersCallsLongOiVolume, dealersCallsLongOiValue, dealersCallsShortOiVolume, dealersCallsShortOiValue, dealersCallsNetOiVolume, dealersCallsNetOiValue, sitcCallsLongTradeVolume, sitcCallsLongTradeValue, sitcCallsShortTradeVolume, sitcCallsShortTradeValue, sitcCallsNetTradeVolume, sitcCallsNetTradeValue, sitcCallsLongOiVolume, sitcCallsLongOiValue, sitcCallsShortOiVolume, sitcCallsShortOiValue, sitcCallsNetOiVolume, sitcCallsNetOiValue, finiCallsLongTradeVolume, finiCallsLongTradeValue, finiCallsShortTradeVolume, finiCallsShortTradeValue, finiCallsNetTradeVolume, finiCallsNetTradeValue, finiCallsLongOiVolume, finiCallsLongOiValue, finiCallsShortOiVolume, finiCallsShortOiValue, finiCallsNetOiVolume, finiCallsNetOiValue, dealersPutsLongTradeVolume, dealersPutsLongTradeValue, dealersPutsShortTradeVolume, dealersPutsShortTradeValue, dealersPutsNetTradeVolume, dealersPutsNetTradeValue, dealersPutsLongOiVolume, dealersPutsLongOiValue, dealersPutsShortOiVolume, dealersPutsShortOiValue, dealersPutsNetOiVolume, dealersPutsNetOiValue, sitcPutsLongTradeVolume, sitcPutsLongTradeValue, sitcPutsShortTradeVolume, sitcPutsShortTradeValue, sitcPutsNetTradeVolume, sitcPutsNetTradeValue, sitcPutsLongOiVolume, sitcPutsLongOiValue, sitcPutsShortOiVolume, sitcPutsShortOiValue, sitcPutsNetOiVolume, sitcPutsNetOiValue, finiPutsLongTradeVolume, finiPutsLongTradeValue, finiPutsShortTradeVolume, finiPutsShortTradeValue, finiPutsNetTradeVolume, finiPutsNetTradeValue, finiPutsLongOiVolume, finiPutsLongOiValue, finiPutsShortOiVolume, finiPutsShortOiValue, finiPutsNetOiVolume, finiPutsNetOiValue,] = raw;
        return {
            date,
            finiCallsLongTradeVolume,
            finiCallsLongTradeValue,
            finiCallsShortTradeVolume,
            finiCallsShortTradeValue,
            finiCallsNetTradeVolume,
            finiCallsNetTradeValue,
            finiCallsLongOiVolume,
            finiCallsLongOiValue,
            finiCallsShortOiVolume,
            finiCallsShortOiValue,
            finiCallsNetOiVolume,
            finiCallsNetOiValue,
            finiPutsLongTradeVolume,
            finiPutsLongTradeValue,
            finiPutsShortTradeVolume,
            finiPutsShortTradeValue,
            finiPutsNetTradeVolume,
            finiPutsNetTradeValue,
            finiPutsLongOiVolume,
            finiPutsLongOiValue,
            finiPutsShortOiVolume,
            finiPutsShortOiValue,
            finiPutsNetOiVolume,
            finiPutsNetOiValue,
            sitcCallsLongTradeVolume,
            sitcCallsLongTradeValue,
            sitcCallsShortTradeVolume,
            sitcCallsShortTradeValue,
            sitcCallsNetTradeVolume,
            sitcCallsNetTradeValue,
            sitcCallsLongOiVolume,
            sitcCallsLongOiValue,
            sitcCallsShortOiVolume,
            sitcCallsShortOiValue,
            sitcCallsNetOiVolume,
            sitcCallsNetOiValue,
            sitcPutsLongTradeVolume,
            sitcPutsLongTradeValue,
            sitcPutsShortTradeVolume,
            sitcPutsShortTradeValue,
            sitcPutsNetTradeVolume,
            sitcPutsNetTradeValue,
            sitcPutsLongOiVolume,
            sitcPutsLongOiValue,
            sitcPutsShortOiVolume,
            sitcPutsShortOiValue,
            sitcPutsNetOiVolume,
            sitcPutsNetOiValue,
            dealersCallsLongTradeVolume,
            dealersCallsLongTradeValue,
            dealersCallsShortTradeVolume,
            dealersCallsShortTradeValue,
            dealersCallsNetTradeVolume,
            dealersCallsNetTradeValue,
            dealersCallsLongOiVolume,
            dealersCallsLongOiValue,
            dealersCallsShortOiVolume,
            dealersCallsShortOiValue,
            dealersCallsNetOiVolume,
            dealersCallsNetOiValue,
            dealersPutsLongTradeVolume,
            dealersPutsLongTradeValue,
            dealersPutsShortTradeVolume,
            dealersPutsShortTradeValue,
            dealersPutsNetTradeVolume,
            dealersPutsNetTradeValue,
            dealersPutsLongOiVolume,
            dealersPutsLongOiValue,
            dealersPutsShortOiVolume,
            dealersPutsShortOiValue,
            dealersPutsNetOiVolume,
            dealersPutsNetOiValue,
        };
    }
    async fetchTxoPutCallRatio(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/pcRatioDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, row] = responseData;
        if (!row)
            return null;
        const raw = row.slice(1).map(data => numeral(data).value());
        const [txoPutVolume, txoCallVolume, txoPutCallVolumeRatioPercent, txoPutOi, txoCallOi, txoPutCallRatioPercent,] = raw;
        const txoPutCallVolumeRatio = numeral(txoPutCallVolumeRatioPercent).divide(100).value();
        const txoPutCallRatio = numeral(txoPutCallRatioPercent).divide(100).value();
        return {
            date,
            txoPutVolume,
            txoCallVolume,
            txoPutCallVolumeRatio,
            txoPutOi,
            txoCallOi,
            txoPutCallRatio,
        };
    }
    async fetchLargeTradersTxfPosition(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/largeTraderFutDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, ...rows] = responseData;
        if (fields[0] !== '日期')
            return null;
        const txRows = rows.filter(row => row[1] === 'TX');
        const [weekRow, weekSpecificRow, frontMonthRow, frontMonthSpecificRow, allMonthsRow, allMonthsSpecificRow,] = txRows;
        const frontMonth = frontMonthRow.slice(5, -1).map(data => numeral(data).value());
        const frontMonthSpecific = frontMonthSpecificRow.slice(5, -1).map(data => numeral(data).value());
        const frontMonthNonSpecific = frontMonth.map((data, i) => data - frontMonthSpecific[i]);
        const allMonths = allMonthsRow.slice(5, -1).map(data => numeral(data).value());
        const allMonthsSpecific = allMonthsSpecificRow.slice(5, -1).map(data => numeral(data).value());
        const allMonthsNonSpecific = allMonths.map((data, i) => data - allMonthsSpecific[i]);
        const backMonths = allMonths.map((data, i) => data - frontMonth[i]);
        const backMonthsSpecific = allMonthsSpecific.map((data, i) => data - frontMonthSpecific[i]);
        const backMonthsNonSpecific = backMonths.map((data, i) => data - backMonthsSpecific[i]);
        const frontMonthMarketOi = numeral(frontMonthRow.slice(-1)).value();
        const allMonthsMarketOi = numeral(allMonthsRow.slice(-1)).value();
        const backMonthsMarketOi = allMonthsMarketOi - frontMonthMarketOi;
        const raw = [
            ...frontMonth,
            ...frontMonthSpecific,
            ...frontMonthNonSpecific,
            ...allMonths,
            ...allMonthsSpecific,
            ...allMonthsNonSpecific,
            ...backMonths,
            ...backMonthsSpecific,
            ...backMonthsNonSpecific,
        ];
        const [top5FrontMonthLongOi, top5FrontMonthShortOi, top10FrontMonthLongOi, top10FrontMonthShortOi, top5SpecificFrontMonthLongOi, top5SpecificFrontMonthShortOi, top10SpecificFrontMonthLongOi, top10SpecificFrontMonthShortOi, top5NonSpecificFrontMonthLongOi, top5NonSpecificFrontMonthShortOi, top10NonSpecificFrontMonthLongOi, top10NonSpecificFrontMonthShortOi, top5AllMonthsLongOi, top5AllMonthsShortOi, top10AllMonthsLongOi, top10AllMonthsShortOi, top5SpecificAllMonthsLongOi, top5specificAllMonthsShortOi, top10SpecificAllMonthsLongOi, top10SpecificAllMonthsShortOi, top5NonSpecificAllMonthsLongOi, top5NonSpecificAllMonthsShortOi, top10NonSpecificAllMonthsLongOi, top10NonSpecificAllMonthsShortOi, top5BackMonthsLongOi, top5BackMonthsShortOi, top10BackMonthsLongOi, top10BackMonthsShortOi, top5SpecificBackMonthsLongOi, top5SpecificBackMonthsShortOi, top10SpecificBackMonthsLongOi, top10SpecificBackMonthsShortOi, top5NonSpecificBackMonthsLongOi, top5NonSpecificBackMonthsShortOi, top10NonSpecificBackMonthsLongOi, top10NonSpecificBackMonthsShortOi,] = raw;
        const top5FrontMonthNetOi = top5FrontMonthLongOi - top5FrontMonthShortOi;
        const top10FrontMonthNetOi = top10FrontMonthLongOi - top10FrontMonthShortOi;
        const top5SpecificFrontMonthNetOi = top5SpecificFrontMonthLongOi - top5SpecificFrontMonthShortOi;
        const top10SpecificFrontMonthNetOi = top10SpecificFrontMonthLongOi - top10SpecificFrontMonthShortOi;
        const top5NonSpecificFrontMonthNetOi = top5NonSpecificFrontMonthLongOi - top5NonSpecificFrontMonthShortOi;
        const top10NonSpecificFrontMonthNetOi = top10NonSpecificFrontMonthLongOi - top10NonSpecificFrontMonthShortOi;
        const top5AllMonthsNetOi = top5AllMonthsLongOi - top5AllMonthsShortOi;
        const top10AllMonthsNetOi = top10AllMonthsLongOi - top10AllMonthsShortOi;
        const top5SpecificAllMonthsNetOi = top5SpecificAllMonthsLongOi - top5specificAllMonthsShortOi;
        const top10SpecificAllMonthsNetOi = top10SpecificAllMonthsLongOi - top10SpecificAllMonthsShortOi;
        const top5NonSpecificAllMonthsNetOi = top5NonSpecificAllMonthsLongOi - top5NonSpecificAllMonthsShortOi;
        const top10NonSpecificAllMonthsNetOi = top10NonSpecificAllMonthsLongOi - top10NonSpecificAllMonthsShortOi;
        const top5BackMonthsNetOi = top5BackMonthsLongOi - top5BackMonthsShortOi;
        const top10BackMonthsNetOi = top10BackMonthsLongOi - top10BackMonthsShortOi;
        const top5SpecificBackMonthsNetOi = top5SpecificBackMonthsLongOi - top5SpecificBackMonthsShortOi;
        const top10SpecificBackMonthsNetOi = top10SpecificBackMonthsLongOi - top10SpecificBackMonthsShortOi;
        const top5NonSpecificBackMonthsNetOi = top5NonSpecificBackMonthsLongOi - top5NonSpecificBackMonthsShortOi;
        const top10NonSpecificBackMonthsNetOi = top10NonSpecificBackMonthsLongOi - top10NonSpecificBackMonthsShortOi;
        return {
            date,
            top5SpecificFrontMonthLongOi,
            top5SpecificFrontMonthShortOi,
            top5SpecificFrontMonthNetOi,
            top5SpecificBackMonthsLongOi,
            top5SpecificBackMonthsShortOi,
            top5SpecificBackMonthsNetOi,
            top5NonSpecificFrontMonthLongOi,
            top5NonSpecificFrontMonthShortOi,
            top5NonSpecificFrontMonthNetOi,
            top5NonSpecificBackMonthsLongOi,
            top5NonSpecificBackMonthsShortOi,
            top5NonSpecificBackMonthsNetOi,
            top10SpecificFrontMonthLongOi,
            top10SpecificFrontMonthShortOi,
            top10SpecificFrontMonthNetOi,
            top10SpecificBackMonthsLongOi,
            top10SpecificBackMonthsShortOi,
            top10SpecificBackMonthsNetOi,
            top10NonSpecificFrontMonthLongOi,
            top10NonSpecificFrontMonthShortOi,
            top10NonSpecificFrontMonthNetOi,
            top10NonSpecificBackMonthsLongOi,
            top10NonSpecificBackMonthsShortOi,
            top10NonSpecificBackMonthsNetOi,
            frontMonthMarketOi,
            backMonthsMarketOi,
        };
    }
    async fetchLargeTradersTxoPosition(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/largeTraderOptDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, ...rows] = responseData;
        if (fields[0] !== '日期')
            return null;
        const txoRows = rows.filter(row => row[1] === 'TXO');
        const [txoCallWeekRow, txoCallWeekSpecificRow, txoCallFrontMonthRow, txoCallFrontMonthSpecificRow, txoCallAllMonthsRow, txoCallAllMonthsSpecificRow, txoPutWeekRow, txoPutWeekSpecificRow, txoPutFrontMonthRow, txoPutFrontMonthSpecificRow, txoPutAllMonthsRow, txoPutAllMonthsSpecificRow,] = txoRows;
        const txoCallFrontMonth = txoCallFrontMonthRow.slice(6, -1).map(data => numeral(data).value());
        const txoCallFrontMonthSpecific = txoCallFrontMonthSpecificRow.slice(6, -1).map(data => numeral(data).value());
        const txoCallFrontMonthNonSpecific = txoCallFrontMonth.map((data, i) => data - txoCallFrontMonthSpecific[i]);
        const txoCallAllMonths = txoCallAllMonthsRow.slice(6, -1).map(data => numeral(data).value());
        const txoCallAllMonthsSpecific = txoCallAllMonthsSpecificRow.slice(6, -1).map(data => numeral(data).value());
        const txoCallAllMonthsNonSpecific = txoCallAllMonths.map((data, i) => data - txoCallAllMonthsSpecific[i]);
        const txoCallBackMonths = txoCallAllMonths.map((data, i) => data - txoCallFrontMonth[i]);
        const txoCallBackMonthsSpecific = txoCallAllMonthsSpecific.map((data, i) => data - txoCallFrontMonthSpecific[i]);
        const txoCallBackMonthsNonSpecific = txoCallBackMonths.map((data, i) => data - txoCallBackMonthsSpecific[i]);
        const txoCallFrontMonthMarketOi = numeral(txoCallFrontMonthRow.slice(-1)).value();
        const txoCallAllMonthsMarketOi = numeral(txoCallAllMonthsRow.slice(-1)).value();
        const txoCallBackMonthsMarketOi = txoCallAllMonthsMarketOi - txoCallFrontMonthMarketOi;
        const txoPutFrontMonth = txoPutFrontMonthRow.slice(6, -1).map(data => numeral(data).value());
        const txoPutFrontMonthSpecific = txoPutFrontMonthSpecificRow.slice(6, -1).map(data => numeral(data).value());
        const txoPutFrontMonthNonSpecific = txoPutFrontMonth.map((data, i) => data - txoPutFrontMonthSpecific[i]);
        const txoPutAllMonths = txoPutAllMonthsRow.slice(6, -1).map(data => numeral(data).value());
        const txoPutAllMonthsSpecific = txoPutAllMonthsSpecificRow.slice(6, -1).map(data => numeral(data).value());
        const txoPutAllMonthsNonSpecific = txoPutAllMonths.map((data, i) => data - txoPutAllMonthsSpecific[i]);
        const txoPutBackMonths = txoPutAllMonths.map((data, i) => data - txoPutFrontMonth[i]);
        const txoPutBackMonthsSpecific = txoPutAllMonthsSpecific.map((data, i) => data - txoPutFrontMonthSpecific[i]);
        const txoPutBackMonthsNonSpecific = txoPutBackMonths.map((data, i) => data - txoPutBackMonthsSpecific[i]);
        const txoPutFrontMonthMarketOi = numeral(txoPutFrontMonthRow.slice(-1)).value();
        const txoPutAllMonthsMarketOi = numeral(txoPutAllMonthsRow.slice(-1)).value();
        const txoPutBackMonthsMarketOi = txoPutAllMonthsMarketOi - txoPutFrontMonthMarketOi;
        const raw = [
            ...txoCallFrontMonth,
            ...txoCallFrontMonthSpecific,
            ...txoCallFrontMonthNonSpecific,
            ...txoCallAllMonths,
            ...txoCallAllMonthsSpecific,
            ...txoCallAllMonthsNonSpecific,
            ...txoCallBackMonths,
            ...txoCallBackMonthsSpecific,
            ...txoCallBackMonthsNonSpecific,
            ...txoPutFrontMonth,
            ...txoPutFrontMonthSpecific,
            ...txoPutFrontMonthNonSpecific,
            ...txoPutAllMonths,
            ...txoPutAllMonthsSpecific,
            ...txoPutAllMonthsNonSpecific,
            ...txoPutBackMonths,
            ...txoPutBackMonthsSpecific,
            ...txoPutBackMonthsNonSpecific,
        ];
        const [top5TxoCallFrontMonthLongOi, top5TxoCallFrontMonthShortOi, top10TxoCallFrontMonthLongOi, top10TxoCallFrontMonthShortOi, top5SpecificTxoCallFrontMonthLongOi, top5SpecificTxoCallFrontMonthShortOi, top10SpecificTxoCallFrontMonthLongOi, top10SpecificTxoCallFrontMonthShortOi, top5NonSpecificTxoCallFrontMonthLongOi, top5NonSpecificTxoCallFrontMonthShortOi, top10NonSpecificTxoCallFrontMonthLongOi, top10NonSpecificTxoCallFrontMonthShortOi, top5TxoCallAllMonthsLongOi, top5TxoCallAllMonthsShortOi, top10TxoCallAllMonthsLongOi, top10TxoCallAllMonthsShortOi, top5SpecificTxoCallAllMonthsLongOi, top5SpecificTxoCallAllMonthsShortOi, top10SpecificTxoCallAllMonthsLongOi, top10SpecificTxoCallAllMonthsShortOi, top5NonSpecificTxoCallAllMonthsLongOi, top5NonSpecificTxoCallAllMonthsShortOi, top10NonSpecificTxoCallAllMonthsLongOi, top10NonSpecificTxoCallAllMonthsShortOi, top5TxoCallBackMonthsLongOi, top5TxoCallBackMonthsShortOi, top10TxoCallBackMonthsLongOi, top10TxoCallBackMonthsShortOi, top5SpecificTxoCallBackMonthsLongOi, top5SpecificTxoCallBackMonthsShortOi, top10SpecificTxoCallBackMonthsLongOi, top10SpecificTxoCallBackMonthsShortOi, top5NonSpecificTxoCallBackMonthsLongOi, top5NonSpecificTxoCallBackMonthsShortOi, top10NonSpecificTxoCallBackMonthsLongOi, top10NonSpecificTxoCallBackMonthsShortOi, top5TxoPutFrontMonthLongOi, top5TxoPutFrontMonthShortOi, top10TxoPutFrontMonthLongOi, top10TxoPutFrontMonthShortOi, top5SpecificTxoPutFrontMonthLongOi, top5SpecificTxoPutFrontMonthShortOi, top10SpecificTxoPutFrontMonthLongOi, top10SpecificTxoPutFrontMonthShortOi, top5NonSpecificTxoPutFrontMonthLongOi, top5NonSpecificTxoPutFrontMonthShortOi, top10NonSpecificTxoPutFrontMonthLongOi, top10NonSpecificTxoPutFrontMonthShortOi, top5TxoPutAllMonthsLongOi, top5TxoPutAllMonthsShortOi, top10TxoPutAllMonthsLongOi, top10TxoPutAllMonthsShortOi, top5SpecificTxoPutAllMonthsLongOi, top5SpecificTxoPutAllMonthsShortOi, top10SpecificTxoPutAllMonthsLongOi, top10SpecificTxoPutAllMonthsShortOi, top5NonSpecificTxoPutAllMonthsLongOi, top5NonSpecificTxoPutAllMonthsShortOi, top10NonSpecificTxoPutAllMonthsLongOi, top10NonSpecificTxoPutAllMonthsShortOi, top5TxoPutBackMonthsLongOi, top5TxoPutBackMonthsShortOi, top10TxoPutBackMonthsLongOi, top10TxoPutBackMonthsShortOi, top5SpecificTxoPutBackMonthsLongOi, top5SpecificTxoPutBackMonthsShortOi, top10SpecificTxoPutBackMonthsLongOi, top10SpecificTxoPutBackMonthsShortOi, top5NonSpecificTxoPutBackMonthsLongOi, top5NonSpecificTxoPutBackMonthsShortOi, top10NonSpecificTxoPutBackMonthsLongOi, top10NonSpecificTxoPutBackMonthsShortOi,] = raw;
        const top5TxoCallFrontMonthNetOi = top5TxoCallFrontMonthLongOi - top5TxoCallFrontMonthShortOi;
        const top10TxoCallFrontMonthNetOi = top10TxoCallFrontMonthLongOi - top10TxoCallFrontMonthShortOi;
        const top5SpecificTxoCallFrontMonthNetOi = top5SpecificTxoCallFrontMonthLongOi - top5SpecificTxoCallFrontMonthShortOi;
        const top10SpecificTxoCallFrontMonthNetOi = top10SpecificTxoCallFrontMonthLongOi - top10SpecificTxoCallFrontMonthShortOi;
        const top5NonSpecificTxoCallFrontMonthNetOi = top5NonSpecificTxoCallFrontMonthLongOi - top5NonSpecificTxoCallFrontMonthShortOi;
        const top10NonSpecificTxoCallFrontMonthNetOi = top10NonSpecificTxoCallFrontMonthLongOi - top10NonSpecificTxoCallFrontMonthShortOi;
        const top5TxoCallAllMonthsNetOi = top5TxoCallAllMonthsLongOi - top5TxoCallAllMonthsShortOi;
        const top10TxoCallAllMonthsNetOi = top10TxoCallAllMonthsLongOi - top10TxoCallAllMonthsShortOi;
        const top5SpecificTxoCallAllMonthsNetOi = top5SpecificTxoCallAllMonthsLongOi - top5SpecificTxoCallAllMonthsShortOi;
        const top10SpecificTxoCallAllMonthsNetOi = top10SpecificTxoCallAllMonthsLongOi - top10SpecificTxoCallAllMonthsShortOi;
        const top5NonSpecificTxoCallAllMonthsNetOi = top5NonSpecificTxoCallAllMonthsLongOi - top5NonSpecificTxoCallAllMonthsShortOi;
        const top10NonSpecificTxoCallAllMonthsNetOi = top10NonSpecificTxoCallAllMonthsLongOi - top10NonSpecificTxoCallAllMonthsShortOi;
        const top5TxoCallBackMonthsNetOi = top5TxoCallBackMonthsLongOi - top5TxoCallBackMonthsShortOi;
        const top10TxoCallBackMonthsNetOi = top10TxoCallBackMonthsLongOi - top10TxoCallBackMonthsShortOi;
        const top5SpecificTxoCallBackMonthsNetOi = top5SpecificTxoCallBackMonthsLongOi - top5SpecificTxoCallBackMonthsShortOi;
        const top10SpecificTxoCallBackMonthsNetOi = top10SpecificTxoCallBackMonthsLongOi - top10SpecificTxoCallBackMonthsShortOi;
        const top5NonSpecificTxoCallBackMonthsNetOi = top5NonSpecificTxoCallBackMonthsLongOi - top5NonSpecificTxoCallBackMonthsShortOi;
        const top10NonSpecificTxoCallBackMonthsNetOi = top10NonSpecificTxoCallBackMonthsLongOi - top10NonSpecificTxoCallBackMonthsShortOi;
        const top5TxoPutFrontMonthNetOi = top5TxoPutFrontMonthLongOi - top5TxoPutFrontMonthShortOi;
        const top10TxoPutFrontMonthNetOi = top10TxoPutFrontMonthLongOi - top10TxoPutFrontMonthShortOi;
        const top5SpecificTxoPutFrontMonthNetOi = top5SpecificTxoPutFrontMonthLongOi - top5SpecificTxoPutFrontMonthShortOi;
        const top10SpecificTxoPutFrontMonthNetOi = top10SpecificTxoPutFrontMonthLongOi - top10SpecificTxoPutFrontMonthShortOi;
        const top5NonSpecificTxoPutFrontMonthNetOi = top5NonSpecificTxoPutFrontMonthLongOi - top5NonSpecificTxoPutFrontMonthShortOi;
        const top10NonSpecificTxoPutFrontMonthNetOi = top10NonSpecificTxoPutFrontMonthLongOi - top10NonSpecificTxoPutFrontMonthShortOi;
        const top5TxoPutAllMonthsNetOi = top5TxoPutAllMonthsLongOi - top5TxoPutAllMonthsShortOi;
        const top10TxoPutAllMonthsNetOi = top10TxoPutAllMonthsLongOi - top10TxoPutAllMonthsShortOi;
        const top5SpecificTxoPutAllMonthsNetOi = top5SpecificTxoPutAllMonthsLongOi - top5SpecificTxoPutAllMonthsShortOi;
        const top10SpecificTxoPutAllMonthsNetOi = top10SpecificTxoPutAllMonthsLongOi - top10SpecificTxoPutAllMonthsShortOi;
        const top5NonSpecificTxoPutAllMonthsNetOi = top5NonSpecificTxoPutAllMonthsLongOi - top5NonSpecificTxoPutAllMonthsShortOi;
        const top10NonSpecificTxoPutAllMonthsNetOi = top10NonSpecificTxoPutAllMonthsLongOi - top10NonSpecificTxoPutAllMonthsShortOi;
        const top5TxoPutBackMonthsNetOi = top5TxoPutBackMonthsLongOi - top5TxoPutBackMonthsShortOi;
        const top10TxoPutBackMonthsNetOi = top10TxoPutBackMonthsLongOi - top10TxoPutBackMonthsShortOi;
        const top5SpecificTxoPutBackMonthsNetOi = top5SpecificTxoPutBackMonthsLongOi - top5SpecificTxoPutBackMonthsShortOi;
        const top10SpecificTxoPutBackMonthsNetOi = top10SpecificTxoPutBackMonthsLongOi - top10SpecificTxoPutBackMonthsShortOi;
        const top5NonSpecificTxoPutBackMonthsNetOi = top5NonSpecificTxoPutBackMonthsLongOi - top5NonSpecificTxoPutBackMonthsShortOi;
        const top10NonSpecificTxoPutBackMonthsNetOi = top10NonSpecificTxoPutBackMonthsLongOi - top10NonSpecificTxoPutBackMonthsShortOi;
        return {
            date,
            top5SpecificTxoCallFrontMonthLongOi,
            top5SpecificTxoCallFrontMonthShortOi,
            top5SpecificTxoCallFrontMonthNetOi,
            top5SpecificTxoCallBackMonthsLongOi,
            top5SpecificTxoCallBackMonthsShortOi,
            top5SpecificTxoCallBackMonthsNetOi,
            top5NonSpecificTxoCallFrontMonthLongOi,
            top5NonSpecificTxoCallFrontMonthShortOi,
            top5NonSpecificTxoCallFrontMonthNetOi,
            top5NonSpecificTxoCallBackMonthsLongOi,
            top5NonSpecificTxoCallBackMonthsShortOi,
            top5NonSpecificTxoCallBackMonthsNetOi,
            top10SpecificTxoCallFrontMonthLongOi,
            top10SpecificTxoCallFrontMonthShortOi,
            top10SpecificTxoCallFrontMonthNetOi,
            top10SpecificTxoCallBackMonthsLongOi,
            top10SpecificTxoCallBackMonthsShortOi,
            top10SpecificTxoCallBackMonthsNetOi,
            top10NonSpecificTxoCallFrontMonthLongOi,
            top10NonSpecificTxoCallFrontMonthShortOi,
            top10NonSpecificTxoCallFrontMonthNetOi,
            top10NonSpecificTxoCallBackMonthsLongOi,
            top10NonSpecificTxoCallBackMonthsShortOi,
            top10NonSpecificTxoCallBackMonthsNetOi,
            top5SpecificTxoPutFrontMonthLongOi,
            top5SpecificTxoPutFrontMonthShortOi,
            top5SpecificTxoPutFrontMonthNetOi,
            top5SpecificTxoPutBackMonthsLongOi,
            top5SpecificTxoPutBackMonthsShortOi,
            top5SpecificTxoPutBackMonthsNetOi,
            top5NonSpecificTxoPutFrontMonthLongOi,
            top5NonSpecificTxoPutFrontMonthShortOi,
            top5NonSpecificTxoPutFrontMonthNetOi,
            top5NonSpecificTxoPutBackMonthsLongOi,
            top5NonSpecificTxoPutBackMonthsShortOi,
            top5NonSpecificTxoPutBackMonthsNetOi,
            top10SpecificTxoPutFrontMonthLongOi,
            top10SpecificTxoPutFrontMonthShortOi,
            top10SpecificTxoPutFrontMonthNetOi,
            top10SpecificTxoPutBackMonthsLongOi,
            top10SpecificTxoPutBackMonthsShortOi,
            top10SpecificTxoPutBackMonthsNetOi,
            top10NonSpecificTxoPutFrontMonthLongOi,
            top10NonSpecificTxoPutFrontMonthShortOi,
            top10NonSpecificTxoPutFrontMonthNetOi,
            top10NonSpecificTxoPutBackMonthsLongOi,
            top10NonSpecificTxoPutBackMonthsShortOi,
            top10NonSpecificTxoPutBackMonthsNetOi,
            txoCallFrontMonthMarketOi,
            txoCallBackMonthsMarketOi,
            txoPutFrontMonthMarketOi,
            txoPutBackMonthsMarketOi,
        };
    }
    async fetchMxfMarketOi(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            down_type: '1',
            queryStartDate: queryDate,
            queryEndDate: queryDate,
            commodity_id: 'MTX',
        });
        const url = 'https://www.taifex.com.tw/cht/3/futDataDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, ...rows] = responseData;
        if (fields[0] !== '交易日期')
            return null;
        const mxfMarketOi = rows
            .filter(row => row[17] === '一般' && !row[18])
            .reduce((oi, row) => oi + numeral(row[11]).value(), 0);
        return { date, mxfMarketOi };
    }
    async fetchInstInvestorsMxfOi(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
            commodityId: 'MXF',
        });
        const url = 'https://www.taifex.com.tw/cht/3/futContractsDateDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, dealers, sitc, fini] = responseData;
        if (fields[0] !== '日期')
            return null;
        const raw = [...dealers.slice(3), ...sitc.slice(3), ...fini.slice(3)]
            .map(data => numeral(data).value());
        const [dealersLongTradeVolume, dealersLongTradeValue, dealersShortTradeVolume, dealersShortTradeValue, dealersNetTradeVolume, dealersNetTradeValue, dealersLongOiVolume, dealersLongOiValue, dealersShortOiVolume, dealersShortOiValue, dealersNetOiVolume, dealersNetOiValue, sitcLongTradeVolume, sitcLongTradeValue, sitcShortTradeVolume, sitcShortTradeValue, sitcNetTradeVolume, sitcNetTradeValue, sitcLongOiVolume, sitcLongOiValue, sitcShortOiVolume, sitcShortOiValue, sitcNetOiVolume, sitcNetOiValue, finiLongTradeVolume, finiLongTradeValue, finiShortTradeVolume, finiShortTradeValue, finiNetTradeVolume, finiNetTradeValue, finiLongOiVolume, finiLongOiValue, finiShortOiVolume, finiShortOiValue, finiNetOiVolume, finiNetOiValue,] = raw;
        const instInvestorsMxfLongOi = dealersLongOiVolume + sitcLongOiVolume + finiLongOiVolume;
        const instInvestorsMxfShortOi = dealersShortOiVolume + sitcShortOiVolume + finiShortOiVolume;
        return {
            date,
            instInvestorsMxfLongOi,
            instInvestorsMxfShortOi,
        };
    }
    async fetchRetailMxfPosition(date) {
        const [fetchedMxfMarketOi, fetchedInstInvestorsMxfOi] = await Promise.all([
            this.fetchMxfMarketOi(date),
            this.fetchInstInvestorsMxfOi(date),
        ]);
        if (!fetchedMxfMarketOi || !fetchedInstInvestorsMxfOi)
            return null;
        const { mxfMarketOi } = fetchedMxfMarketOi;
        const { instInvestorsMxfLongOi, instInvestorsMxfShortOi } = fetchedInstInvestorsMxfOi;
        const retailMxfLongOi = mxfMarketOi - instInvestorsMxfLongOi;
        const retailMxfShortOi = mxfMarketOi - instInvestorsMxfShortOi;
        const retailMxfNetOi = retailMxfLongOi - retailMxfShortOi;
        const retailMxfLongShortRatio = Math.round(retailMxfNetOi / mxfMarketOi * 10000) / 10000;
        return {
            date,
            retailMxfLongOi,
            retailMxfShortOi,
            retailMxfNetOi,
            retailMxfLongShortRatio,
        };
    }
    async fetchExchangeRates(date) {
        const queryDate = luxon_1.DateTime.fromISO(date).toFormat('yyyy/MM/dd');
        const form = new URLSearchParams({
            queryStartDate: queryDate,
            queryEndDate: queryDate,
        });
        const url = 'https://www.taifex.com.tw/cht/3/dailyFXRateDown';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url, form, { responseType: 'arraybuffer' }))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(iconv.decode(response.data, 'big5')));
        const [fields, row] = responseData;
        if (fields[0] !== '日期')
            return null;
        const raw = row.slice(1).map(data => numeral(data).value());
        const [usdtwd, cnytwd, eurusd, usdjpy, gbpusd, audusd, usdhkd, usdcny, usdzar, nzdusd,] = raw;
        return {
            date,
            usdtwd,
            cnytwd,
            eurusd,
            usdjpy,
            gbpusd,
            audusd,
            usdhkd,
            usdcny,
            usdzar,
            nzdusd,
        };
    }
    async onApplicationBootstrap() {
    }
};
exports.TaifexScraperService = TaifexScraperService;
exports.TaifexScraperService = TaifexScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], TaifexScraperService);


/***/ }),

/***/ "./src/scraper/tdcc-scraper.service.ts":
/*!*********************************************!*\
  !*** ./src/scraper/tdcc-scraper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TdccScraperService = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const csvtojson = __webpack_require__(/*! csvtojson */ "csvtojson");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let TdccScraperService = class TdccScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchEquitiesHolders() {
        const url = 'https://smart.tdcc.com.tw/opendata/getOD.ashx?id=1-5';
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.post(url))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(response.data));
        const [fields, ...rows] = responseData;
        if (fields[0] !== '資料日期')
            return null;
        const distributions = rows.map(row => {
            const [date, symbol, level, holders, shares, proportion] = row;
            return {
                date,
                symbol,
                level: numeral(level).value(),
                holders: numeral(holders).value(),
                shares: numeral(shares).value(),
                proportion: numeral(proportion).value(),
            };
        });
        const data = _(distributions)
            .groupBy('symbol')
            .map((rows) => {
            const { date, symbol } = rows[0];
            const data = rows.map(row => _.omit(row, ['date', 'symbol']));
            return { date, symbol, data };
        })
            .value();
        return data;
    }
    async onApplicationBootstrap() {
    }
};
exports.TdccScraperService = TdccScraperService;
exports.TdccScraperService = TdccScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], TdccScraperService);


/***/ }),

/***/ "./src/scraper/tpex-scraper.service.ts":
/*!*********************************************!*\
  !*** ./src/scraper/tpex-scraper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TpexScraperService = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const common_2 = __webpack_require__(/*! @speculator/common */ "./libs/common/src/index.ts");
let TpexScraperService = class TpexScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchMarketTrades(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/aftertrading/daily_trading_index/st41_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) && response.data);
        if (!responseData)
            return null;
        const data = responseData.aaData.map(row => {
            const [date, ...values] = row;
            const [year, month, day] = date.split('/');
            const formatted = `${+year + 1911}${month}${day}`;
            const formattedDate = luxon_1.DateTime.fromFormat(formatted, 'yyyyMMdd').toISODate();
            const [tradeVolume, tradeValue, transaction, price, change] = values.map(value => numeral(value).value());
            return {
                date: formattedDate,
                tradeVolume,
                tradeValue,
                transaction,
                price,
                change,
            };
        })
            .find(data => data.date === date) || null;
        return data;
    }
    async fetchMarketBreadth(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/aftertrading/market_highlight/highlight_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) && response.data);
        if (!responseData)
            return null;
        const { upNum, upStopNum, downNum, downStopNum, noChangeNum, noTradeNum } = responseData;
        const [up, limitUp, down, limitDown, unchanged, unmatched] = [
            upNum, upStopNum, downNum, downStopNum, noChangeNum, noTradeNum
        ].map(value => numeral(value).value());
        const data = {
            date,
            up,
            limitUp,
            down,
            limitDown,
            unchanged,
            unmatched,
        };
        return data;
    }
    async fetchInstInvestorsTrades(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            t: 'D',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/3insti/3insti_summary/3itrdsum_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) && response.data);
        if (!responseData)
            return null;
        const raw = responseData.aaData
            .map(data => data.slice(1)).flat()
            .map(data => numeral(data).value() || +data);
        const [foreignInvestorsBuy, foreignInvestorsSell, foreignInvestorsNetBuySell, foreignDealersExcludedBuy, foreignDealersExcludedSell, foreignDealersExcludedNetBuySell, foreignDealersBuy, foreignDealersSell, foreignDealersNetBuySell, sitcBuy, sitcSell, sitcNetBuySell, dealersBuy, dealersSell, dealersNetBuySell, dealersProprietaryBuy, dealersProprietarySell, dealersProprietaryNetBuySell, dealersHedgeBuy, dealersHedgeSell, dealersHedgeNetBuySell,] = raw;
        return {
            date,
            foreignDealersExcludedBuy,
            foreignDealersExcludedSell,
            foreignDealersExcludedNetBuySell,
            foreignDealersBuy,
            foreignDealersSell,
            foreignDealersNetBuySell,
            foreignInvestorsBuy,
            foreignInvestorsSell,
            foreignInvestorsNetBuySell,
            sitcBuy,
            sitcSell,
            sitcNetBuySell,
            dealersProprietaryBuy,
            dealersProprietarySell,
            dealersProprietaryNetBuySell,
            dealersHedgeBuy,
            dealersHedgeSell,
            dealersHedgeNetBuySell,
            dealersBuy,
            dealersSell,
            dealersNetBuySell,
        };
    }
    async fetchMarginTransactions(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/margin_trading/margin_balance/margin_bal_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) && response.data);
        if (!responseData)
            return null;
        const raw = [
            ...responseData.tfootData_one,
            ...responseData.tfootData_two
        ]
            .map(data => numeral(data).value())
            .filter(data => data);
        const [marginBalancePrev, marginPurchase, marginSale, cashRedemption, marginBalance, shortBalancePrev, shortCovering, shortSale, stockRedemption, shortBalance, marginBalanceValuePrev, marginPurchaseValue, marginSaleValue, cashRedemptionValue, marginBalanceValue,] = raw;
        const marginBalanceChange = marginBalance - marginBalancePrev;
        const marginBalanceValueChange = marginBalanceValue - marginBalanceValuePrev;
        const shortBalanceChange = shortBalance - shortBalancePrev;
        return {
            date,
            marginBalance,
            marginBalanceChange,
            marginBalanceValue,
            marginBalanceValueChange,
            shortBalance,
            shortBalanceChange,
        };
    }
    async fetchIndicesQuotes(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/iNdex_info/minute_index/1MIN_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) ? response.data : null);
        if (!responseData)
            return null;
        const quotes = responseData.aaData.reduce((quotes, row) => {
            const [time, IX0044, IX0045, IX0046, IX0048, IX0049, IX0050, IX0100, IX0051, IX0052, IX0053, IX0054, IX0055, IX0056, IX0057, IX0058, IX0059, IX0099, IX0075, IX0047, IX0043, tradeValue, tradeVolume, transaction, bidOrders, askOrders, bidVolume, askVolume,] = row;
            return [
                ...quotes,
                { date, time, symbol: 'IX0044', name: '櫃檯紡纖類指數', price: numeral(IX0044).value() },
                { date, time, symbol: 'IX0045', name: '櫃檯機械類指數', price: numeral(IX0045).value() },
                { date, time, symbol: 'IX0046', name: '櫃檯鋼鐵類指數', price: numeral(IX0046).value() },
                { date, time, symbol: 'IX0048', name: '櫃檯營建類指數', price: numeral(IX0048).value() },
                { date, time, symbol: 'IX0049', name: '櫃檯航運類指數', price: numeral(IX0049).value() },
                { date, time, symbol: 'IX0050', name: '櫃檯觀光類指數', price: numeral(IX0050).value() },
                { date, time, symbol: 'IX0100', name: '櫃檯其他類指數', price: numeral(IX0100).value() },
                { date, time, symbol: 'IX0051', name: '櫃檯化工類指數', price: numeral(IX0051).value() },
                { date, time, symbol: 'IX0052', name: '櫃檯生技醫療類指數', price: numeral(IX0052).value() },
                { date, time, symbol: 'IX0053', name: '櫃檯半導體類指數', price: numeral(IX0053).value() },
                { date, time, symbol: 'IX0054', name: '櫃檯電腦及週邊類指數', price: numeral(IX0054).value() },
                { date, time, symbol: 'IX0055', name: '櫃檯光電業類指數', price: numeral(IX0055).value() },
                { date, time, symbol: 'IX0056', name: '櫃檯通信網路類指數', price: numeral(IX0056).value() },
                { date, time, symbol: 'IX0057', name: '櫃檯電子零組件類指數', price: numeral(IX0057).value() },
                { date, time, symbol: 'IX0058', name: '櫃檯電子通路類指數', price: numeral(IX0058).value() },
                { date, time, symbol: 'IX0059', name: '櫃檯資訊服務類指數', price: numeral(IX0059).value() },
                { date, time, symbol: 'IX0099', name: '櫃檯其他電子類指數', price: numeral(IX0099).value() },
                { date, time, symbol: 'IX0075', name: '櫃檯文化創意業類指數', price: numeral(IX0075).value() },
                { date, time, symbol: 'IX0047', name: '櫃檯電子類指數', price: numeral(IX0047).value() },
                { date, time, symbol: 'IX0043', name: '櫃檯指數', price: numeral(IX0043).value() },
            ];
        }, []);
        const data = _(quotes)
            .groupBy('symbol')
            .map((data) => {
            const [prev, ...quotes] = data;
            const { date, symbol, name } = prev;
            const openPrice = _.minBy(quotes, 'time').price;
            const highPrice = _.maxBy(quotes, 'price').price;
            const lowPrice = _.minBy(quotes, 'price').price;
            const closePrice = _.maxBy(quotes, 'time').price;
            const referencePrice = prev.price;
            const change = numeral(closePrice).subtract(referencePrice).value();
            const changePercent = +numeral(change).divide(referencePrice).multiply(100).format('0.00');
            return {
                date,
                symbol,
                name,
                openPrice,
                highPrice,
                lowPrice,
                closePrice,
                change,
                changePercent,
            };
        })
            .value();
        return data;
    }
    async fetchIndicesTrades(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/historical/trading_vol_ratio/sectr_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) ? response.data : null);
        if (!responseData)
            return null;
        const indices = responseData.aaData.map(row => {
            const [name, tradeValue, tradeValueWeight, tradeVolume, tradeVolumeWeight,] = row;
            return {
                date,
                symbol: (name),
                tradeVolume: numeral(tradeVolume).value(),
                tradeValue: numeral(tradeValue).value(),
                tradeWeight: numeral(tradeValueWeight).value(),
            };
        });
        const electronic = indices.reduce((trades, data) => {
            return [
                common_2.Index.TPExSemiconductors,
                common_2.Index.TPExComputerAndPeripheralEquipment,
                common_2.Index.TPExOptoelectronic,
                common_2.Index.TPExCommunicationsAndInternet,
                common_2.Index.TPExElectronicPartsComponents,
                common_2.Index.TPExElectronicProductsDistribution,
                common_2.Index.TPExInformationService,
                common_2.Index.TPExOtherElectronic,
            ].includes(data.symbol)
                ? {
                    ...trades,
                    tradeVolume: trades.tradeVolume + data.tradeVolume,
                    tradeValue: trades.tradeValue + data.tradeValue,
                    tradeWeight: trades.tradeWeight + data.tradeWeight,
                } : trades;
        }, { date, symbol: common_2.Index.TPExElectronic, tradeVolume: 0, tradeValue: 0, tradeWeight: 0 });
        indices.push(electronic);
        const data = indices.filter(index => index.symbol);
        return data;
    }
    async fetchEquitiesQuotes(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            d: formattedDate,
            o: 'json',
        });
        const url = `https://www.tpex.org.tw/web/stock/aftertrading/daily_close_quotes/stk_quote_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.iTotalRecords > 0) ? response.data : null);
        if (!responseData)
            return null;
        const data = responseData.aaData
            .filter(row => !(0, common_2.isWarrant)(row[0]))
            .map(row => {
            const [symbol, name, ...values] = row;
            const [closePrice, change, openPrice, highPrice, lowPrice, avgPrice, tradeVolume, tradeValue, transaction,] = values.slice(0, 9).map(value => numeral(value).value());
            const referencePrice = (closePrice && change !== null) && numeral(closePrice).subtract(change).value() || null;
            const changePercent = (closePrice && change !== null) && +numeral(change).divide(referencePrice).multiply(100).format('0.00') || null;
            return {
                date,
                symbol,
                name,
                openPrice,
                highPrice,
                lowPrice,
                closePrice,
                change,
                changePercent,
                tradeVolume,
                tradeValue,
                transaction,
            };
        });
        return data;
    }
    async fetchEquitiesInstInvestorsTrades(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            o: 'json',
            se: 'EW',
            t: 'D',
            d: formattedDate,
        });
        const url = `https://www.tpex.org.tw/web/stock/3insti/daily_trade/3itrade_hedge_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then((response) => response.data.iTotalRecords > 0 ? response.data : null);
        if (!responseData)
            return null;
        const data = responseData.aaData.reduce((tickers, raw) => {
            const [symbol, name, ...values] = raw;
            const [foreignDealersExcludedBuy, foreignDealersExcludedSell, foreignDealersExcludedNetBuySell, foreignDealersBuy, foreignDealersSell, foreignDealersNetBuySell, foreignInvestorsBuy, foreignInvestorsSell, foreignInvestorsNetBuySell, sitcBuy, sitcSell, sitcNetBuySell, dealersProprietaryBuy, dealersProprietarySell, dealersProprietaryNetBuySell, dealersHedgeBuy, dealersHedgeSell, dealersHedgeNetBuySell, dealersBuy, dealersSell, dealersNetBuySell, instInvestorsNetBuySell,] = values.map(value => numeral(value).value());
            const ticker = {
                date,
                symbol,
                name,
                foreignDealersExcludedBuy,
                foreignDealersExcludedSell,
                foreignDealersExcludedNetBuySell,
                foreignDealersBuy,
                foreignDealersSell,
                foreignDealersNetBuySell,
                foreignInvestorsBuy,
                foreignInvestorsSell,
                foreignInvestorsNetBuySell,
                sitcBuy,
                sitcSell,
                sitcNetBuySell,
                dealersProprietaryBuy,
                dealersProprietarySell,
                dealersProprietaryNetBuySell,
                dealersHedgeBuy,
                dealersHedgeSell,
                dealersHedgeNetBuySell,
                dealersBuy,
                dealersSell,
                dealersNetBuySell,
            };
            return [...tickers, ticker];
        }, []);
        return data;
    }
    async fetchEquitiesValues(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const year = dt.get('year') - 1911;
        const formattedDate = `${year}/${dt.toFormat('MM/dd')}`;
        const query = new URLSearchParams({
            l: 'zh-tw',
            o: 'json',
            d: formattedDate,
        });
        const url = `https://www.tpex.org.tw/web/stock/aftertrading/peratio_analysis/pera_result.php?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then((response) => response.data.iTotalRecords > 0 ? response.data : null);
        if (!responseData)
            return null;
        const data = responseData.aaData.reduce((tickers, row) => {
            const [symbol, name, peRatio, dividendPerShare, dividendYear, dividendYield, pbRatio] = row;
            const ticker = {
                date,
                symbol,
                name,
                peRatio: numeral(peRatio).value(),
                pbRatio: numeral(pbRatio).value(),
                dividendYield: numeral(dividendYield).value(),
                dividendYear: dividendYear + 1911,
            };
            return [...tickers, ticker];
        }, []);
        return data;
    }
    async onApplicationBootstrap() {
    }
};
exports.TpexScraperService = TpexScraperService;
exports.TpexScraperService = TpexScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], TpexScraperService);


/***/ }),

/***/ "./src/scraper/twse-scraper.service.ts":
/*!*********************************************!*\
  !*** ./src/scraper/twse-scraper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwseScraperService = void 0;
const _ = __webpack_require__(/*! lodash */ "lodash");
const cheerio = __webpack_require__(/*! cheerio */ "cheerio");
const iconv = __webpack_require__(/*! iconv-lite */ "iconv-lite");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const common_2 = __webpack_require__(/*! @speculator/common */ "./libs/common/src/index.ts");
let TwseScraperService = class TwseScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchListedStocks(options) {
        const url = options?.market === 'OTC'
            ? 'https://isin.twse.com.tw/isin/class_main.jsp?market=2&issuetype=4'
            : 'https://isin.twse.com.tw/isin/class_main.jsp?market=1&issuetype=1';
        const page = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url, { responseType: 'arraybuffer' })).then((response) => iconv.decode(response.data, 'big5'));
        const $ = cheerio.load(page);
        const rows = $('.h4 tr');
        const data = rows
            .slice(1)
            .map((i, el) => {
            const td = $(el).find('td');
            return {
                symbol: td.eq(2).text().trim(),
                name: td.eq(3).text().trim(),
                market: td.eq(4).text().trim(),
                industry: td.eq(6).text().trim(),
            };
        })
            .toArray();
        return data;
    }
    async fetchMarketTrades(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
        });
        const url = `https://www.twse.com.tw/exchangeReport/FMTQIK?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') && response.data);
        if (!responseData)
            return null;
        const data = responseData.data
            .map(row => {
            const [date, ...values] = row;
            const [year, month, day] = date.split('/');
            const formatted = `${+year + 1911}${month}${day}`;
            const formattedDate = luxon_1.DateTime.fromFormat(formatted, 'yyyyMMdd').toISODate();
            const [tradeVolume, tradeValue, transaction, price, change] = values.map(value => numeral(value).value());
            return {
                date: formattedDate,
                tradeVolume,
                tradeValue,
                transaction,
                price,
                change,
            };
        })
            .find(data => data.date === date) || null;
        return data;
    }
    async fetchMarketBreadth(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
            type: 'MS',
        });
        const url = `https://www.twse.com.tw/exchangeReport/MI_INDEX?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') && response.data);
        if (!responseData)
            return null;
        const raw = responseData.data8.map(row => row[2]);
        const [up, limitUp, down, limitDown, unchanged, unmatched, notApplicable] = [
            ...raw[0].replace(')', '').split('('),
            ...raw[1].replace(')', '').split('('),
            ...raw.slice(2),
        ].map(value => numeral(value).value());
        const data = {
            date,
            up,
            limitUp,
            down,
            limitDown,
            unchanged,
            unmatched: unmatched + notApplicable,
        };
        return data;
    }
    async fetchInstInvestorsTrades(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            dayDate: formattedDate,
            type: 'day',
        });
        const url = `https://www.twse.com.tw/fund/BFI82U?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') && response.data);
        if (!responseData)
            return null;
        const raw = responseData.data
            .map(data => data.slice(1)).flat()
            .map(data => numeral(data).value() || +data);
        const [dealersProprietaryBuy, dealersProprietarySell, dealersProprietaryNetBuySell, dealersHedgeBuy, dealersHedgeSell, dealersHedgeNetBuySell, sitcBuy, sitcSell, sitcNetBuySell, foreignDealersExcludedBuy, foreignDealersExcludedSell, foreignDealersExcludedNetBuySell, foreignDealersBuy, foreignDealersSell, foreignDealersNetBuySell,] = raw;
        const foreignInvestorsBuy = foreignDealersExcludedBuy + foreignDealersBuy;
        const foreignInvestorsSell = foreignDealersExcludedSell + foreignDealersSell;
        const foreignInvestorsNetBuySell = foreignDealersExcludedNetBuySell + foreignDealersNetBuySell;
        const dealersBuy = dealersProprietaryBuy + dealersHedgeBuy;
        const dealersSell = dealersProprietarySell + dealersHedgeSell;
        const dealersNetBuySell = dealersProprietaryNetBuySell + dealersHedgeNetBuySell;
        return {
            date,
            foreignDealersExcludedBuy,
            foreignDealersExcludedSell,
            foreignDealersExcludedNetBuySell,
            foreignDealersBuy,
            foreignDealersSell,
            foreignDealersNetBuySell,
            foreignInvestorsBuy,
            foreignInvestorsSell,
            foreignInvestorsNetBuySell,
            sitcBuy,
            sitcSell,
            sitcNetBuySell,
            dealersProprietaryBuy,
            dealersProprietarySell,
            dealersProprietaryNetBuySell,
            dealersHedgeBuy,
            dealersHedgeSell,
            dealersHedgeNetBuySell,
            dealersBuy,
            dealersSell,
            dealersNetBuySell,
        };
    }
    async fetchMarginTransactions(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
            selectType: 'MS',
        });
        const url = `https://www.twse.com.tw/en/exchangeReport/MI_MARGN?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') ? response.data : null);
        const creditTable = responseData.tables.find((table) => table.title.includes('Margin transaction summary'));
        if (!creditTable || !creditTable.data)
            return null;
        const data = creditTable.data;
        if (!responseData)
            return null;
        if (!data.length)
            return null;
        const raw = data
            .map(data => data.slice(1)).flat()
            .map(data => numeral(data).value() || +data);
        const [marginPurchase, marginSale, cashRedemption, marginBalancePrev, marginBalance, shortCovering, shortSale, stockRedemption, shortBalancePrev, shortBalance, marginPurchaseValue, marginSaleValue, cashRedemptionValue, marginBalanceValuePrev, marginBalanceValue,] = raw;
        const marginBalanceChange = marginBalance - marginBalancePrev;
        const marginBalanceValueChange = marginBalanceValue - marginBalanceValuePrev;
        const shortBalanceChange = shortBalance - shortBalancePrev;
        return {
            date,
            marginBalance,
            marginBalanceChange,
            marginBalanceValue,
            marginBalanceValueChange,
            shortBalance,
            shortBalanceChange,
        };
    }
    async fetchIndicesQuotes(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
        });
        const url = `https://www.twse.com.tw/exchangeReport/MI_5MINS_INDEX?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') ? response.data : null);
        if (!responseData)
            return null;
        const quotes = responseData.data.reduce((quotes, row) => {
            const [time, IX0001, IX0007, IX0008, IX0009, IX0010, IX0011, IX0012, IX0016, IX0017, IX0018, IX0019, IX0020, IX0021, IX0022, IX0023, IX0024, IX0025, IX0026, IX0027, IX0028, IX0029, IX0030, IX0031, IX0032, IX0033, IX0034, IX0035, IX0036, IX0037, IX0038, IX0039, IX0040, IX0041, IX0042,] = row;
            return [
                ...quotes,
                { date, time, symbol: 'IX0001', name: '發行量加權股價指數', price: numeral(IX0001).value() },
                { date, time, symbol: 'IX0007', name: '未含金融保險股指數', price: numeral(IX0007).value() },
                { date, time, symbol: 'IX0008', name: '未含電子股指數', price: numeral(IX0008).value() },
                { date, time, symbol: 'IX0009', name: '未含金融電子股指數', price: numeral(IX0009).value() },
                { date, time, symbol: 'IX0010', name: '水泥類指數', price: numeral(IX0010).value() },
                { date, time, symbol: 'IX0011', name: '食品類指數', price: numeral(IX0011).value() },
                { date, time, symbol: 'IX0012', name: '塑膠類指數', price: numeral(IX0012).value() },
                { date, time, symbol: 'IX0016', name: '紡織纖維類指數', price: numeral(IX0016).value() },
                { date, time, symbol: 'IX0017', name: '電機機械類指數', price: numeral(IX0017).value() },
                { date, time, symbol: 'IX0018', name: '電器電纜類指數', price: numeral(IX0018).value() },
                { date, time, symbol: 'IX0019', name: '化學生技醫療類指數', price: numeral(IX0019).value() },
                { date, time, symbol: 'IX0020', name: '化學類指數', price: numeral(IX0020).value() },
                { date, time, symbol: 'IX0021', name: '生技醫療類指數', price: numeral(IX0021).value() },
                { date, time, symbol: 'IX0022', name: '玻璃陶瓷類指數', price: numeral(IX0022).value() },
                { date, time, symbol: 'IX0023', name: '造紙類指數', price: numeral(IX0023).value() },
                { date, time, symbol: 'IX0024', name: '鋼鐵類指數', price: numeral(IX0024).value() },
                { date, time, symbol: 'IX0025', name: '橡膠類指數', price: numeral(IX0025).value() },
                { date, time, symbol: 'IX0026', name: '汽車類指數', price: numeral(IX0026).value() },
                { date, time, symbol: 'IX0027', name: '電子工業類指數', price: numeral(IX0027).value() },
                { date, time, symbol: 'IX0028', name: '半導體類指數', price: numeral(IX0028).value() },
                { date, time, symbol: 'IX0029', name: '電腦及週邊設備類指數', price: numeral(IX0029).value() },
                { date, time, symbol: 'IX0030', name: '光電類指數', price: numeral(IX0030).value() },
                { date, time, symbol: 'IX0031', name: '通信網路類指數', price: numeral(IX0031).value() },
                { date, time, symbol: 'IX0032', name: '電子零組件類指數', price: numeral(IX0032).value() },
                { date, time, symbol: 'IX0033', name: '電子通路類指數', price: numeral(IX0033).value() },
                { date, time, symbol: 'IX0034', name: '資訊服務類指數', price: numeral(IX0034).value() },
                { date, time, symbol: 'IX0035', name: '其他電子類指數', price: numeral(IX0035).value() },
                { date, time, symbol: 'IX0036', name: '建材營造類指數', price: numeral(IX0036).value() },
                { date, time, symbol: 'IX0037', name: '航運類指數', price: numeral(IX0037).value() },
                { date, time, symbol: 'IX0038', name: '觀光類指數', price: numeral(IX0038).value() },
                { date, time, symbol: 'IX0039', name: '金融保險類指數', price: numeral(IX0039).value() },
                { date, time, symbol: 'IX0040', name: '貿易百貨類指數', price: numeral(IX0040).value() },
                { date, time, symbol: 'IX0041', name: '油電燃氣類指數', price: numeral(IX0041).value() },
                { date, time, symbol: 'IX0042', name: '其他類指數', price: numeral(IX0042).value() },
            ];
        }, []);
        const data = _(quotes)
            .groupBy('symbol')
            .map((data) => {
            const [prev, ...quotes] = data;
            const { date, symbol, name } = prev;
            const openPrice = _.minBy(quotes, 'time').price;
            const highPrice = _.maxBy(quotes, 'price').price;
            const lowPrice = _.minBy(quotes, 'price').price;
            const closePrice = _.maxBy(quotes, 'time').price;
            const referencePrice = prev.price;
            const change = numeral(closePrice).subtract(referencePrice).value();
            const changePercent = +numeral(change).divide(referencePrice).multiply(100).format('0.00');
            return {
                date,
                symbol,
                name,
                openPrice,
                highPrice,
                lowPrice,
                closePrice,
                change,
                changePercent,
            };
        })
            .value();
        return data;
    }
    async fetchIndicesTrades(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
        });
        const url = `https://www.twse.com.tw/exchangeReport/BFIAMU?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') ? response.data : null);
        if (!responseData)
            return null;
        const market = await this.fetchMarketTrades(date);
        const data = responseData.data.map(row => {
            const [name, tradeVolume, tradeValue, transaction, change,] = row;
            return {
                date,
                symbol: (0, common_2.getTwseIndexSymbolByName)(name.trim()),
                tradeVolume: numeral(tradeVolume).value(),
                tradeValue: numeral(tradeValue).value(),
                tradeWeight: +numeral(tradeValue).divide(market.tradeValue).multiply(100).format('0.00'),
            };
        });
        return data;
    }
    async fetchEquitiesQuotes(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
            type: 'ALLBUT0999',
        });
        const url = `https://www.twse.com.tw/exchangeReport/MI_INDEX?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => (response.data.stat === 'OK') ? response.data : null);
        if (!responseData)
            return null;
        const data = responseData.data9.map(row => {
            const [symbol, name, ...values] = row;
            const [tradeVolume, transaction, tradeValue, openPrice, highPrice, lowPrice, closePrice,] = values.slice(0, 7).map(value => numeral(value).value());
            const change = values[7].includes('green')
                ? numeral(values[8]).multiply(-1).value()
                : numeral(values[8]).value();
            const referencePrice = closePrice && numeral(closePrice).subtract(change).value();
            const changePercent = closePrice && +numeral(change).divide(referencePrice).multiply(100).format('0.00');
            return {
                date,
                symbol,
                name,
                openPrice,
                highPrice,
                lowPrice,
                closePrice,
                change,
                changePercent,
                tradeVolume,
                tradeValue,
                transaction,
            };
        });
        return data;
    }
    async fetchEquitiesInstInvestorsTrades(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
            selectType: 'ALLBUT0999',
        });
        const url = `https://www.twse.com.tw/fund/T86?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then((response) => (response.data.stat === 'OK' ? response.data : null));
        if (!responseData)
            return null;
        const data = responseData.data.reduce((tickers, row) => {
            const [symbol, name, ...values] = row;
            const [foreignDealersExcludedBuy, foreignDealersExcludedSell, foreignDealersExcludedNetBuySell, foreignDealersBuy, foreignDealersSell, foreignDealersNetBuySell, sitcBuy, sitcSell, sitcNetBuySell, dealersNetBuySell, dealersProprietaryBuy, dealersProprietarySell, dealersProprietaryNetBuySell, dealersHedgeBuy, dealersHedgeSell, dealersHedgeNetBuySell, instInvestorsNetBuySell,] = values.map(value => numeral(value).value());
            const foreignInvestorsBuy = foreignDealersExcludedBuy + foreignDealersBuy;
            const foreignInvestorsSell = foreignDealersExcludedSell + foreignDealersSell;
            const foreignInvestorsNetBuySell = foreignDealersExcludedNetBuySell + foreignDealersNetBuySell;
            const dealersBuy = dealersProprietaryBuy + dealersHedgeBuy;
            const dealersSell = dealersProprietarySell + dealersHedgeSell;
            const ticker = {
                date,
                symbol,
                name: name.trim(),
                foreignDealersExcludedBuy,
                foreignDealersExcludedSell,
                foreignDealersExcludedNetBuySell,
                foreignDealersBuy,
                foreignDealersSell,
                foreignDealersNetBuySell,
                foreignInvestorsBuy,
                foreignInvestorsSell,
                foreignInvestorsNetBuySell,
                sitcBuy,
                sitcSell,
                sitcNetBuySell,
                dealersProprietaryBuy,
                dealersProprietarySell,
                dealersProprietaryNetBuySell,
                dealersHedgeBuy,
                dealersHedgeSell,
                dealersHedgeNetBuySell,
                dealersBuy,
                dealersSell,
                dealersNetBuySell,
            };
            return [...tickers, ticker];
        }, []);
        return data;
    }
    async fetchEquitiesValues(date) {
        const formattedDate = luxon_1.DateTime.fromISO(date).toFormat('yyyyMMdd');
        const query = new URLSearchParams({
            response: 'json',
            date: formattedDate,
            selectType: 'ALL',
        });
        const url = `https://www.twse.com.tw/exchangeReport/BWIBBU_d?${query}`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then((response) => (response.data.stat === 'OK' ? response.data : null));
        if (!responseData)
            return null;
        const data = responseData.data.reduce((tickers, row) => {
            const [symbol, name, dividendYield, dividendYear, peRatio, pbRatio, fiscalYearQuarter] = row;
            const ticker = {
                date,
                symbol,
                name,
                peRatio: numeral(peRatio).value(),
                pbRatio: numeral(pbRatio).value(),
                dividendYield: numeral(dividendYield).value(),
                dividendYear: numeral(dividendYear).value(),
            };
            return [...tickers, ticker];
        }, []);
        return data;
    }
    async onApplicationBootstrap() {
    }
};
exports.TwseScraperService = TwseScraperService;
exports.TwseScraperService = TwseScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], TwseScraperService);


/***/ }),

/***/ "./src/scraper/usdt-scraper.service.ts":
/*!*********************************************!*\
  !*** ./src/scraper/usdt-scraper.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsdtScraperService = void 0;
const csvtojson = __webpack_require__(/*! csvtojson */ "csvtojson");
const numeral = __webpack_require__(/*! numeral */ "numeral");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const axios_1 = __webpack_require__(/*! @nestjs/axios */ "@nestjs/axios");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let UsdtScraperService = class UsdtScraperService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async fetchUsTreasuryYields(date) {
        const dt = luxon_1.DateTime.fromISO(date);
        const month = dt.toFormat('yyyyMM');
        const url = `https://home.treasury.gov/resource-center/data-chart-center/interest-rates/daily-treasury-rates.csv/all/${month}?type=daily_treasury_yield_curve&field_tdr_date_value_month=${month}&page&_format=csv`;
        const responseData = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url))
            .then(response => csvtojson({ noheader: true, output: 'csv' }).fromString(response.data));
        const [fields, ...rows] = responseData;
        if (fields[0] !== 'Date')
            return null;
        const data = rows.map(row => {
            const date = luxon_1.DateTime.fromFormat(row[0], 'MM/dd/yyyy').toISODate();
            const raw = row.slice(1).map(data => numeral(data).value());
            const [us1m, us2m, us3m, us6m, us1y, us2y, us3y, us5y, us7y, us10y, us20y, us30y,] = raw;
            return { date, us1m, us2m, us3m, us6m, us1y, us2y, us3y, us5y, us7y, us10y, us20y, us30y };
        }).find(data => data.date === date);
        return data;
    }
    async onApplicationBootstrap() {
    }
};
exports.UsdtScraperService = UsdtScraperService;
exports.UsdtScraperService = UsdtScraperService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof axios_1.HttpService !== "undefined" && axios_1.HttpService) === "function" ? _a : Object])
], UsdtScraperService);


/***/ }),

/***/ "./src/scraper/yahoo-finance.service.ts":
/*!**********************************************!*\
  !*** ./src/scraper/yahoo-finance.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YahooFinanceService = void 0;
const yahoo_finance2_1 = __webpack_require__(/*! yahoo-finance2 */ "yahoo-finance2");
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let YahooFinanceService = class YahooFinanceService {
    async fetchUsStockMarketIndices(date) {
        const dt = luxon_1.DateTime.fromISO(date).endOf('day');
        const symbols = ['^DJI', '^GSPC', '^IXIC', '^SOX'];
        try {
            const results = await Promise.all(symbols.map(symbol => (yahoo_finance2_1.default.historical(symbol, {
                period1: dt.toISODate(),
                period2: dt.plus({ day: 1 }).toISODate(),
            })
                .then(result => result.find(data => luxon_1.DateTime.fromJSDate(data.date).toISODate() === date)))));
            const [dow30, sp500, nasdaq, sox,] = results;
            return { date, dow30, sp500, nasdaq, sox };
        }
        catch (err) {
            return null;
        }
    }
    async onApplicationBootstrap() {
    }
};
exports.YahooFinanceService = YahooFinanceService;
exports.YahooFinanceService = YahooFinanceService = __decorate([
    (0, common_1.Injectable)()
], YahooFinanceService);


/***/ }),

/***/ "./src/ticker/ticker.module.ts":
/*!*************************************!*\
  !*** ./src/ticker/ticker.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const ticker_schema_1 = __webpack_require__(/*! ./ticker.schema */ "./src/ticker/ticker.schema.ts");
const ticker_repository_1 = __webpack_require__(/*! ./ticker.repository */ "./src/ticker/ticker.repository.ts");
const ticker_service_1 = __webpack_require__(/*! ./ticker.service */ "./src/ticker/ticker.service.ts");
const scraper_module_1 = __webpack_require__(/*! ../scraper/scraper.module */ "./src/scraper/scraper.module.ts");
let TickerModule = class TickerModule {
};
exports.TickerModule = TickerModule;
exports.TickerModule = TickerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: ticker_schema_1.Ticker.name, schema: ticker_schema_1.TickerSchema },
            ]),
            scraper_module_1.ScraperModule,
        ],
        providers: [ticker_repository_1.TickerRepository, ticker_service_1.TickerService],
        exports: [ticker_repository_1.TickerRepository, ticker_service_1.TickerService],
    })
], TickerModule);


/***/ }),

/***/ "./src/ticker/ticker.repository.ts":
/*!*****************************************!*\
  !*** ./src/ticker/ticker.repository.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerRepository = void 0;
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_2 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_2 = __webpack_require__(/*! @speculator/common */ "./libs/common/src/index.ts");
const ticker_schema_1 = __webpack_require__(/*! ./ticker.schema */ "./src/ticker/ticker.schema.ts");
let TickerRepository = class TickerRepository {
    constructor(model) {
        this.model = model;
    }
    async updateTicker(ticker) {
        const { date, symbol } = ticker;
        return this.model.updateOne({ date, symbol }, ticker, { upsert: true });
    }
    async getMoneyFlow(options) {
        const date = options?.date || luxon_1.DateTime.local().toISODate();
        const market = options?.market || common_2.Market.TSE;
        const results = await this.model.aggregate([
            {
                $match: {
                    date: { $lte: date },
                    type: common_2.TickerType.Index,
                    market: market || { $ne: null },
                    symbol: { $nin: [common_2.Index.NonElectronics, common_2.Index.NonFinance, common_2.Index.NonFinanceNonElectronics] },
                },
            },
            { $project: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } },
            { $group: { _id: '$date', data: { $push: '$$ROOT' } } },
            { $sort: { _id: -1 } },
            { $limit: 2 },
        ]);
        const [tickers, tickersPrev] = results.map(doc => doc.data);
        const data = tickers.map(doc => {
            const tradeValuePrev = (0, lodash_1.find)(tickersPrev, { symbol: doc.symbol }).tradeValue;
            const tradeWeightPrev = (0, lodash_1.find)(tickersPrev, { symbol: doc.symbol }).tradeWeight;
            const tradeValueChange = parseFloat((doc.tradeValue - tradeValuePrev).toPrecision(12));
            const tradeWeightChange = parseFloat((doc.tradeWeight - tradeWeightPrev).toPrecision(12));
            return { ...doc, tradeValuePrev, tradeWeightPrev, tradeValueChange, tradeWeightChange };
        });
        return data;
    }
    async getTopMovers(options) {
        const date = options?.date || luxon_1.DateTime.local().toISODate();
        const market = options?.market || common_2.Market.TSE;
        const direction = options?.direction || 'up';
        const top = options?.top || 50;
        const results = await this.model.aggregate([
            {
                $match: {
                    date: { $lte: date },
                    type: common_2.TickerType.Equity,
                    market: market || { $ne: null },
                    changePercent: (direction === 'down') ? { $lt: 0 } : { $gt: 0 },
                },
            },
            { $project: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } },
            { $sort: { date: -1, changePercent: (direction === 'down') ? 1 : -1 } },
            { $group: { _id: '$date', data: { $push: '$$ROOT' } } },
            { $sort: { _id: -1 } },
            { $limit: 1 },
        ]);
        const [tickers] = results.map(doc => doc.data);
        const data = tickers.slice(0, top);
        return data;
    }
    async getMostActives(options) {
        const date = options?.date || luxon_1.DateTime.local().toISODate();
        const market = options?.market || common_2.Market.TSE;
        const trade = options?.trade || 'volume';
        const key = (trade === 'value') ? 'tradeValue' : 'tradeVolume';
        const top = options?.top || 50;
        const results = await this.model.aggregate([
            {
                $match: {
                    date: { $lte: date },
                    type: common_2.TickerType.Equity,
                    market: market || { $ne: null },
                },
            },
            { $project: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } },
            { $sort: { date: -1, [key]: -1 } },
            { $group: { _id: '$date', data: { $push: '$$ROOT' } } },
            { $sort: { _id: -1 } },
            { $limit: 1 },
        ]);
        const [tickers] = results.map(doc => doc.data);
        const data = tickers.slice(0, top);
        return data;
    }
    async getInstInvestorsTrades(options) {
        const date = options?.date || luxon_1.DateTime.local().toISODate();
        const market = options?.market || common_2.Market.TSE;
        const inst = options?.inst || `fini`;
        const net = options?.net || 'buy';
        const top = options?.top || 50;
        const instKey = `${inst}NetBuySell`;
        const results = await this.model.aggregate([
            {
                $match: {
                    date: { $lte: date },
                    type: common_2.TickerType.Equity,
                    market: market || { $ne: null },
                    [instKey]: (net === 'sell') ? { $lt: 0 } : { $gt: 0 },
                },
            },
            { $project: { _id: 0, __v: 0, createdAt: 0, updatedAt: 0 } },
            { $sort: { date: -1, [instKey]: (net === 'sell') ? 1 : -1 } },
            { $group: { _id: '$date', data: { $push: '$$ROOT' } } },
            { $sort: { _id: -1 } },
            { $limit: 1 },
        ]);
        const [tickers] = results.map(doc => doc.data);
        const data = tickers.slice(0, top);
        return data;
    }
};
exports.TickerRepository = TickerRepository;
exports.TickerRepository = TickerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(ticker_schema_1.Ticker.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], TickerRepository);


/***/ }),

/***/ "./src/ticker/ticker.schema.ts":
/*!*************************************!*\
  !*** ./src/ticker/ticker.schema.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerSchema = exports.Ticker = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let Ticker = class Ticker {
};
exports.Ticker = Ticker;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Ticker.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "exchange", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "market", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "symbol", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Ticker.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "openPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "highPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "lowPrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "closePrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "change", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "changePercent", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "tradeVolume", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "tradeValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "transaction", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "tradeWeight", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "finiNetBuySell", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "sitcNetBuySell", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Ticker.prototype, "dealersNetBuySell", void 0);
exports.Ticker = Ticker = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Ticker);
exports.TickerSchema = mongoose_1.SchemaFactory.createForClass(Ticker)
    .index({ date: -1, symbol: 1 }, { unique: true });


/***/ }),

/***/ "./src/ticker/ticker.service.ts":
/*!**************************************!*\
  !*** ./src/ticker/ticker.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var TickerService_1;
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TickerService = void 0;
const luxon_1 = __webpack_require__(/*! luxon */ "luxon");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const schedule_1 = __webpack_require__(/*! @nestjs/schedule */ "@nestjs/schedule");
const common_2 = __webpack_require__(/*! @speculator/common */ "./libs/common/src/index.ts");
const ticker_repository_1 = __webpack_require__(/*! ./ticker.repository */ "./src/ticker/ticker.repository.ts");
const twse_scraper_service_1 = __webpack_require__(/*! ../scraper/twse-scraper.service */ "./src/scraper/twse-scraper.service.ts");
const tpex_scraper_service_1 = __webpack_require__(/*! ../scraper/tpex-scraper.service */ "./src/scraper/tpex-scraper.service.ts");
let TickerService = TickerService_1 = class TickerService {
    constructor(tickerRepository, twseScraperService, tpexScraperService) {
        this.tickerRepository = tickerRepository;
        this.twseScraperService = twseScraperService;
        this.tpexScraperService = tpexScraperService;
    }
    async updateTickers(date = luxon_1.DateTime.local().toISODate()) {
        const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
        await Promise.all([
            this.updateTwseIndicesQuotes(date),
            this.updateTpexIndicesQuotes(date),
        ]).then(() => delay(5000));
        await Promise.all([
            this.updateTwseMarketTrades(date),
            this.updateTpexMarketTrades(date),
        ]).then(() => delay(5000));
        await Promise.all([
            this.updateTwseIndicesTrades(date),
            this.updateTpexIndicesTrades(date),
        ]).then(() => delay(5000));
        await Promise.all([
            this.updateTwseEquitiesQuotes(date),
            this.updateTpexEquitiesQuotes(date),
        ]).then(() => delay(5000));
        await Promise.all([
            this.updateTwseEquitiesInstInvestorsTrades(date),
            this.updateTpexEquitiesInstInvestorsTrades(date),
        ]).then(() => delay(5000));
        common_1.Logger.log(`${date} 已完成`, TickerService_1.name);
    }
    async updateTwseIndicesQuotes(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.twseScraperService.fetchIndicesQuotes(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TWSE,
            market: common_2.Market.TSE,
            symbol: ticker.symbol,
            name: ticker.name,
            openPrice: ticker.openPrice,
            highPrice: ticker.highPrice,
            lowPrice: ticker.lowPrice,
            closePrice: ticker.closePrice,
            change: ticker.change,
            changePercent: ticker.changePercent,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上市指數收盤行情: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上市指數收盤行情: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTpexIndicesQuotes(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.tpexScraperService.fetchIndicesQuotes(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TPEx,
            market: common_2.Market.OTC,
            symbol: ticker.symbol,
            name: ticker.name,
            openPrice: ticker.openPrice,
            highPrice: ticker.highPrice,
            lowPrice: ticker.lowPrice,
            closePrice: ticker.closePrice,
            change: ticker.change,
            changePercent: ticker.changePercent,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上櫃指數收盤行情: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上櫃指數收盤行情: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTwseMarketTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.twseScraperService.fetchMarketTrades(date)
            .then(data => data && {
            date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TWSE,
            market: common_2.Market.TSE,
            symbol: common_2.Index.TAIEX,
            tradeVolume: data.tradeVolume,
            tradeValue: data.tradeValue,
            transaction: data.transaction,
        })
            .then(ticker => ticker && this.tickerRepository.updateTicker(ticker));
        if (updated)
            common_1.Logger.log(`${date} 上市大盤成交量值: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上市大盤成交量值: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTpexMarketTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.tpexScraperService.fetchMarketTrades(date)
            .then(data => data && {
            date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TPEx,
            market: common_2.Market.OTC,
            symbol: common_2.Index.TPEX,
            tradeVolume: data.tradeVolume,
            tradeValue: data.tradeValue,
            transaction: data.transaction,
        })
            .then(ticker => ticker && this.tickerRepository.updateTicker(ticker));
        if (updated)
            common_1.Logger.log(`${date} 上櫃大盤成交量值: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上櫃大盤成交量值: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTwseIndicesTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.twseScraperService.fetchIndicesTrades(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TWSE,
            market: common_2.Market.TSE,
            symbol: ticker.symbol,
            tradeVolume: ticker.tradeVolume,
            tradeValue: ticker.tradeValue,
            tradeWeight: ticker.tradeWeight,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上市類股成交量值: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上市類股成交量值: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTpexIndicesTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.tpexScraperService.fetchIndicesTrades(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Index,
            exchange: common_2.Exchange.TPEx,
            market: common_2.Market.OTC,
            symbol: ticker.symbol,
            tradeVolume: ticker.tradeVolume,
            tradeValue: ticker.tradeValue,
            tradeWeight: ticker.tradeWeight,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上櫃類股成交量值: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上櫃類股成交量值: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTwseEquitiesQuotes(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.twseScraperService.fetchEquitiesQuotes(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Equity,
            exchange: common_2.Exchange.TWSE,
            market: common_2.Market.TSE,
            symbol: ticker.symbol,
            name: ticker.name,
            openPrice: ticker.openPrice,
            highPrice: ticker.highPrice,
            lowPrice: ticker.lowPrice,
            closePrice: ticker.closePrice,
            change: ticker.change,
            changePercent: ticker.changePercent,
            tradeVolume: ticker.tradeVolume,
            tradeValue: ticker.tradeValue,
            transaction: ticker.transaction,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上市個股收盤行情: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上市個股收盤行情: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTpexEquitiesQuotes(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.tpexScraperService.fetchEquitiesQuotes(date)
            .then(data => data && data.map(ticker => ({
            ...ticker,
            date: ticker.date,
            type: common_2.TickerType.Equity,
            exchange: common_2.Exchange.TPEx,
            market: common_2.Market.OTC,
            symbol: ticker.symbol,
            name: ticker.name,
            openPrice: ticker.openPrice,
            highPrice: ticker.highPrice,
            lowPrice: ticker.lowPrice,
            closePrice: ticker.closePrice,
            change: ticker.change,
            changePercent: ticker.changePercent,
            tradeVolume: ticker.tradeVolume,
            tradeValue: ticker.tradeValue,
            transaction: ticker.transaction,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上櫃個股收盤行情: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上櫃個股收盤行情: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTwseEquitiesInstInvestorsTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.twseScraperService.fetchEquitiesInstInvestorsTrades(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Equity,
            exchange: common_2.Exchange.TWSE,
            market: common_2.Market.TSE,
            symbol: ticker.symbol,
            finiNetBuySell: ticker.foreignInvestorsNetBuySell,
            sitcNetBuySell: ticker.sitcNetBuySell,
            dealersNetBuySell: ticker.dealersNetBuySell,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上市個股法人進出: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上市個股法人進出: 尚無資料或非交易日`, TickerService_1.name);
    }
    async updateTpexEquitiesInstInvestorsTrades(date = luxon_1.DateTime.local().toISODate()) {
        const updated = await this.tpexScraperService.fetchEquitiesInstInvestorsTrades(date)
            .then(data => data && data.map(ticker => ({
            date: ticker.date,
            type: common_2.TickerType.Equity,
            exchange: common_2.Exchange.TPEx,
            market: common_2.Market.OTC,
            symbol: ticker.symbol,
            finiNetBuySell: ticker.foreignInvestorsNetBuySell,
            sitcNetBuySell: ticker.sitcNetBuySell,
            dealersNetBuySell: ticker.dealersNetBuySell,
        })))
            .then(data => data && Promise.all(data.map(ticker => this.tickerRepository.updateTicker(ticker))));
        if (updated)
            common_1.Logger.log(`${date} 上櫃個股法人進出: 已更新`, TickerService_1.name);
        else
            common_1.Logger.warn(`${date} 上櫃個股法人進出: 尚無資料或非交易日`, TickerService_1.name);
    }
};
exports.TickerService = TickerService;
__decorate([
    (0, schedule_1.Cron)('0 0 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTwseIndicesQuotes", null);
__decorate([
    (0, schedule_1.Cron)('0 0 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTpexIndicesQuotes", null);
__decorate([
    (0, schedule_1.Cron)('0 30 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTwseMarketTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 30 14 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTpexMarketTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTwseIndicesTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 0 15 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTpexIndicesTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 0 15-21/2 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTwseEquitiesQuotes", null);
__decorate([
    (0, schedule_1.Cron)('0 0 15-21/2 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTpexEquitiesQuotes", null);
__decorate([
    (0, schedule_1.Cron)('0 30 16 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTwseEquitiesInstInvestorsTrades", null);
__decorate([
    (0, schedule_1.Cron)('0 30 16 * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TickerService.prototype, "updateTpexEquitiesInstInvestorsTrades", null);
exports.TickerService = TickerService = TickerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof ticker_repository_1.TickerRepository !== "undefined" && ticker_repository_1.TickerRepository) === "function" ? _a : Object, typeof (_b = typeof twse_scraper_service_1.TwseScraperService !== "undefined" && twse_scraper_service_1.TwseScraperService) === "function" ? _b : Object, typeof (_c = typeof tpex_scraper_service_1.TpexScraperService !== "undefined" && tpex_scraper_service_1.TpexScraperService) === "function" ? _c : Object])
], TickerService);


/***/ }),

/***/ "@nestjs/axios":
/*!********************************!*\
  !*** external "@nestjs/axios" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@nestjs/axios");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "@nestjs/schedule":
/*!***********************************!*\
  !*** external "@nestjs/schedule" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/schedule");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cheerio");

/***/ }),

/***/ "csvtojson":
/*!****************************!*\
  !*** external "csvtojson" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("csvtojson");

/***/ }),

/***/ "exceljs":
/*!**************************!*\
  !*** external "exceljs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("exceljs");

/***/ }),

/***/ "iconv-lite":
/*!*****************************!*\
  !*** external "iconv-lite" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("iconv-lite");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/***/ ((module) => {

module.exports = require("luxon");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "numeral":
/*!**************************!*\
  !*** external "numeral" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "yahoo-finance2":
/*!*********************************!*\
  !*** external "yahoo-finance2" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("yahoo-finance2");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;