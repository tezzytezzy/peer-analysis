import { config } from 'dotenv'
import request from 'superagent'

// the names of 'keys' in the JSON data must EXACTLY match with variable names used (even though 'symbol' is a reserved keyword!)
export interface ItemChartProps {
  symbol: string
  marketCap: number,
  priceChangeFiveDayPercent: number,
  isTargetSec: boolean
}

export type secChartData = ItemChartProps[]

interface ItemAllProps extends ItemChartProps {
  displayName: number,
  industry: string,
  dateListed: string,
  xid: string,
  isRecentListing: boolean
}

export type secDescData = ItemAllProps[]

interface FilterOptions {
    input: string,
    options: string[]
}

interface AsxJsonFormat {
  data: {
    items: secDescData,
    count: number,
    filterOptions: FilterOptions[]
  }
}

// export type jsonFormat = {
//   secList: secDescData | secChartData
// }

config()

// function getSecurity(): ItemWithSymbol[] | null {
//   // const securityData = new Map<string, ItemDesc>()
//   let securityData: ItemWithSymbol[] | null = null

//   const countData = getJSONData(1) // just to get a total count of securities

//   if (countData != null) {
//     const allSecurityCount = countData.data.count

//     const allData = getJSONData(allSecurityCount)

//     if (allData != null) {
//       securityData = allData.data.items
//       // allData.data.items.forEach((item) => {
//         // How can I NOT write up all the field names AGAIN here?
//         // securityData.set(item.symbol, {
//         //                   : item.displayName, 
//         //             + item.industry, 
//         //             + item.dateListed, 
//         //             + item.marketCap,
//         //             + item.xid,
//         //             + item.priceChangeFiveDayPercent,
//         //             + item.isRecentListing)
//         // })
//     }
//   }

/* WORKS
superagent
  .get(url)
  .then(function(data) {
    console.log('ocunter of 2065')
    console.log(JSON.stringify(data))
  })
  .catch(function (error) {
    // handle error
    console.log('error')
    console.log(error);
  })

request
  .get(url)
  .accept('application/json')
  .then(function(data) {
    console.log('ocunter of 2065')
    console.log(JSON.parse(data.text))
  })
  .catch(function (error) {
    // handle error
    console.log('error')
    console.log(error);
  })

let url = 'https://asx.api.markitdigital.com/asx-research/1.0/companies/directory?page=0&itemsPerPage='
    + '1'
    + '&order=ascending&orderBy=companyName&includeFilterOptions=true&recentListingsOnly=false'

console.log(url)

// let fullData: AsxJsonFormat | null = null
config()

url = process.env.ASX_API_PREFIX
            + '1'
            +process.env.ASX_API_SUFFIX

console.log(url)

https.get(url, res => {
  let data = ''

  res.on('data', chunk => {
    data += chunk
  })

  res.on('end', () => {
    console.log((JSON.parse(data) as AsxJsonFormat).data.count) // console.log(JSON.parse(data))
  })
}).on('error', err => {
  console.error(err.message);
}).end
*/

function importData(secCount: number): Promise<request.Response>{
  const url = () => (process.env.ASX_API_PREFIX as string)
                    + secCount
                    + (process.env.ASX_API_SUFFIX as string)

  return new Promise(resolve => {
    request
      .get(url()) // get total security count
      .accept('application/json')
      .then(data => { resolve(data) })
  })
}

/**
 * Make an API call to the ASX server to get listed securities
 * @returns null when 1) returned data contains a 'null', or 2) something bad happens in retrieving data
 */
 export async function getAsxRawData() {
  try {
    const oneSecData = await importData(1)
    const secCount = (JSON.parse(oneSecData.text) as AsxJsonFormat).data.count
    const allSecData = await importData(secCount)
    
    return Promise.resolve<secDescData>((JSON.parse(allSecData.text) as AsxJsonFormat).data.items)
    // return (JSON.parse(allSecData.text) as AsxJsonFormat).data.items
  } catch (error) {
    return Promise.reject<Error>(new Error('Data retrieval failed from ASX'))
    // return new Error('Data retrieval failed from ASX')
  }
}

// export function getAsxRawData() {
//   let secCount = 1

//   const url = () => (process.env.ASX_API_PREFIX as string)
//                     + secCount
//                     + (process.env.ASX_API_SUFFIX as string)

//   return new Promise<secDescData | null>((resolve, reject) => { request
//       .get(url()) // get total security count
//       .accept('application/json')
//       .then(function (resCount) {
//         secCount = (JSON.parse(resCount.text) as AsxJsonFormat).data.count

//         // make the same call but to get all the securities' data
//         return request
//           .get(url())
//           .accept('application/json')
//       })
//       .then(function (resAllSec) {
//         console.log(JSON.parse(resAllSec.text))
//         resolve((JSON.parse(resAllSec.text) as AsxJsonFormat).data.items)
//       })
//       .catch(function (err) {
//         console.error(err)
//         reject(null) //not reject() because only .then() is used in downstream
//       })
//     })
// }

/**
 * 
 * 
 * @returns an array of security data per industry
 */
export function getAsxChartData2(rawData: string): secChartData {
  let chartData: secChartData = []

  const allSecData = JSON.parse(rawData) as secDescData

  allSecData

  const targetSec = allSecData.filter(x => x.symbol == targetSymbol)
  const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

  const secs = allSecData.filter(x => x.industry == targetIndustry)

  secs.forEach(sec => {
    chartData.push({
      symbol: sec.symbol,
      marketCap: isUndefined(sec.marketCap),
      priceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent),
      isTargetSec: (sec.symbol == targetSymbol) ? true : false
    })
  })

  return chartData
}



/**
 * 
 * @returns an array of 1) symbols and 2) graph coordinates
 */
export function getAsxChartData(rawData: string): secChartData {
  // same property names must be defined as output in these two lines below
  // equivalent to using an interface
  // let symbols: string[] = []
  // let coordData: coords = []

  let chartData: secChartData = []

  const targetSymbol = 'DDD'.toUpperCase()

  // const str = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false}]'

  // rawData = '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]'
  
  
  // const allSecData = JSON.parse(str) as Array<ItemAllProps>
  const allSecData = JSON.parse(rawData) as secDescData

  const targetSec = allSecData.filter(x => x.symbol == targetSymbol)
  const targetIndustry = targetSec[0].industry // only 1 record returned by targetSymbol, thus [0]

  const secs = allSecData.filter(x => x.industry == targetIndustry)

  secs.forEach(sec => {
    chartData.push({
      symbol: sec.symbol,
      marketCap: isUndefined(sec.marketCap),
      priceChangeFiveDayPercent: isUndefined(sec.priceChangeFiveDayPercent),
      isTargetSec: (sec.symbol == targetSymbol) ? true : false
    })
  })

  return chartData
}

/**
 * Handle missing field value coming in as 'undefined'
 * @param num 
 * @returns zero (0) where 'undefined', otherwise itself
 */
function isUndefined(num: number): number {
  return (num === undefined) ? 0 : num
}