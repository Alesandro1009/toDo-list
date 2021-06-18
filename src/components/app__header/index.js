import AppHeader from './app__header';

export default AppHeader;



    function color(str, color)
    {
       var xpath = `//a[text()='${str}']`;
       var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        console.log(matchingElement)
  }


    

    color("England");


