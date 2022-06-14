function findMagicNumber(){
  var magicNumber= Math.floor(Math.random()*100);
  var count=0;
  var  quit = false;

  do{
    count++;
    var userInput = parseInt(prompt("Guess magic number (0-100)",""));
    if(isNaN(userInput)){
      quit = true;
      alert("Not a number input");
      break;
    }
    if(userInput <0  || userInput >100){
      quit = true;
      alert("Wrong input "+userInput);
      break;    
    }
    if(userInput < magicNumber)
      alert("Greater then "+userInput);
    else if(userInput > magicNumber)      
      alert("Smaller then "+userInput);
   }while(magicNumber != userInput);
   
  if(quit)
    document.write("<h1>You left the game</h1>");    
  else
    document.write("<h1>Number of attempt to find magic number <span id='attemptnumber'>"+count+"</span></h1>");

}

function threshold(arr){
  for(i=0; i<arr.length; i++){
    if( arr[i] > 100)
        arr[i] = 255;
    else
        arr[i] = 0;
  }
}