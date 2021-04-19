const url = "exercice.json"

//get the json 
const productFromJson = new ProductApi(url)
.fetchDataFromUrl(function (jsonResponse) {
    
    var products = jsonResponse.products;
    //map the json to array of Products
    products = products.map(getProduct);

    //loop over array of Products and create each box 
   products.forEach(product => {
       
       var divBox = createDivBox(product.sizes);
       createH2element(product.title,divBox);
       createBuyLink(divBox);
       createCircle(divBox);
       createImg(divBox,product.image);
       addToContainer(divBox); 
       
   });
   //finally after finished load the data in the async 
   //function we are loading the JSscript for the effect
   generateVanillaScript()

})

///////////////////////////////////////////////

//create the div box html element
  function createDivBox(sizes) {
     var divBox = new HtmlElement({tagName:"div",className:"box",AttributeName:"data-after"})
    .createHtml(sizes);
    return divBox.htmlElement;
  }

  // create the h2 html element
  function createH2element(title,divElement) {
    new HtmlElement({tagName:"h2",className:"name"})
    .createHtml().addInnerText(title).appendToParent(divElement)
  }
 // create the Buy link html element
  function createBuyLink(divElement) {
    var buyLink = document.createElement('a');
    buyLink.innerHTML = "Buy now";
    buyLink.setAttribute('class', 'buy');
    buyLink.setAttribute('href', '#');
    divElement.appendChild(buyLink);
  }

   // create the Circle html element
  function createCircle(divElement) {
    new HtmlElement({tagName:"div",className:"circle"})
    .createHtml()
    .appendToParent(divElement);
}
 // create image html element
function createImg(divElement,image) {
    var productImage = new Image();
    productImage.src = image;
    productImage.className="product";
    divElement.appendChild(productImage);
}

// append the divBox the the html container
function addToContainer(divElement) {
    var containerProducts = document.getElementById("container-products")
    containerProducts.appendChild(divElement);  
}

// add the script vanilla after the asynchronus function otherwise the effect dont work
function generateVanillaScript() {
    var scriptsrc  = document.createElement("script");
    scriptsrc.src = "js/vanilla-tilt.min.js"
    var bodyElement = document.body
    bodyElement.appendChild(scriptsrc);
    
}

  //fuction used to map the jsonResponse
function getProduct(jsonProduct) {
    var product = new Product(jsonProduct.title,jsonProduct.options[1].values,jsonProduct.images[0].src)
     return product;
   }
  

   