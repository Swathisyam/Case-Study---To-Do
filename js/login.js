
$( "form" ).submit(function( event ) {
  if ( $( "input" ).first().val() === "admin"  &&   $( "input" ).second().val() === 12345 ) {
      alert("valiadtion success")
  
    return;
  }
 
  
  alert("validation failed")
  event.preventDefault();
});


// Using Callback 

// var uname = document.getElementById("u_name").value;
// var pwd = document.getElementById("pwd").value;

// function validate(callback){

    
//     if( document.getElementById("u_name").value == "admin"
//            && document.getElementById("pwd").value == 12345 ){
//             return;
//            }
    
//     callback();
      
// }
//     function login(){
//         alert("success")
            
//     }
//     validate(login);





