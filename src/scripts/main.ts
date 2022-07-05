
/* TODO
1. set Tabindex for all controls
2. autofocus appropriately
3. Get rid of <div> element?
4. DONE Insert default instructional text in dataliast before user input USE placeholder


*** LESSONS *** 
- What is the difference between display:none and visibility:hidden style?
  visibility: hidden hides the element, but it still takes up space in the layout.
  display: none removes the element completely from the document.



*/

const TICKER_LABEL = "Ticker/Company Name"
const INDUSTRY_LABEL = "Industry/Classification"
const TICKER_PLACEHOLDER = "e.g. \'SGP\' or \'STOCKLAND\'"
const INDUSTRY_PLACEHOLDER = "e.g. \'Energy\'"
const BODY_ID = "body_container"
const INPUT_PREFIX = "input"

function stripName(str: string) {
    return str.slice(0, str.indexOf('/'))
}

function createBody() {
    const body = document.createElement("body")
    body.id = BODY_ID
    document.body = body
}

function createRadio(category: string, byDefault: boolean) {
    const div = document.createElement('div')

    const categoryName = stripName(category)
    const listIdTag = 'radio' + categoryName

    const radio = document.createElement(INPUT_PREFIX)
    radio.setAttribute('type', 'radio')
    radio.setAttribute('name', 'radioName') // for grouping radios. Without this, both radios get selected
    // radio.setAttribute('value', 'radioValue') // value sent back to the server
    radio.setAttribute('id', listIdTag)

    const label = document.createElement('label')
    label.setAttribute('for', listIdTag)

    div.id = 'div-' + listIdTag
    div.appendChild(radio)
    div.appendChild(label)
    document.getElementById(BODY_ID).appendChild(div)
    /*   const formContainer = document.getElementById('selectors')
  
  formContainer.appendChild(radio)
  formContainer.appendChild(label)
   */
    label.innerHTML = category

    radio.checked = byDefault

    // use an anonymous function to pass in categoryName
    radio.addEventListener("click", function() {
        showDatalist(categoryName)
    }, false)

}

function showDatalist(category: string) {
  /* pass in 'Ticker' or 'Industry' as category */
  
    // const dlTicker = document.getElementById('dlTicker')
    // const dlIndustry = document.getElementById('dlIndustry')

    switch (category) {
    case 'Ticker':
        // console.log(document.getElementById('input-dlTicker').style.display)
        // console.log(document.getElementById('input-dlIndustry').style.display)
        /*         		document.getElementById("dlIndustry").style.setAttribute('display', 'block')
        		            document.getElementById("dlTicker").style.setAttribute('display', 'none') */
        /*          		dlIndustry.hidden = true
         		               dlTicker.hidden = false */
        /* dlIndustry.style.display = "none"
        dlTicker.style.display = "block" */
        document.getElementById(INPUT_PREFIX + 'Industry').style.display = "none"
        document.getElementById(INPUT_PREFIX + category).style.display = "block"
        
        // console.log(document.getElementById('input-dlTicker').style.display)
        // console.log(document.getElementById('input-dlIndustry').style.display)
        /* dlTicker.autofocus = true */
        document.getElementById(INPUT_PREFIX + category).autofocus = true
        document.getElementById(INPUT_PREFIX + category).setAttribute('placeholder', TICKER_PLACEHOLDER)
        break
    case 'Industry':
        // console.log(document.getElementById('input-dlTicker').style.display)
        // console.log(document.getElementById('input-dlIndustry').style.display)
        // dlTicker.hidden = true
        // dlIndustry.hidden = false
        // document.getElementById('input-dlTicker').style.display = "none"
        // document.getElementById('input-dlIndustry').style.display = "block"
        document.getElementById(INPUT_PREFIX + 'Ticker').style.display = "none"
        document.getElementById(INPUT_PREFIX + category).style.display = "block"
        // console.log(document.getElementById('input-dlTicker').style.display)
        // console.log(document.getElementById('input-dlIndustry').style.display)
        
        /* dlIndustry.autofocus = true */
        document.getElementById(INPUT_PREFIX + category).autofocus = true
        document.getElementById(INPUT_PREFIX + category).setAttribute('placeholder', INDUSTRY_PLACEHOLDER)
        break
    default:
        console.log('Duh!')
        alert('error')
    }

}

function createDatalist(optionList, category: string, byDefault: boolean) {
    // const formId = 'selectors' // match on the one on the html file
    const div = document.createElement('div')
    const strippedName = stripName(category)
    const listIdTag = 'dl' + strippedName

    div.id = 'div-' + listIdTag

    // must bind input and datalist with input's list and datalist's id
    const inputElem = document.createElement('input');
    inputElem.setAttribute('id', INPUT_PREFIX + strippedName)
    inputElem.setAttribute('list', listIdTag);
    // document.getElementById(div).appendChild(inputElem)
    // document.getElementById('div-' + listIdTag).appendChild(inputElem)
    div.appendChild(inputElem)

    const dlElem = document.createElement('datalist');
    dlElem.setAttribute('id', listIdTag);
    // document.getElementById(div).appendChild(dlElem)
    // document.getElementById('div-' + listIdTag).appendChild(dlElem)
    div.appendChild(dlElem)

    for (let i = 0; i < optionList.length; i++) {
        const opt = document.createElement('option')
        opt.setAttribute('value', optionList[i])
        // opt.setAttribute('label', optionList[i] + '123')
        //  document.getElementById(listIdTag).appendChild(opt)

        dlElem.appendChild(opt)
    }

    document.getElementById(BODY_ID).appendChild(div)

    /* inputElem.autofocus = byDefault */

    if (byDefault) {
      document.getElementById(INPUT_PREFIX + strippedName).autofocus = byDefault
      document.getElementById(INPUT_PREFIX + strippedName).setAttribute('placeholder', TICKER_PLACEHOLDER)
    }

    /*
    document.getElementById('input-' + listIdTag).autofocus = byDefault
    inputElem.style.display = 'block'
    */
    inputElem.style.display = byDefault ? 'block' : 'none'
    /*   inputElem.hidden = !(byDefault) */
    

}

/*   const formTag = 'selectors'
  const tag = 'stock-selector'
  
  const optionList = ["AMP", "BHP", "SM1", "ZZZ"]
  
    // must bind input and datalist with input's list and datalist's id
  const inputElem = document.createElement('input');
  inputElem.setAttribute('list', tag);
  document.getElementById(formTag).appendChild(inputElem);
  
  const dlElem = document.createElement('datalist');
  dlElem.setAttribute('id', tag);
  document.getElementById(formTag).appendChild(dlElem);
  
  for (let i = 0; i < optionList.length; i++) {
    const opt = document.createElement('option');
    opt.setAttribute('value', optionList[i]);
    document.getElementById(tag).appendChild(opt);
  }
   */

/*   var fruit1 = document.createElement("OPTION");
    fruit1.setAttribute("value", "mango");
    document.getElementById("fruits").appendChild(fruit1);
    var fruit2 = document.createElement("OPTION");
    fruit2.setAttribute("value", "papaya");
    document.getElementById("fruits").appendChild(fruit2); */

/*   const inputElem = document.createElement('input')
    const dlElem = document.createElement('datalist')
    
    const tag = 'stock-selector'
      inputElem.setAttribute('list', tag)
    
    document.getElementById("controls").appendChild(inputElem);
    
    dlElem.setAttribute('id', tag)
    document.getElementById("controls").appendChild(dlElem);
    
    output.placeholder = 'default'
    
    for (let i = 0; i < optionList.length; i++) {
      const option = document.createElement('option')
      option.value = optionList[i]
      option.setAttribute("text", optionList[i])
      option.setAttribute("value", i + optionList[i])
      document.getElementById(tag).appendChild(option);
      datalist.appendChild(option)
    }
     */
/* 

      const dlStockSelector = document.createElement('input')
      let i = 0
      let len = optionList.length
      dl = document.createElement('datalist')

  dlStockSelector.id = 'dlStocks'
      for (let i; i < len; i += 1) {
          const option = document.createElement('option')
          option.value = optionList[i]
          dlStockSelector.appendChild(option)
      }
      dlStockSelector.appendChild(dl) */
/* function fillSelect() { // create option using DOM
  const newOption = document.createElement('option')
  const optionText = document.createTextNode('Option Text')
  // set option text
  newOption.appendChild(optionText)
  // and option value
  newOption.setAttribute('value', 'Option Value')

  var x = document.getElementById("industry-selector")
  var option = document.createElement("option")
  option.value = "C1"
  console.log(option.value)
  option.text = "Consume Sta."
  x.add(option)
  ;

  option.value = "C2"
  console.log(option.value)
  option.text = "Consume Disc."
  x.add(option)

  option.value = "T1"
  console.log(option.value)
  option.text = "Technology"

  x.appendChild(option)
  x.add(option)
}
 */
createBody()

createRadio(TICKER_LABEL, true)
createRadio(INDUSTRY_LABEL, false)

// document.getElementById('selectors').appendChild(document.createElement('br'))

createDatalist(["AMP", "BHP", "SM1", "ZZZ"], TICKER_LABEL, true)
createDatalist(["Auto", "Cons Desc."], INDUSTRY_LABEL, false)