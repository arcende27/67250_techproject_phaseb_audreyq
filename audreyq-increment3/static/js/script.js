var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    var sum = x1 + x2;
    console.log(sum);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z){
    console.log(C);
} else if (C.length < z){
    console.log(z);
} else {
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

function findTheBanana(l) {
    for (let i = 0; i < l.length; i++){
        if (l[i] == 'Banana'){
            alert();
        }
    }
}

//findTheBanana(L1);
//findTheBanana(L2);

// L1.forEach((fruit) => {
//     if(fruit == 'Banana'){
//         alert();
//     }
// })

// L2.forEach((fruit) => {
//     if(fruit == 'Banana'){
//         alert();
//     }
// })

//Part 3: Time-Based Greeting

var now = new Date();

var hour = now.getHours();

function greeting(h){
    if (h < 5 || h >= 20){
        document.getElementById("greeting").innerHTML = "Good night";
    } else if (h < 12){
        document.getElementById("greeting").innerHTML = "Good morning";
    } else if (h < 18){
        document.getElementById("greeting").innerHTML = "Good afternoon";
    } else {
        document.getElementById("greeting").innerHTML = "Good evening";
    }
}

if(document.getElementById("greeting") != null){
    greeting(hour);
}

function addYear(){
    var year = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = year;
}
