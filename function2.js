//function with named expression
//Using browser take input through prompt()
//But in node u need to use a module like readline to take input from user.


const readline=require('readline');
 const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
 });


var showresult=function(marks){
    if(marks>35){
        return 1;
    }else{
        return 0;
    }
}

rl.question("Enter Your Marks",function(userInput){
    var m=parseInt(userInput);
    var result=showresult(m);

    if(result==1){
        console.log("You have passed");
    }else{
        console.log("You have failed");
    }

    
 rl.question("Enter Your Age" , function(ageInput){
    let age=parseInt(ageInput);
    year=2025-age;
    console.log(`Hello your age is ${year}` );
 rl.close();
 });
  });
