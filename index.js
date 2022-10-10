//TASK 1
var x= prompt("Завдання 1. Введіть число x =","");
var n= prompt("Завдання 1. Введіть число n =","");

function pow(x,n) {

var sum=1;    
for(var i=1; i<=n; i++){
     sum*=x;
}

return (sum);
    
}

console.log(pow(x,n));


//TASK 2
var arr= new Array();
var n;
var sum=0;
do{
    n=prompt("Введіть число =","");
    arr.push(Number(n));
}
while((n!="")&&(isNaN(n)!=true)&&(n!=null)){
    arr.pop(n);
}

function find_min(arguments){
    var min=arguments[0];
    for(var i=1; i<=arguments.length; i++){
        if(arguments[i]<min){
            min=arguments[i];
        }
    }
    return(min);
}

console.log(find_min(arr));

//TASK 3
var x= prompt("Завдання 3. Введіть число x =","");

function sign(a){
    if(a<0){
        return (-1);
    }
    if(a>0){
        return(1);
    }
    if(x==0){
        return(0);
    }
}

console.log(sign(x));

//TASK 4
var x= prompt("Завдання 4. Введіть число x =","");
var n= prompt("Завдання 4. Введіть число n =","");
var c= prompt("Завдання 4. Введіть число n =","");
function  calc(a, b, op){
    if(op==1){
        return(a-b);
    }
    else if(op==2){
        return(a*b);
    }
    else if(op==3){
        return(a/b);
    }
    else{
        return(Number(a)+Number(b));
    }
}

console.log(calc(x,n,c));

//TASK 5 
var x= prompt("Завдання 5. Введіть число x =","");
var y= prompt("Завдання 5. Введіть число n =","");

function digitN(k, n){
    var m=0;
    if(k.length>=n){
        for(var i=k.length-1; i>=0; i--){
            m++;
            if(m==n){
                return(k[i]);
            }
        }
    }
    else{
        return(-1);
    }
}

console.log(digitN(x,y));