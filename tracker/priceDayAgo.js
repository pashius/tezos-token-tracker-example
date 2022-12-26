function priceDayAgo(contract, level, tezPriceExchange, tokenPrice){

    
    var level24h = (level - 2880);
    
    $.ajax({
            
    "url" : "https://api.tzkt.io/v1/quotes?level="+level24h+"&select=usd",
    "type" : "GET",
    "success" : function(data) {

        var tezPriceExchange24h = Math.round((data) * 1000)/1000;

        var tezPrice24hChange_e = Math.round(((tezPriceExchange - tezPriceExchange24h)/tezPriceExchange) * 1000)/10;
        
        if (tezPrice24hChange_e > 0) {

            var tezPrice24hChange = "+" + tezPrice24hChange_e + "%";
        }
        
        else {

            tezPrice24hChange = tezPrice24hChange_e + "%";
        }

        document.getElementById("tezPrice24hChange").innerHTML = tezPrice24hChange;

        tokenPriceChange24(contract, level, tezPriceExchange24h, tokenPrice);

        priceWeekAgo(contract, level, tezPriceExchange, tokenPrice);

}});}

function tokenPriceChange24(contract, level24h, tezPriceExchange24h, tokenPrice){
        

    $.ajax({
           
   "url" : "https://api.tzkt.io/v1/contracts/"+contract+"/storage?level="+level24h,
   "type" : "GET",
   "success" : function(data) {
       

       var balanceInTez24 = Math.floor((data.storage.tez_pool)/1000000) * tezPriceExchange24h;
       var balanceInToken24 = Math.floor((data.storage.token_pool)/1000000);

       var tokenPrice24 = Math.round((balanceInTez24/balanceInToken24)*1000)/1000;

       var tokenPriceChange24_e = Math.round(((tokenPrice - tokenPrice24)/tokenPrice24) * 1000)/10;
       
       if (tokenPriceChange24_e > 0) {

           var tokenPriceChange24 = "+" + tokenPriceChange24_e + "%";
       }
       
       else {

           var tokenPriceChange24 = tokenPriceChange24_e + "%";
       }

       document.getElementById("tokenPriceChange24").innerHTML = tokenPriceChange24;

       
       
   }});}

