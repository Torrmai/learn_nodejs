var operation = function(a,b,op) {
  if(op=="+"){
    return a+b;
  }
  else if (op=="-") {
    return a-b;
  }
  else if (op=="x") {
    return a*b;
  }
  else if (op == "^"){
    if(b==0){
      return 1
    }
    else{
      var result = 1
      for(i=1;i<=b;i++){
        result = result*a
      }
      return result
    }
  }
  else {
    return 'operation error'
  }
};
module.exports = operation;
