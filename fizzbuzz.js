// Laboration 1: FizzBuzz
// Av: Viktor Friholm
// Uppgiften går ut på att skriva ut alla tal mellan 1 och 100, ett tal per rad.
// Om talet är jämnt delbart med 3 så ska ordet 'Fizz' skrivas ut istället för talet.
// Om talet är jämnt delbart med 5 så ska ordet 'Buzz' skrivas ut istället för talet.
// Om talet är jämnt delbart med både 3 och 5 så ska ordet 'FizzBuzz' skrivas ut istället för någonting annat.
// Om talet är 42 så ska 'Answer to the Ultimate Question of Life, the Universe, and Everything' skrivas ut.

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