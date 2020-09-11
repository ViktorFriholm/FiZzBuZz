for(var i= 1; i < 101; i++ ){
    if(i === 42){
        console.log("Answer to the Ultimate Question of Life, the Universe, and Everything");
    }
    else if (i % 3 === 0 && i % 5 ===0) {
        console.log("FizzBuzz");
    }
    else if(i % 3 ===0 ) {
        console.log("Fizz");
    }
    else if(i % 5 ===0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
