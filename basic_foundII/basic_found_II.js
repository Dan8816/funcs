//////////////////////Basic Foundations II////////////////////////////
/////////////////////Biggie Size-positves convert to 'biggie'/////////
function BigSize(arr){
    for(var i=0;i<arr.length;i++){
        if (arr[i]>0){
            arr[i]='big';
        }
    }
    console.log(arr);
}
BigSize([-1,3,5,-5]);
/////////////////////////////////////////////////////////////////////
/////////////Print Low,Return High-array/////////////////////////////
function PrntLoRtrnHi(arr){
    var lo=arr[0];
    var hi=arr[0];
    for(var i=0;i<arr.length;i++){
        if (lo>arr[i]){
            lo=arr[i];
        }
        if (hi<arr[i]){
            hi=arr[i];
        }
    }
    console.log(lo);
    return(hi);
}
a=PrntLoRtrnHi([1,2,3,4,5,6,7,8,9]);
console.log(a);
////////////////////////////////////////////////////////////////////////
//Prnt One, Rtrn Another-prnt 2nd to last, and return 1st odd///////////
function PrntoneRtrnAnthr(arr){
    console.log(arr[arr.length-2]);
    for(var i=0;i<arr.length;i++){
        if (arr[i]%2!==0){
            return arr[i];
        }
    }   
}
a=PrntoneRtrnAnthr([2,2,3,4,5,6,7,8,9]);
console.log(a);
////////////////////////////////////////////////////////////////////////
//Dbl Vision-rtrn new arr w/ ea. value dbl value of old array///////////
function dblVision(arr){
    var arrNew=[];
    for(var i=0;i<arr.length;i++){
        arrNew.push(arr[i]);
        arrNew[i]=arrNew[i]*2;
    }
    return arrNew;
}
call=dblVision([1,2,3]);
console.log(call);
/////////////////////////////////////////////////////////////////////////
//Count Positives-rplc last value array quant of positives///////////////
function CntPosVal(arr){
    var count=0;
    for(var i=0;i<arr.length;i++){
        if (arr[i]>=0){
            count=count+1;
        }
        if (i==arr.length-1){
            arr[i]=count;
        }
    }
    console.log(arr);
}
CntPosVal([-1,1,1,1]);
///////////////////////////////////////////////////////////////////////////
//Even&Odds-func accept array, every occur 3 odd vals consec print "That's odd!" if 3 evens consec print "Even more so"////////
function EvnOdd(arr){
    for(var i=0;i<arr.length;i++){
        if ((arr[i]%2!==0) && (arr[i+1]%2!==0) && (arr[i+2]%2!==0)){
            console.log("That's odd!");
        }
        if ((arr[i]%2===0) && (arr[i+1]%2===0) && (arr[i+2]%2===0)){
            console.log("Even more so!")
        }
    }
}
EvnOdd([1,8,1,3,3,6,4,2,9,6,9,4]);/////this might need some work, bcuz it worked on test array but others too many logs////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Incrmt Seconds-Given arr, add 1 to every 2nd element, specfly odd idx, c.l ea. val and return arr////////////////////////////
function IncrmtOddIdx(arr){
    for (var i=1;i<arr.length;i+=2){//this loop starts at 1, bcuz 0 is even and arr[0]+2 will grab even idx's, now it grabs
    //2nd idx of array arr[1]->arr[3]->arr[5]->arr[7]
        arr[i]=arr[i]+1;
        console.log(arr[i]);
    }
    return arr;
}
a=IncrmtOddIdx([1,2,3,4,5,6,7,8,9,10]);//given this test log removed even values in odd idx
console.log(a);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Prev Lengths-given arr of strings, keep same arr, rplc ea. str with num = length of str at previos idx///////////////////////
function PrevLens(arr){
    for (var i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1].length;
    }
    arr[0]=0;
    return arr;
}
a=PrevLens(["Coding", "Dojo", "Coding", "Dojo"]);
console.log(a);//this challenge was a time sink despite being shown the solution hrs earlier in class!!!!
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Add 7 to most//func w/ arr parmeter, rtrn new arr with vals except 1st add 7 to each///////////////////////////////////////
function addSeven(arr){
    var arrNew=[];
    for (var i=0;i<arr.length;i++){
        if (i===0) {
            arrNew[i]=arr[i];
        }
        else{
            arrNew[i]=arr[i]+7;
        }
    }
    console.log(arr);
    console.log(arrNew);
}
addSeven([1,2,3,4,5,6,7,8,9]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ReverseArr-Func reverses given arr vals from 1st t0 last eg [1,2,3] ==> [3,2,1]////////////////////////////////////////////
function RevArr(arr){
    for (var i=0;i<arr.length;i++){
        temp = arr[i];
        arr[i]=arr[arr.length-1];
        arr[arr.length-1]=temp;
    }
    console.log(arr);
}
RevArr([3,1,6,4,2]);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Outlook neg-Given arr, rtrn newArr all vals of arr made neg///////////////////////////////////////////////////////////////
function OutlookNeg(arr){
    var arrNew=[];
    for (var i=0;i<arr.length;i++){
        if (arr[i]>=0){
            arrNew[i]=(0-arr[i]);
        }
        else {
            arrNew[i]=arr[i];
        }   
    }
    console.log(arrNew);
}
OutlookNeg([1,-3,5]);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Always Hung-func accepts arr paremter and print "yummy" a val === "food" if not, print "I'm Hungry" once/////////////////
function Hungry(arr){
    for (var i=0;i<arr.length;i++){
        if (arr[i]==="food") {
            console.log("yummy");
        }
        else if (arr[arr.length-1]!=="food") {
            console.log("I'm Hungry");///not sure how to get his to only print once
        }
    }
}
Hungry([1,2,3,"food"]);
Hungry([1,2,3,4]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Swap to Center-given arr, swap 1st and last, 3rd and 3rd to last etc([tru,42,ada,2,pizza]==>[pizza,42,ada,2,true])//////
///
