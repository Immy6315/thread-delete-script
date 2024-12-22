// Function to click an element using XPath
function clickElementByXPath(xpath, callback) {
    const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (element) {
      element.click(); // Perform the click action on the element
      console.log('Clicked:', element);
      if (callback) {
        setTimeout(callback, 500); // Wait for 500 ms before executing the callback function
      }
    } else {
      console.log('Element not found.');
    }
  }
  
  // XPath of the first element to be clicked
  const firstElementXPath = '//*[@id="barcelona-page-layout"]/div/div/div[2]/div[1]/div[6]/div/div[1]/div[1]/div/div/div/div/div[2]/div/div[2]/div/div/div';
  
  // XPath of the second element to be clicked
  const secondElementXPath = '//*[@id="mount_0_0_xQ"]/div/div/div[2]/div[2]/div/div/div/div[2]/div/div/div[1]/div[1]/div/div/div/div/div/div[2]/div/div';
  
  // XPath of the third element to be clicked
  const thirdElementXPath = '//*[@id="mount_0_0_xQ"]/div/div/div[3]/div/div/div[1]/div/div[2]/div/div/div/div[2]/div/div/div/div[3]/div[1]';
  
  // Execute the function with the first XPath and pass a function to click the second element as a callback
  let intervalId = setInterval(() => {
  clickElementByXPath(firstElementXPath, () => clickElementByXPath(secondElementXPath, () => clickElementByXPath(thirdElementXPath)));
  }, 2000);