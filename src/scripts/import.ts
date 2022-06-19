// using ES Modules enforces to specify the file extension in the import statement
// source: https://nodejs.org/api/esm.html#esm_mandatory_file_extensions
import DataFactory, { DATA_SOURCE_TYPE } from './factory.js'

const factory = new DataFactory()
const asx = factory.setDataSource(DATA_SOURCE_TYPE.ASX)

asx.getData()