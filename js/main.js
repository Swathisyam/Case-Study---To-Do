$(document).ready(function(){


    $("#abtn").on("click",function(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos', 
            dataType :'json',

            success: function(todo){
                // var table = document.createElement("table");

                for (var i=0; i<todo.length; i++){
                    var row = $("<tr><td>" +"<input type='checkbox' >"+"</td><td>" + "</td><td>" + todo[i].title + "</td><td> " + "</td><td>" + todo[i].completed + "</td></tr> ");
                
                    $('#myTable').append(row);
                }
            },
            error: function(jqXHR, Status, errorThrown){
                alert('Error: ' + Status + '-' + errorThrown);
            }
    })      
    });

})

function check(){
    var promise = new Promise(function(resolve,reject){
        var count = document.querySelectorAll("input[type='checkbox']:checked").length;
        if (count ===5){
            resolve("Congrats. 5 Tasks have been Successfully Completed ")
        }
        else{
            reject("error");
        }
    });
    promise.then(function(Notselected){
        alert(Notselected);

    })
    .catch(function (c){
        alert(c);

    })
}





