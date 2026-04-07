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

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();


 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longerParagraph").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longerParagraph").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });

// When any of the Buy Now Functions are clicked, show ticketForm
$(".buyTicket").click(function(){
    $("#ticketForm").show();
    $("#formHeading").show();
});

//Extract date from the calendar table and display it in the form when a date is clicked
$(".buyTicket").on("click", function () {
    var td = $(this).closest("td");


    // Extract the day from the text content of the td
    var day = td.contents().filter(function () {
        return this.nodeType === 3;   // text node
    }).text().trim();

    // Extract the month and year from the 
    var tableId = $(this).closest("table.calendar").attr("id");
    var month = tableId.charAt(0).toUpperCase() + tableId.slice(1);

    // Build the full date for March 2026
    var fullDate = `${month} ${day}, 2026`;

    //update date in form
    document.getElementById("visitDate").innerHTML = fullDate;
});

$("#submitButton").on("click", function() {
    window.alert("Redirecting to payment system.");
}
)

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".navMenu").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("responsive");
  });
});

