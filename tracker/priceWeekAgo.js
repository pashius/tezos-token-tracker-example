function priceWeekAgo(contract, level, tezPriceExchange, tokenPrice){

    var level7d = (level - 20160);

    $.ajax({
            
    "url" : "https://api.tzkt.io/v1/quotes?level="+level7d+"&select=usd",
    "type" : "GET",
    "success" : function(data) {

        var tezPriceExchange7d = Math.round((data) * 1000)/1000;

        var tezPrice7dChange_e = Math.round(((tezPriceExchange - tezPriceExchange7d)/tezPriceExchange) * 1000)/10;
        
        if (tezPrice7dChange_e > 0) {

            var tezPrice7dChange = "+" + tezPrice7dChange_e + "%";
        }
        
        else {

            tezPrice7dChange = tezPrice7dChange_e + "%";
        }

        document.getElementById("tezPrice7dChange").innerHTML = tezPrice7dChange;

        tokenPriceChange7d(contract, level7d, tezPriceExchange7d, tokenPrice)


}});}

function tokenPriceChange7d(contract, level7d, tezPriceExchange7d, tokenPrice){
        

     $.ajax({
            
    "url" : "https://api.tzkt.io/v1/contracts/"+contract+"/storage?level="+level7d,
    "type" : "GET",
    "success" : function(data) {
        

        var balanceInTez7d = Math.floor((data.storage.tez_pool)/1000000) * tezPriceExchange7d;
        var balanceInToken7d = Math.floor((data.storage.token_pool)/1000000);

        var tokenPrice7d = Math.round((balanceInTez7d/balanceInToken7d)*1000)/1000;

        var tokenPriceChange7d_e = Math.round(((tokenPrice - tokenPrice7d)/tokenPrice7d) * 1000)/10;
        
        if (tokenPriceChange7d_e > 0) {

            var tokenPriceChange7d = "+" + tokenPriceChange7d_e + "%";
        }
        
        else {

            var tokenPriceChange7d = tokenPriceChange7d_e + "%";
        }

        document.getElementById("tokenPriceChange7d").innerHTML = tokenPriceChange7d;
        
        
    }});}