var breed=document.getElementById('first').value;
var dog=document.getElementById('dog');
var img=document.createElement('div');
var main=document.querySelector('body');


dog.addEventListener('click',function(e){
    breed=dog.value;
    getData(breed);

});

setInterval(function(){
    getData(breed)},5000)
    function getData(breed){
        var newRequest=new XMLHttpRequest();
        newRequest.open('GET',"https://dog.ceo/api/breed/"+ breed +"/images/random");
        newRequest.onload=function(){
            var data=JSON.parse(newRequest.responseText).message;
            displayData(data);
        };
        newRequest.send();
    };
function displayData(data){
    main.appendChild(img);
    var picture='<img src="' + data + '"/>';
    img.innerHTML=picture;
};
getData(breed);