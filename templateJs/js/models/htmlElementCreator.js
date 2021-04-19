//create an html element by code
function HtmlElement(params) {
    this.options =[]
    this.htmlElement = null

    //initialize the object first
    {
        if(typeof params.tagName != "undefined"){
            this.options.tagName = params.tagName;
        }
        if(typeof params.className != "undefined"){
            this.options.className = params.className;
        }else{
            this.options.className = "";
        }
        if(typeof params.AttributeName != "undefined"){
            this.options.AttributeName = params.AttributeName
        } 
        else{
            this.options.AttributeName = "";
        }
       
    }
   
   //create the html element
    this.createHtml = function(attribute = null) {
      var element = document.createElement(this.options.tagName);
      element.className = this.options.className;
      if(attribute != null){
        element.setAttribute(this.options.AttributeName,attribute);
      }
      this.htmlElement = element
      return this
    }
    
    //add text in the html element
    this.addInnerText = function(text) {
        this.htmlElement.innerHTML = text;
        return this
    }
    
    //add the element to an existing html element
    this.appendToParent = function(Parentelement) {
        Parentelement.appendChild(this.htmlElement)
        return this
    }
}
// var element = new HtmlElement({tagName:"p",className:"test", AttributeName:"data-test"})
// .createHtml("data-after").addInnerText("mendy")
// .appendToParent(document.getElementById("container-products"));
