import fs from 'fs'
// import getAsxData, {secDescData, jsonFormat } from './asx'
import { getAsxChartData, getAsxRawData, secDescData, secChartData } from './asx.js'

export enum DATA_SOURCE_TYPE {
  ASX = 'asx',
  YAHOO = 'yahoo'
}

export enum JSON_DATA_TYPE {
  RAW = 'raw',
  CHART = 'chart'
}

// NEEDED?
// import { config } from 'dotenv'
// config()

/**
 * Base class for all the data sources
 */
abstract class BaseDataSource {
  // no need for the line below as 'private' is added to its constructor input
  // 'private jsonFileName: string'


  // cwd() prints the current working directory of the Node process i.e. project root directory
  private readonly jsonFileDir = process.cwd() + process.env.JSON_FILE_DIR + '/'
  private readonly jsonReplacer = null
  private readonly jsonSpace = 2 // add 2 whitespaces for indentation in every line


  // ts(2564) error: "Property 'jsonFile' has no initializer and is not definitely assigned in the constructor."
  // with the strictPropertyInitialization setting on, class field need to be initialized in the contructor.
  // to get around it, add a definite assignment assertion operatior ('!')
  // protected jsonRawData!: string // a JSON string 
  // protected jsonChartData!: string // a JSON string


  constructor(protected dataSource: string) {
    this.dataSource = dataSource
  }

  // constructor(private jsonFileName: string) {
  //   this.jsonFileName = '/' + jsonFileName + '.json'
  // }

  // abstract importData(): void
  abstract getData(): void
  // abstract getChartData(): ItemChartProps[] | null

  protected writeJSON(jsonString: string, type: JSON_DATA_TYPE): void {
    try {
      if (!fs.existsSync(this.jsonFileDir)) { fs.mkdirSync(this.jsonFileDir) }

      if (jsonString.length) {
        // overwrite the existing file by default
        const fileName = this.jsonFileDir + this.getFileName(type)

        fs.writeFile(fileName, jsonString, err => {
          if (err) {
            throw new Error(`Error in saving ${fileName}`)
          }
        })
      } else {
        throw new Error(`Empty data from ${this.dataSource}`)
      }
    } catch (err) {
      console.error(err)
    }
  }

  public readJSON(type: JSON_DATA_TYPE): string {
    try {
      // specifying encoding as 'utf-8' makes this function return 'string' otherwise 'Buffer' that is NOT accepted by parse()
      const file = fs.readFileSync(this.jsonFileDir + this.getFileName(type), 'utf8')
      return file
    } catch (err) {
      console.error(err)
      return ''
    }
  }

  private getFileName(type: JSON_DATA_TYPE): string {
    return this.dataSource + `_${type}.json`
  }

  /**
   * 
   * @param secArray an array of key-value pairs
   */
  protected convertArrayToJSON(secArray: secDescData | secChartData): string {
    // let obj = {}
    // secArray.forEach(sec => obj[sec.item] = sec.value)
    // return obj

    // use object literal
    // let obj: jsonFormat

    return JSON.stringify(secArray, this.jsonReplacer, this.jsonSpace)

    // return JSON.stringify(() => { obj.secList = secArray },
    //   this.jsonReplacer,
    //   this.jsonSpace)

    // return JSON.stringify({ seclist: secArray }, this.jsonReplacer, this.jsonSpace)
  }
}



/**
 * Abstract class to manufacture a concrete data class under the Factory method pattern
 */
export default class DataFactory {
  // public static getData(type: DATA_SOURCE_TYPE.ASX): DataASX;
  // public static getData(type: DATA_SOURCE_TYPE.YAHOO): DataYahoo;
  // public static getData(type: DATA_SOURCE_TYPE): DataASX | DataYahoo {

  // '| Error' needs NOT be added as return type
  public setDataSource(type: DATA_SOURCE_TYPE): BaseDataSource {
    switch (type) {
      case DATA_SOURCE_TYPE.ASX:
        return new DataAsx(DATA_SOURCE_TYPE.ASX as string)
      case DATA_SOURCE_TYPE.YAHOO:
      // return new DataYahoo(DATA_SOURCE_TYPE.YAHOO as string)
      default:
        throw new Error('Unknown data source')
    }
  }
}

class DataAsx extends BaseDataSource {
  // the base class' protected member is NOT visible here.
  // only WITHIN a function of a derived class like getData() as below. 

  public getData(): void {
    getAsxRawData()
      .then(resRawData => {
        if(resRawData instanceof Error) {
          throw new Error(resRawData.message)
        } else {
          const rawData = this.convertArrayToJSON(resRawData)

          this.writeJSON(rawData, JSON_DATA_TYPE.RAW)

          return getAsxChartData(rawData)
        }
      })
      .then(resChartData => {
        this.writeJSON(this.convertArrayToJSON(resChartData), JSON_DATA_TYPE.CHART)
      })
      .catch(err => {
        console.error(err)
      })

    // async function test() {
    //   const res = await getAsxRawData()

    //   if (res instanceof Error)  {
    //     console.error(res.message)
    //   } else {

    //     writeJSON(this.convertArrayToJSON(res))
    //   }
    // }

    // getAsxRawData()
    //   .then(secArray => {
    //     if (secArray instanceof Error)  {
    //       console.error(secArray.message)
    //     } else {
    //       this.writeJSON(this.convertArrayToJSON(secArray), JSON_DATA_TYPE.RAW)
    //     }
    //   })

    // getAsxRawData()
    //   .then(secArray => {
    //     this.jsonRawData = (secArray == null) ? '' : this.convertArrayToJSON(secArray)
    //   })
    //   .catch(() => { this.jsonRawData = '' })
    // const secArray = getAsxData()
    // this.jsonRawData = (secArray == null) ? '' : this.convertArrayToJSON(secArray)

  }
}

// class DataYahoo extends BaseDataSource {
//   public importData(): void {

//   }

//   public getChartData(): ItemChartProps[] | null {
//     return []
//   }
// }