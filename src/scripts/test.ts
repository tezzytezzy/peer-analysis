// import { ItemWithSymbol } from './data/interface'

// interface coordDesc {
//   xMarketCap: number,
//   yPriceChangeFiveDayPercent: number
// }

// type coords = coordDesc[]


// /**
//  * 
//  * @returns an array of 1) symbols and 2) graph coordinates
//  */
// function getChartData(): { symbols: string[], coordData: coords } {
//   // same property names must be defined as output in these two lines below
//   // equivalent to using an interface
//   let symbols: string[] = []
//   let coordData: coords = []

//   const targetSymbol = 'DDD'.toUpperCase()

//   // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

//   const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
//   const b = JSON.parse(str) as Array<ItemWithSymbol>

//   const targetSec = b.filter(x => x.symbol == targetSymbol)
//   const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

//   const secs = b.filter(x => x.industry == targetIndustry)

//   secs.forEach(sec => {
//     symbols.push(sec.symbol)

//     coordData.push({
//       xMarketCap: isUndefined(sec.marketCap),
//       yPriceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent)
//     })
//   })

//   return { symbols, coordData }
// }

// /**
//  * Handle missing field value coming in as 'undefined'
//  * @param num 
//  * @returns zero (0) where 'undefined', otherwise itself
//  */
// function isUndefined(num: number): number {
//   return (num === undefined) ? 0 : num
// }


// const { symbols, coordData } = getChartData()

// console.log(symbols)
// console.log(coordData)
// import { secDesc } from './data/asx'
// import fs from 'fs'
// import { config } from 'dotenv'

// config()


// const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

// function conv2 (secArray: secDesc | null): string {
//   // let obj = {}
//   // secArray.forEach(sec => obj[sec.item] = sec.value)
//   // return obj

//   // use object literal
//   const res = { seclist: secArray }
//   return JSON.stringify(res, null, 2)
// }

// function writeIt() {
//   try {
//     const jsonDir = process.cwd() + process.env.JSON_FOLDER

//     if (!fs.existsSync(jsonDir)) { fs.mkdirSync(jsonDir) }

//     fs.writeFileSync(jsonDir + process.env.ASX_JSON_FILE_PATH_AND_NAME, jStr)
//   } catch (err) {
//     console.error(err)
//   }
// }

// const jStr = conv2(JSON.parse(str) as secDesc)
// writeIt()


// // JSON WRITING TEST - DONE 
// import { secDescData, secChartData } from './data/asx'
// import DataFactory, { DATA_SOURCE_TYPE, JSON_DATA_TYPE } from './data/factory'

// const factory = new DataFactory()
// const asx = factory.setDataSource(DATA_SOURCE_TYPE.ASX)


// const rawData1 = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
// const resRawData = JSON.parse(rawData1) as secDescData

// let jsonCovertedData = asx.convertArrayToJSON(resRawData)

// asx.writeJSON(jsonCovertedData, JSON_DATA_TYPE.RAW)

// function getAsxChartData(rawData: string): secChartData {
//   // same property names must be defined as output in these two lines below
//   // equivalent to using an interface
//   // let symbols: string[] = []
//   // let coordData: coords = []

//   let chartData: secChartData = []

//   const targetSymbol = 'DDD'.toUpperCase()

//   // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

//   // rawData = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
  
  
//   // const allSecData = JSON.parse(str) as Array<ItemAllProps>
//   const allSecData = JSON.parse(rawData) as secDescData

//   const targetSec = allSecData.filter(x => x.symbol == targetSymbol)
//   const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

//   const secs = allSecData.filter(x => x.industry == targetIndustry)

//   secs.forEach(sec => {
//     chartData.push({
//       symbol: sec.symbol,
//       marketCap: isUndefined(sec.marketCap),
//       priceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent),
//       isTargetSec: (sec.symbol == targetSymbol) ? true : false
//     })
//   })

//   return chartData
// }

// /**
//  * Handle missing field value coming in as 'undefined'
//  * @param num 
//  * @returns zero (0) where 'undefined', otherwise itself
//  */

// function isUndefined(num: number): number {
//   return (num === undefined) ? 0 : num
// }

// const chartData = getAsxChartData(jsonCovertedData)

// jsonCovertedData = asx.convertArrayToJSON(chartData)

// asx.writeJSON(jsonCovertedData, JSON_DATA_TYPE.CHART)

// import { ItemWithSymbol } from './data/asxinterface'

// interface coordDesc {
//   xMarketCap: number,
//   yPriceChangeFiveDayPercent: number
// }

// type coords = coordDesc[]


// /**
//  * 
//  * @returns an array of 1) symbols and 2) graph coordinates
//  */
// function getChartData(): { symbols: string[], coordData: coords } {
//   // same property names must be defined as output in these two lines below
//   // equivalent to using an interface
//   let symbols: string[] = []
//   let coordData: coords = []

//   const targetSymbol = 'DDD'.toUpperCase()

//   // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

//   const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
//   const b = JSON.parse(str) as Array<ItemWithSymbol>

//   const targetSec = b.filter(x => x.symbol == targetSymbol)
//   const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

//   const secs = b.filter(x => x.industry == targetIndustry)

//   secs.forEach(sec => {
//     symbols.push(sec.symbol)

//     coordData.push({
//       xMarketCap: isUndefined(sec.marketCap),
//       yPriceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent)
//     })
//   })

//   return { symbols, coordData }
// }

// /**
//  * Handle missing field value coming in as 'undefined'
//  * @param num 
//  * @returns zero (0) where 'undefined', otherwise itself
//  */
// function isUndefined(num: number): number {
//   return (num === undefined) ? 0 : num
// }


// const { symbols, coordData } = getChartData()

// console.log(symbols)
// console.log(coordData)

// bare import specifier like 'd3' is still not supported in browsers
// An absolute or relative path is required
// import * as d3 from '../node_modules/@types/d3/index'

// import * as d3 from 'd3'
// // import * as d3 from "https://cdn.skypack.dev/d3@7"
// import { secChartData, ItemChartProps } from '../../data/asx'

// const app = document.getElementById("app")

// const canvas = document.createElement("canvas")

// canvas.id = "peerAnalysis"
// canvas.height = 400
// canvas.width = 400

// app?.appendChild(canvas)

// const config = {
//   type: 'bubble',
//   data: data,
//   options: {}
// }

// const myChart = new Chart(document.getElementById('myChart'), config)

// function getChartData(jsonFile: string): ItemChartProps[] {
//   let chartProps: ItemChartProps[] = []

//   const targetSymbol = 'DDD'.toUpperCase()

//   // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

//   // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
//   const secListRaw = JSON.parse(jsonFile) as secDesc

//   const targetSec = secListRaw.filter(x => x.symbol == targetSymbol)
//   const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

//   const secListFiltered = secListRaw.filter(x => x.industry == targetIndustry)

//   secListFiltered.forEach(sec => {
//     chartProps.push({
//       symbol: sec.symbol,
//       marketCap: isUndefined(sec.marketCap),
//       priceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent)
//     })
//   })

//   return chartProps
// }

// /**
//  * Handle missing field value coming in as 'undefined'
//  * @param num 
//  * @returns zero (0) where 'undefined', otherwise itself
//  */
// function isUndefined(num: number): number {
//   return (num === undefined) ? 0 : num
// }

// // const jsonFile = asx.readJSON()

// // if (jsonFile.length) {
// //   getChartData(jsonFile)
// // }


// // callback function does not work, so must use .then() and .catch()
// async function drawBubbleChart() {
//   d3.json('./dist/datasource/asx_chart.json')
//     .then((data) => {
//       const chartData = data as secChartData

//       const svg = d3.select("svg")
//                   .attr("width", 500)
//                   .attr("height", 500)

//       function getRadius (area: number): number {
//         return Math.sqrt(area/Math.PI)
//       } 

//       svg.selectAll("circle")
//         .data(chartData).enter()
//         .append("circle")
//         .attr("cx", function(p: ItemChartProps) {return p.marketCap})
//         .attr("cy", function(p: ItemChartProps) {return p.priceChangeFiveDayPercent})
//         .attr("r", function(p: ItemChartProps) {return getRadius(p.marketCap)})
//         .attr("fill", function(p: ItemChartProps) {return (p.isTargetSec)? "#FFCA33" : "#334CFF"})

//       svg.selectAll("text")
//         .data(chartData as secChartData).enter()
//         .append("text")
//         .attr("x", function(p: ItemChartProps) {return p.marketCap})
//         .attr("y", function(p: ItemChartProps) {return p.priceChangeFiveDayPercent})
//         .text(function(p: ItemChartProps) {return p.symbol})
//         .style("font-family", "arial")
//         .style("font-size", "12px")
//     })
//     .catch((err: Error) => {
//       console.error(err.message)
//     })

//   // d3.select('#bubble-chart').append("p").text("hello me")
// }

// drawBubbleChart()

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Peer Analysis by Tezzy</title>
//     <meta charset="utf-8">
//     <base href="/">
//     <!-- <script src="https://cdn.skypack.dev/d3@7"></script> -->
//   </head>
//   <body>
//       <!-- <div id="app"></div> -->
//     <!-- <script src="https://d3js.org/d3.v4.min.js"></script> -->
    

//     <!-- type="text/javascript" -->
    
//     <!-- run a local web server so that you won't get the following error
//     Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at file:///home/to/Desktop/new_proj/dist/index.js. -->
//     <!-- <script type="module">
//       import * as d3 from "https://cdn.skypack.dev/d3@7"
//       d3.select("body").append("p").text("hello me")
//     </script> -->
//     <!-- <div id="bubble-chart"> </div> -->
    
//     <script type = "module" src="./static/index.js"></script>
//     <!-- <svg width="500" height="500"></svg> -->
//     <svg class="bubble-chart"></svg>
//   </body>
// </html>