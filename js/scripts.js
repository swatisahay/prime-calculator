$(function() {

  $("#submit").click(function(){
    debugger
    var index;
    var prime= $("input#numbers").val();
    var array=[];
    if(prime<2){
      return false;
    }
    for(var i = 3 ;  i < prime ; i ++){
      for(var j = 2; j < i; j ++ ){
        if(i%j=== 0){
          break;
        }
      }
      if(i==j){
        array.push(i)
        $("#output").text(array);
      }
    }
});
});
