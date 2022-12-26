function meta(contract){ 
    
    $.ajax({
            
    "url" : "https://api.tzkt.io/v1/contracts/" + contract + "/storage?path=storage.token_address",
    "type" : "GET",
    "success" : function(data) {

    var tokenAddress = data.toString();

    $.ajax({
            
        "url" : "https://api.tzkt.io/v1/contracts/"+tokenAddress,
        "type" : "GET",
        "success" : function(data) {
    
        var tokenAlias = data.alias;
        
        document.getElementById("tokenAlias").innerHTML = tokenAlias;
    
        }})

    }});}