function*generateFunc(){
    yield 1;
    yield 2;
    return 3;
}
let generator = generateFunc();
let one = generate.next();
let two = generate.next();
let three = generate.next();
alert(JSON.stringify(one));
alert(JSON.stringify(two));
alert(JSON.stringify(three));