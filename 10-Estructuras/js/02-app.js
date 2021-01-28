//Fizz Buzz al 100
//multiplos de 3 ...fizz
//multiplos de 5 ...Buzz
//multiplos de 15 ...FizzBuzz

for(let i = 1; i <= 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`Su número es ${i} es FizzBuzz.`);
    }
    else if(i % 5 === 0){
        console.log(`Su número es ${i} es Buzz.`);
    }
    else if(i % 3 === 0){
        console.log(`Su número es ${i} es Fizz.`);    
    }
    else{
        console.log(`Su número es ${i}.`);
    }
}


