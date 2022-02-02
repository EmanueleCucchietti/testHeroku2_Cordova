$(function(){
    $.ajax({
        type: "GET",
        url: DOMAIN + '/api/testGet',
        dataType: "json",
        success: function(data){
            document.getElementById("wrapper").innerHTML += JSON.stringify(data)
        },
        error: function(msg){
            console.log(msg) 
        }
    })
})