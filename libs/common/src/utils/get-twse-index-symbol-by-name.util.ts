/* eslint-disable prettier/prettier */
import { Index } from '../enums/index.enum';

export function getTwseIndexSymbolByName(name: string) {
    const indices = {
        '水泥類指數': Index.Cement,
        '食品類指數': Index.Food,
        '塑膠類指數': Index.Plastic,
        '紡織纖維類指數': Index.Textiles,
        '電機機械類指數': Index.ElectricMachinery,
        '電器電纜類指數': Index.ElectricalAndCable,
        '化學生技醫療類指數': Index.ChemicalBiotechnologyAndMedicalCare,
        '化學類指數': Index.Chemical,
        '生技醫療類指數': Index.BiotechnologyAndMedicalCare,
        '玻璃陶瓷類指數': Index.GlassAndCeramic,
        '造紙類指數': Index.PaperAndPulp,
        '鋼鐵類指數': Index.IronAndSteel,
        '橡膠類指數': Index.Rubber,
        '汽車類指數': Index.Automobile,
        '電子類指數': Index.Electronics,
        '半導體類指數': Index.Semiconductors,
        '電腦及週邊設備類指數': Index.ComputerAndPeripheralEquipment,
        '光電類指數': Index.Optoelectronics,
        '通信網路類指數': Index.CommunicationsTechnologyAndInternet,
        '電子零組件類指數': Index.ElectronicPartsComponents,
        '電子通路類指數': Index.ElectronicProductsDistirbution,
        '資訊服務類指數': Index.InformationService,
        '其他電子類指數': Index.OtherElectronics,
        '建材營造類指數': Index.BuildingMaterialsAndConstruction,
        '航運業類指數': Index.ShippingAndTransportation,
        '觀光事業類指數': Index.Tourism,
        '金融保險類指數': Index.FinancialAndInsurance,
        '貿易百貨類指數': Index.TradingAndConsumerGoods,
        '油電燃氣類指數': Index.OilGasAndElectricity,
        '其他類指數': Index.Other,
        '電子工業類指數': Index.Electronics,
        '航運類指數': Index.ShippingAndTransportation,
        '觀光類指數': Index.Tourism,
    };
    return indices[name];
}