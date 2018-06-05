$(function() {

$("#submit").click(function(){
  debugger
  var index;
  var prime= $("input#numbers").val();
  if(prime<2){
    return false;
  }
  for(index = 2 ; index < prime ; index++){
    if(prime%index === 0){
      alert("its not a prime number");
    }
    
    }
      alert("it is a prime number");




  // var arrays = palin.split("");
  // var cloneArray = arrays.slice();
  // var revArrays= cloneArray.reverse();
  // if(arrays.toString()===revArrays.toString()){
  //   $("#output").text(" Yes it is a palindrome")
  // }
  // else{
  //   $("#output").text(" No it is not a palindrome")
  // }

  // arrays.forEach(function(letter){
  //   if ((letter==="a")||(letter==="e")||(letter==="i")||(letter==="o")||(letter==="u")){
  //     output.push("-");
  //   } else {
  //     output.push(letter);
  //   }
  // });
  // $("#formOne").hide();
  //  var total= output.join("");
  //
});
});
