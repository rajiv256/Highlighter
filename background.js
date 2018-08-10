chrome.runtime.onInstalled.addListener(function(){
    chrome.storage.sync.set({color:"#3af757"},function(){
        console.log("The color is green!") ;
    });
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        var meaning = "xxxx" ;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
            var o = JSON.parse(xhttp.responseText) ;
            meaning = o[0]['partOfSpeech']+"\n"+o[0]['text']+"\n\n"+o[1]['partOfSpeech']+"\n"+o[1]['text'] ;
            alert(meaning);
            sendResponse({meaning:"bar"});
            //TODO : I still can't get how to pass this meaning into content scripts
            //May be tomorrow.
          }
      };

    xhttp.open("GET", "http://api.wordnik.com/v4/word.json/"+request.word+"/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", true);
    xhttp.send();

});
