/* TODO
1. set Tabindex for all controls
2. autofocus appropriately
3. DONE Get rid of <div> element
4. DONE Insert default instructional text in dataliast before user input -> USE placeholder
5. DONE Get rido f <BODY></BODY> tags from html
6. Restrict user input only to the item of the datalist: 
7. Add a tooltip showing the full company name upon valid selection via CSS?
   SEE https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
8. Colour the datalist in red background upon non-listed item is entered in the datalist
9. No need to store json file in localStorage as the html gets rendereed on the server. Just read it synchronously via fs object and populate the datalists.
10. Do not show the Ticker dropdown until 3 characters have been entered
11. DONE Clear datalist in the process of switching radio
  <input list="cars" name="car" onfocus="this.value=''" onchange="this.blur();" placeholder = "Type car name">
12. INSERT CLICK-IN SIMULATION OF LIST/DATALIST SO THAT A DROPDOWN APPEARS AUTOMATICALLY WHEN A RADIO GETS SELECTED: the following does not work...
  inputElem.addEventListener(
    'focus',
    function () {
      inputElem.click();
    },
    false
  );
13. Write class-like functional programming style codes to standardise radio buttons 
  SEE https://dev.to/vangware/you-don-t-need-classes-jk4
  

*** LESSONS *** 
- What is the difference between display:none and visibility:hidden style?
  visibility: hidden hides the element, but it still takes up space in the layout.
  display: none removes the element completely from the document.


- So long as a HTMLElement's property is writable (e.g. type & name) it is used with a dot operator (.). The exception is where a property is read-only (e.g. list) set with .setAttribute. Also, this .setAttribute is used for any constant property name (e.g. ID_TAG)
*/

const ASX_CODE_LABEL = 'ASX Code';
const COMPANY_LABEL = 'Company Name';
const INDUSTRY_LABEL = 'Industry';

// const ASX_CODE_PLACEHOLDER = "e.g. 'SGP'";
// const COMPANY_PLACEHOLDER = "e.g. 'STOCKLAND'";
// const INDUSTRY_PLACEHOLDER = "e.g. 'Energy'";

const BODY_ID = 'body_container';
const ID_TAG = 'id';

// const PLACEHOLDER_TAG = 'placeholder';
const DATALIST_TAG = 'dl';
const INPUT_TAG = 'input';

const STYLE_DISPLAY_TRUE = 'block';
const STYLE_DISPLAY_FALSE = 'none';
const INVALID_DATALIST_ITEM = 'INVALID ITEM!';

const ASX_RAW_DATA_FILE = './data/asx.json';
const ASX_RAW_DATA_KEY = 'asxRawData';

// type symbolName = [symbol: string, name: string]

interface ItemChartProps {
  symbol: string;
  marketCap: number;
  priceChangeFiveDayPercent: number;
  isTargetSec: boolean;
}

type secChartData = ItemChartProps[];

interface ItemAllProps extends ItemChartProps {
  displayName: string;
  industry: string;
  dateListed: string;
  xid: string;
  isRecentListing: boolean;
}

type secDescData = ItemAllProps[];

const str2 =
  '[{"symbol":"14D","displayName":"1414 DEGREES LIMITED","industry":"Capital Goods","dateListed":"2018-09-12","marketCap":23075953,"xid":"486191506","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"1ST","displayName":"1ST GROUP LIMITED","industry":"Health Care Equipment & Services","dateListed":"2015-06-09","marketCap":7052863,"xid":"274180515","priceChangeFiveDayPercent":19.760479041916163,"isRecentListing":false},{"symbol":"29M","displayName":"29METALS LIMITED","industry":"Materials","dateListed":"2021-07-02","marketCap":1249183000,"xid":"663303162","priceChangeFiveDayPercent":-1.886792452830182,"isRecentListing":false},{"symbol":"T3D","displayName":"333D LIMITED","industry":"Commercial & Professional Services","dateListed":"2006-12-27","marketCap":8412557,"xid":"5947361","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"TCF","displayName":"360 CAPITAL ENHANCED INCOME FUND","industry":"Not Applic","dateListed":"2006-10-17","marketCap":23962277,"xid":"5457157","priceChangeFiveDayPercent":-1.0291595197255508,"isRecentListing":false},{"symbol":"TGP","displayName":"360 CAPITAL GROUP","industry":"Real Estate","dateListed":"2005-07-26","marketCap":192717845,"xid":"2524743","priceChangeFiveDayPercent":12.820512820512818,"isRecentListing":false},{"symbol":"TOT","displayName":"360 CAPITAL REIT","industry":"Diversified Financials","dateListed":"2015-04-22","marketCap":135056343,"xid":"86360650","priceChangeFiveDayPercent":10.404624277456655,"isRecentListing":false},{"symbol":"3MF","displayName":"3D METALFORGE LIMITED","industry":"Commercial & Professional Services","dateListed":"2021-03-02","marketCap":18441571,"xid":"636135750","priceChangeFiveDayPercent":7.777777777777785,"isRecentListing":false},{"symbol":"TDO","displayName":"3D OIL LIMITED","industry":"Energy","dateListed":"2007-05-22","marketCap":12729042,"xid":"7221947","priceChangeFiveDayPercent":3.84615384615385,"isRecentListing":false},{"symbol":"DDD","displayName":"3D RESOURCES LIMITED","industry":"Materials","dateListed":"2007-03-21","marketCap":11641116,"xid":"6393494","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"3PL","displayName":"3P LEARNING LIMITED..","industry":"Consumer Services","dateListed":"2014-07-09","marketCap":458963722,"xid":"76419072","priceChangeFiveDayPercent":2.14723926380369,"isRecentListing":false},{"symbol":"4DX","displayName":"4DMEDICAL LIMITED","industry":"Health Care Equipment & Services","dateListed":"2020-08-07","marketCap":272404949,"xid":"608309060","priceChangeFiveDayPercent":-10.576923076923075,"isRecentListing":false},{"symbol":"4DS","displayName":"4DS MEMORY LIMITED","industry":"Semiconductors & Semiconductor Equipment","dateListed":"2010-12-09","marketCap":124448436,"xid":"26906406","priceChangeFiveDayPercent":8.750000000000007,"isRecentListing":false},{"symbol":"5EA","displayName":"5E ADVANCED MATERIALS INC.","industry":"Materials","marketCap":0,"xid":"688676047","isRecentListing":false},{"symbol":"88E","displayName":"88 ENERGY LIMITED","industry":"Energy","dateListed":"2000-01-20","marketCap":725742734,"xid":"230975","priceChangeFiveDayPercent":20,"isRecentListing":false},{"symbol":"8CO","displayName":"8COMMON LIMITED","industry":"Software & Services","dateListed":"2014-08-27","marketCap":36557360,"xid":"77805543","priceChangeFiveDayPercent":6.451612903225812,"isRecentListing":false},{"symbol":"8IH","displayName":"8I HOLDINGS LTD","industry":"Diversified Financials","dateListed":"2014-12-17","marketCap":64504078,"xid":"80536669","priceChangeFiveDayPercent":5.8823529411764595,"isRecentListing":false},{"symbol":"8VI","displayName":"8VI HOLDINGS LIMITED","industry":"Consumer Services","dateListed":"2015-12-16","marketCap":118667982,"xid":"320037656","priceChangeFiveDayPercent":-8.163265306122442,"isRecentListing":false},{"symbol":"9SP","displayName":"9 SPOKES INTERNATIONAL LIMITED","industry":"Software & Services","dateListed":"2016-06-09","marketCap":11946698,"xid":"350856611","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"92E","displayName":"92 ENERGY LIMITED","industry":"Energy","dateListed":"2021-04-15","marketCap":40116694,"xid":"648306270","priceChangeFiveDayPercent":9.278350515463925,"isRecentListing":false},{"symbol":"99L","displayName":"99 LOYALTY LIMITED.","industry":"Software & Services","dateListed":"2013-10-08","marketCap":27832386,"xid":"592135903","priceChangeFiveDayPercent":-16.66666666666666,"isRecentListing":false},{"symbol":"ACB","displayName":"A-CAP ENERGY LIMITED","industry":"Energy","dateListed":"2006-05-19","marketCap":183856973,"xid":"4721927","priceChangeFiveDayPercent":-3.3333333333333366,"isRecentListing":false},{"symbol":"AYI","displayName":"A1 INVESTMENTS & RESOURCES LTD","industry":"Diversified Financials","dateListed":"2007-10-02","marketCap":16421946,"xid":"633104981","priceChangeFiveDayPercent":0,"isRecentListing":false},{"symbol":"A2B","displayName":"A2B AUSTRALIA LIMITED","industry":"Transportation","dateListed":"1999-12-14","marketCap":143312513,"xid":"69318","priceChangeFiveDayPercent":-2.5423728813559157,"isRecentListing":false},{"symbol":"ABP","displayName":"ABACUS PROPERTY GROUP","industry":"Real Estate","dateListed":"2002-11-14","marketCap":2878103957,"xid":"37039","priceChangeFiveDayPercent":2.359882005899707,"isRecentListing":false}]';

const data: secDescData = JSON.parse(str2);
const asxCodes: string[] = getAsxCodes();
const companyNames: string[] = getCompanyNames();
const industries: string[] = getIndustries();

let tabIndexCounter = 1;

function stripName(str: string) {
  return str.slice(0, str.indexOf(' '));
}

function createBody() {
  const body = document.createElement('body');
  body.id = BODY_ID;
  document.body = body;
}

function createRadio(category: string, byDefault: boolean) {
  const RADIO_TAG = 'radio';

  const categoryName = stripName(category);
  const listIdTag = RADIO_TAG + categoryName;

  const radio = document.createElement(INPUT_TAG);
  radio.type = RADIO_TAG;
  radio.name = RADIO_TAG + 'Category'; // for grouping radios. Without this, both radios get selected
  // radio.setAttribute('value', 'radioValue') // value sent back to the server
  radio.setAttribute(ID_TAG, listIdTag);

  const label = document.createElement('label');
  label.htmlFor = listIdTag;

  const body = document.getElementById(BODY_ID);
  if (body) {
    body.appendChild(radio);
    body.appendChild(label);
  }

  // use an anonymous function to pass in categoryName
  radio.addEventListener(
    'change',
    function () {
      setDatalist(categoryName);
    },
    false
  );

  label.innerHTML = category;

  radio.checked = byDefault;
  radio.tabIndex = tabIndexCounter;
}

function setDatalist(category: string) {
  /* pass in 'Ticker' or 'Industry' as category */

  const asxLabel = stripName(ASX_CODE_LABEL);
  const tickerLabel = stripName(COMPANY_LABEL);
  const industryLabel = stripName(INDUSTRY_LABEL);

  const target = document.getElementById('dl') as HTMLDataListElement; // INPUT_TAG + 'dl')

  let items: string[]

  switch (category) {
    case asxLabel:
      items = asxCodes;
      break;
    case tickerLabel:
      items = companyNames;
      break;
    case industryLabel:
      items = industries;
      break;
    default:
      items = []
      console.log('not valid category');
  }

  // clear out the existing items before populating
  // 1. This somehow pushes the datalist down and up depending on the raio choice
  // while (target.hasChildNodes()) {
  //   target.removeChild(target.firstChild);
  // }
  //
  // 2. This does not work
  // for (const opt of target.children) {
  //     target.removeChild(opt)
  // }
  //
  // 3. This does not work either
  // for (let i = 0; i < target.options.length; i++) {
  //   target.options[0].remove()
  // }
  target.innerHTML = '';

  if (items.length > 0) {
    for (const item of items) {
      const opt = document.createElement('option');

      opt.value = item;
      target.appendChild(opt);
    }
  }

  // clear text in the datalist when a radio button is selected
  const inputDl = document.getElementById(INPUT_TAG + 'dl') as HTMLInputElement;

  // TODO: INSERT CLICK-IN SIMULATION OF LIST/DATALIST SO THAT A DROPDOWN APPEARS AUTOMATICALLY WHEN A RADIO GETS SELECTED
  inputDl.value = '';
  inputDl.focus();
  // (document.getElementById('dl') as HTMLDataListElement).click();

  // // hide the other moved-away datalist
  // document.getElementById(
  //   INPUT_TAG + (category == tickerLabel ? industryLabel : tickerLabel)
  // )!.style.display = STYLE_DISPLAY_FALSE;
}

function setOptionName(name: string, symbol: string): string {
  return name + ' (' + symbol + ')';
}

function createDatalist() {
  const listIdTag = 'dl'; // DATALIST_TAG + strippedName;

  // must bind input and datalist with input's list and datalist's id
  const inputElem = document.createElement(INPUT_TAG);
  inputElem.setAttribute(ID_TAG, INPUT_TAG + 'dl');
  inputElem.setAttribute('list', listIdTag); // 'list' is a read-only property, so use .setAttribute

  // this does nothing
  // inputElem.setAttribute('type', 'text');

  const dlElem = document.createElement('datalist');
  dlElem.setAttribute(ID_TAG, listIdTag);

  // initially populate with tickers
  for (const ticker of asxCodes) {
    const opt = document.createElement('option');

    opt.value = ticker

    /*     opt.value = optionList[i]; // value extracted by selectedIndex
    // opt.setAttribute('label', optionList[i] + '123') // value shown in the datalist
     */
    dlElem.appendChild(opt);
  }

  document.getElementById(BODY_ID)?.appendChild(dlElem);
  document.getElementById(BODY_ID)?.appendChild(inputElem);

  // inputElem.autofocus = byDefault;
  // inputElem.setAttribute(PLACEHOLDER_TAG, COMPANY_PLACEHOLDER);

  // not dlElem but inputElem to attach .addEventListener
  inputElem.addEventListener(
    'change',
    function () {
      getSelectedItem();
    },
    false
  );
}

function getSelectedItem() {
  const datalist = document.getElementById(
    INPUT_TAG + 'dl' // stripName(category)
  ) as HTMLInputElement;

  // const itemNum = datalist.options

  console.log(datalist.value)

  // THIS DOES NOT WORK
  // datalist.setAttribute(PLACEHOLDER_TAG, INVALID_DATALIST_ITEM);

  // selectElement = document.querySelector('# select1');
  // output = selectElement.options[selectElement.selectedIndex].value;
}

function getAsxCodes(): string[] {
  // already sorted in an alphabetical order
  return data.map((x) => x.symbol); // setOptionName(x.displayName, x.symbol))
}

function getCompanyNames(): string[] {
  // already sorted in an alphabetical order
  return data.map((x) => x.displayName);
}

function getIndustries(): string[] {
  const NOT_APPLIC_EXCEPTION = 'Not Applic';
  const industryData = data.map((x) => x.industry);
  const industryList = Array.from(new Set(industryData));
  
  industryList.sort();

  return industryList.filter((value) => {
    return value != NOT_APPLIC_EXCEPTION;
  });
}

createBody();

createRadio(ASX_CODE_LABEL, true);
tabIndexCounter += 1;

document.getElementById(BODY_ID)?.appendChild(document.createElement('br'));

createRadio(COMPANY_LABEL, false);
tabIndexCounter += 1;

document.getElementById(BODY_ID)?.appendChild(document.createElement('br'));

createRadio(INDUSTRY_LABEL, false);
tabIndexCounter += 1;
document.getElementById(BODY_ID)?.appendChild(document.createElement('br'));
createDatalist();

/* createViewPort() */
