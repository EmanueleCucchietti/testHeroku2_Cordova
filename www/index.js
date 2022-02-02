$(function(){
    $.ajax({
        type: "GET",
        url: DOMAIN + '/api/testGet',
        dataType: "json",
        success: function(data){
            console.log(data)
        },
        error: function(msg){
            console.log(msg) 
        }
    })
})