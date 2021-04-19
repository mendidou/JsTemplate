// construtor fetch data from url object
function ProductApi(url){
    this.url = url;

   //fetching data with callback
    this.fetchDataFromUrl = function(callback){
        fetch(url)
        .then(function(response) {
          return response.json();
        })
        //getting the response in json and return in the call back
        .then(function(jsonResponse) {
            callback(jsonResponse) 
        })
    };
    
}



