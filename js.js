$(document).ready(function(){
    let userInput = $('#userInput')
    let searchBtn = $('#searchBtn')
    searchBtn.click(function(e){
        e.preventDefault()
        let searchTenor= userInput.val();
        getUserData(searchTenor)
    })
})
function getUserData(search_term){
    $('#result').empty();
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', "https://g.tenor.com/v1/search?q="+ search_term + "&key=O2WJDVIT81JJ"); 
    myRequest.responseType= 'json';
    myRequest.onreadystatechange = function() {
        if (myRequest.readyState === 4 && myRequest.status === 200) {
        let userData = myRequest.response
        printUserData(userData);
        }
    };
    myRequest.send();
}
function printUserData(data){
    let result = $('#result');
    let url = data.results[0].media[0].gif.url;
    let searchTenor = document.createElement('img');
    searchTenor.setAttribute('src', url);
    result.append(searchTenor);
}