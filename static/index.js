$(function(){
    alert("worka");

    $.ajax({
        type: "GET",
        url: '/api/testGet',
        dataType: "json",
        success: function(data){
            console.log(data)
        },
        error: function(msg){
            console.log(msg) 
        }
    })
})