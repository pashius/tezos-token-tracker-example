function tokenPriceFunc(contract, level, tezPriceExchange){ $.ajax({
            
    "url" : "https://api.tzkt.io/v1/contracts/" + contract + "/storage",
    "type" : "GET",
    "success" : function(data) {

        var balanceInTez = Math.floor((data.storage.tez_pool)/1000000) * tezPriceExchange;
        var balanceInToken = Math.floor((data.storage.token_pool)/1000000);

        var tokenPrice = Math.round((balanceInTez/balanceInToken)*1000)/1000;

        document.getElementById("tokenPrice").innerHTML = tokenPrice;

        priceDayAgo(contract, level, tezPriceExchange, tokenPrice);
        

    }});}