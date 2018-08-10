function contains(str,ch){
    for(var i = 0 ; i < str.length ; i++){
        if (str[i]===ch){
            return true ;
        }
    }
    return false ;
}

var arr =  document.getElementsByTagName("p") ;
var i ; var j ;
for (i = 0 ; i < arr.length ; i++){
    var str = arr[i].innerHTML ;
    if (contains(str,'<')===true){
        continue ;
    }
    var tokens = str.split(" ")
    var newstr = "" ;

    for (j = 0 ; j < tokens.length ; j++){
        tokens[j] = "<span class=\"word\">"+tokens[j]+"</span>" ;
        newstr+=tokens[j] +" ";
    }
    document.getElementsByTagName("p")[i].innerHTML = newstr ;
}


var words = document.getElementsByClassName("word") ;
for(var i = 0 ; i < words.length ; i++){
    words[i].addEventListener("click",function(){
        alert(this.innerHTML) ;
        chrome.runtime.sendMessage({word:this.innerHTML},function (response) {
            alert(response.meaning);
        });
    });
}
