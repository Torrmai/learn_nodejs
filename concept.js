console.log('test');
var time =0;
// setTimeout(function(){ As it name set ime out
  // time += 2
  // console.log(time+' seconds have passed.')
// },3000);
var timer = setInterval(function(){
  time += 2;
  console.log(time+' seconds have passed');
  if (time>10){
    clearInterval(timer)
  }
},2000);
console.log(__dirname);
console.log(__filename);
