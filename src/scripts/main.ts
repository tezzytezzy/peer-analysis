
/* TODO
1. set Tabindex for all controls
2. autofocus appropriately
3. DONE Get rid of <div> element
4. DONE Insert default instructional text in dataliast before user input -> USE placeholder
5. DONE Get rido f <BODY></BODY> tags from html


*** LESSONS *** 
- What is the difference between display:none and visibility:hidden style?
  visibility: hidden hides the element, but it still takes up space in the layout.
  display: none removes the element completely from the document.
*/


const TICKER_LABEL = "Ticker/Company Name"
const INDUSTRY_LABEL = "Industry/Classification"
const PLACEHOLDER_TAG = "placeholder"
const TICKER_PLACEHOLDER = "e.g. \'SGP\' or \'STOCKLAND\'"
const INDUSTRY_PLACEHOLDER = "e.g. \'Energy\'"
const BODY_ID = "body_container"
const ID_TAG = "id"
const INPUT_TAG = "input"
const STYLE_DISPLAY_TRUE = "block"
const STYLE_DISPLAY_FALSE = "none"

function stripName(str: string): string {
  return str.slice(0, str.indexOf('/'))
}

function createBody() {
  const body = document.createElement("body")
  body.id = BODY_ID
  document.body = body
}

function createRadio(category: string, byDefault: boolean) {
  const RADIO_TAG = "radio"
  const categoryName = stripName(category)
  const listIdTag = RADIO_TAG + categoryName

  const radio = document.createElement(INPUT_TAG)
  radio.setAttribute("type", RADIO_TAG)

  // for grouping radios. Without this, both radios get selected
  radio.setAttribute("name", RADIO_TAG + "Category")
  // radio.setAttribute('value', 'radioValue') // where value is to be sent back to the server
  radio.setAttribute(ID_TAG, listIdTag)

  const label = document.createElement('label')
  label.setAttribute("for", listIdTag)

  // 3 ways to write DOM in TypeScript:
  // 1. Use type assertion to tell compiler explicitly what all the posible types can be
  // const body = document.getElementById(BODY_ID) as HTMLElement | null
  // if (body!= null) {
  //   body.appendChild(div)
  // }
  //
  // 2. Use non-null assertion operator (!)
  //   It tells the compiler to temporarily relax the "not null" constraint that it might 
  //   otherwise demand. It says to the compiler: "As the developer, I know better than you
  //   that this variable cannot be null right now".
  // document.getElementById(BODY_ID)!.appendChild(div)
  //
  // 3. Use the new optional chaining operator (?)
  //   This short-circuits (skips) where it is null or undefined
  const body = document.getElementById(BODY_ID)
  body?.appendChild(radio)
  body?.appendChild(label)
  //   BUT, this (?) cannot be used when assigning property (e.g. body?.style.display = "block")
  //   "ts(2779): The left-hand side of an assignment expression may not be an optional property access."
  //   In this case, 1) if-statement to check null/undefined or 2) the non-null (!) can be used (see below)

  label.innerHTML = category
  radio.checked = byDefault

  // use an anonymous function to pass in categoryName
  radio.addEventListener("click", function () {
    showDatalist(categoryName)
  }, false)
}

function showDatalist(category: string) {
  /* pass in 'Ticker' or 'Industry' as category */

  const tickerLabel = stripName(TICKER_LABEL)
  const industryLabel = stripName(INDUSTRY_LABEL)

  switch (category) {
    case tickerLabel:
      document.getElementById(INPUT_TAG + industryLabel)!.style.display = STYLE_DISPLAY_FALSE
      document.getElementById(INPUT_TAG + category)!.style.display = STYLE_DISPLAY_TRUE
      /* dlTicker.autofocus = true */
      document.getElementById(INPUT_TAG + category)!.autofocus = true
      document.getElementById(INPUT_TAG + category)!.setAttribute(PLACEHOLDER_TAG, TICKER_PLACEHOLDER)
      break
    case industryLabel:
      document.getElementById(INPUT_TAG + tickerLabel)!.style.display = STYLE_DISPLAY_FALSE
      document.getElementById(INPUT_TAG + category)!.style.display = STYLE_DISPLAY_TRUE

      /* dlIndustry.autofocus = true */
      document.getElementById(INPUT_TAG + category)!.autofocus = true
      document.getElementById(INPUT_TAG + category)!.setAttribute(PLACEHOLDER_TAG, INDUSTRY_PLACEHOLDER)
      break
    default:
      console.log('Duh!')
      alert('error')
  }

}

function createDatalist(optionList: string[], category: string, byDefault: boolean) {
  const strippedName = stripName(category)
  const listIdTag = "dl" + strippedName

  // must bind input and datalist with input's list and datalist's id
  const inputElem = document.createElement(INPUT_TAG);
  inputElem.setAttribute(ID_TAG, INPUT_TAG + strippedName)
  inputElem.setAttribute("list", listIdTag);

  const dlElem = document.createElement('datalist');
  dlElem.setAttribute(ID_TAG, listIdTag);

  for (let i = 0; i < optionList.length; i++) {
    const opt = document.createElement('option')
    opt.setAttribute('value', optionList[i]) // this value gets extracted by code
    // opt.setAttribute('label', optionList[i] + '123') // this value gets "shown" in datalist

    dlElem.appendChild(opt)
  }

  document.getElementById(BODY_ID)?.appendChild(dlElem)
  document.getElementById(BODY_ID)?.appendChild(inputElem)

  /* inputElem.autofocus = byDefault */

  if (byDefault) {
    const input = document.getElementById(INPUT_TAG + strippedName)
    
    if (input) {
      input.autofocus = byDefault
      input.setAttribute(PLACEHOLDER_TAG, TICKER_PLACEHOLDER)
    }
  }

  inputElem.style.display = byDefault ? STYLE_DISPLAY_TRUE: STYLE_DISPLAY_FALSE
}

createBody()

createRadio(TICKER_LABEL, true)
document.getElementById(BODY_ID)?.appendChild(document.createElement('br'))
createRadio(INDUSTRY_LABEL, false)

createDatalist(["AMP", "BHP", "SM1", "ZZZ"], TICKER_LABEL, true)
createDatalist(["Auto", "Cons Desc."], INDUSTRY_LABEL, false)