///////////////////////intermediat foundation////////////////////////////////////////////////////////////
//Sigma-func that performs a sigma calculation for a given parameter called "num" if num positive////////
function sigma(num) { //defines func with paramenter "num"
    var sum = 0; //declars sum with inital start of "0"
    for (var i = 1; i <= num; i++) { //loop starts at 1 to exclude neg integers, run upto incl "num", incr ++
        sum = sum + i; //performs sigma
    }
    console.log(sum); //test case prints 6
}
sigma(3); //calls sigma wit argument 3,

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//Factorial-func performs factorial given a parameter, returns product of positives///////////////////////
function factorial(num) { //defines func with parameter "num"
    var fact = 1; //begins least common factor of of num
    for (var i = 1; i <= num; i++) { //loop starts at 1 to exclude neg integers, run upto incl "num", incr ++
        fact = fact * i; //performs factorial
    }
    console.log(fact); //test case printer 120
}
factorial(5);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//fibonacci-this was modified from a solution on stack overflow w/o using recursive, assumes num defines count 1 thru num places from fib(0)
//sum of fibonaccis thru num places 0=>  refer to "https://www.mathsisfun.com/numbers/fibonacci-sequence.html"
function fibonacci(num) {
    var a = 1,
        b = 0,
        temp;

    while (num >= 1) { //removed the "0" because fib(0)=0, and fib(1)=1
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
fibonacci(9); //test case return 34 because starting with zero index to index 9, sum of fibonaccis is 34
//the stack overflow solution gave me a base to work from and altered the loop to return the fib of the index
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arr 2nd to last-return 2nd to last elem of  arr/////////////////////////////////////////////////////////////
function SecndtoLast(arr) { //declare func with arr paramter
    var NexTolast = arr[arr.length - 2]; //declares var set to index before last index of arr
    if (arr.length < 2) { //checks if arr length is too short
        return "null"; //returns null if check is true
    } else {
        return NexTolast; //if arr is long enough, returns next to last element
    }
}
call = SecndtoLast([42, true, 4, "Liam", 7]); //declars var call to run func with argument
console.log(call); //prints the result of arr//"Liam"
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Arr Nth to last-ret elem that is N index from last//////////////////////////////////////////////////////////
function NtoLast(arr, N) { //declases func with paramters arr, and N
    var NTolast = arr[arr.length - N]; //defines var NtoLast
    if (arr.length < 2) { //checks if arr is too short
        return "null";
    } else {
        return NTolast; //returns Nth to last val of arr
    }
}
call = NtoLast([5, 2, 3, 6, 4, 9, 7], 3); //calls funct to get return with arr for argument, and N =3
console.log(call) //test case argument print 4, if N is set to 4, then prints 6//////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////
    //2nd to Largest-rtrn 2nd to largest val of arr/////////////////////////////////////////////////////////////////
function secondBiggest(arr) {
    if (arr.length < 2) {
        return "null";
    }
    if (arr.length > 1) {
        var max = arr[arr.length - 1];
        var sec = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > max) {
                sec = max;
                max = arr[i];
                continue;
            }
            if (arr[i] > sec && arr[i] < max) {
                sec = arr[i];
            }
        }
        if (max === sec) {
            console.log("only two indexes, and they are the same value")
        } else(console.log(sec))
    }
}
secondBiggest([10, 5, 4, 10]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////