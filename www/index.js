$(function(){
    alert("working")
    $.ajax({
        type: "GET",
        url: DOMAIN + '/api/testGet',
        dataType: "json",
        success: function(data){
            document.getElementById("wrapper").innerHTML += JSON.stringify(data)
            alert("returned")
        },
        error: function(msg){
            console.log(msg) 
            alert(msg)
        }
    })
})