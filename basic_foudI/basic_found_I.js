//////////get 1-255 array///////////
function getArr(){
    var arr=[];
    for(var i=1;i<=255;i++){
        arr.push(i);
    }
 console.log(arr);
}
getArr();
///////////////////////////////////////////////////////////
//////////get even 1-1000 sum//////////////////////////////
function sumEvenOnethrGrand(){
    var sum=0;
    for(var i=1;i<=1000;i++){
        if (i%2===0){
            sum=(sum+i);
        }
    }console.log(sum);
}
sumEvenOnethrGrand();
/////////////////////////////////////////////////////////
//////////get odd 1-5000 sum/////////////////////////////
function sumOddoneThrFiveGrand(){
    var sum=0;
    for (var i=1;i<5000;i++){
        if (i%2!==0){
            sum=(sum+i);
        }
    }console.log(sum);
}
sumOddoneThrFiveGrand();
/////////////////////////////////////////////////////////
//////////////Iterate array/////////////////////////////
function IterateArr(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum=(sum+arr[i]);
    }console.log(sum);
}
IterateArr([1,2,5]);
/////////////////////////////////////////////////////////
/////////////Find Max array value////////////////////////
function findMax(arr){
    var max = 0;
    for (var i=0;i<arr.length;i++){
        if (max < arr[i]){
            max=arr[i];
        }
    }console.log(max)
}
findMax([-3,3,5,7]);
////////////////////////////////////////////////////////
////////////////Find avg of array///////////////////////
function findAvg(arr){
    var sum = 0;
    //var avg = (sum/arr.length);
    for(var i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
  console.log(sum);
  console.log(sum/arr.length);
}
a=findAvg([1,3,5,7,2,0]);
////////////////////////////////////////////////////////
/////////////////Array odd 1-50/////////////////////////
function getOddarr(){
    var arr=[];
    for(var i=1;i<=50;i++){
        if (i%2!==0){
            arr.push(i);
        }
    }console.log(arr);
}
getOddarr();
////////////////////////////////////////////////////////
///////////////////Greater than Y///////////////////////
function GreaterThanY(arr,Y){
    var count=0;
    for(var i=0;i<=arr.length;i++){
        if (arr[i]>Y){
            count=count+1;
        }
    }
    console.log(count);
}
GreaterThanY([1,3,5,7],3);
/////////////////////////////////////////////////////////
////////////////////Squares of array values//////////////
function Squares(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=(arr[i]*arr[i]);
    }
    console.log(arr);
}
Squares([1,5,10,-2]);
/////////////////////////////////////////////////////////
//////////////Negatives replaced with Zero///////////////
function NegativesGone(arr){
    for(var i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i]=0;
        }
    }
    console.log(arr);
}
NegativesGone([1,5,10,-2]);
///////////////////////////////////////////////////////////
/////////////////Max,Min,Avg of array//////////////////////
function MaxMinAvg(arr){
    var max=0;
    var min=0;
    var sum=0;
    for (var i=0;i<arr.length;i++){
        if (max<arr[i]){
            max=arr[i];
        }
        if (min>arr[i]){
            min=arr[i];
        }
        sum = sum + arr[i];
    }
    console.log(max);
    console.log(min);
    console.log(sum/arr.length);
}
MaxMinAvg([1,5,10,-2]);
//////////////////////////////////////////////////////////////
////////////////////Num to Str if Neg/////////////////////////
function NumToStr(arr){
    for(var i=0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i]="Dojo";
        }
    }
    console.log(arr);
}
NumToStr([-1,-3,2]);
////////////////////////////////////////////////////////////////

/////////This concludes the  assignment/////////////////////////