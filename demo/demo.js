let projects = 
[
  { title: "Burger Bistro E-Commerce",
     info: "<ol>Developed a full stack restaurant e-commerce website that allows patrons to add/remove items from cart, delete order, view order summary, register new account or login to existing account, and checkout</ol> <ol>Designed REST API that creates, retrieves, updates and removes items, users and order to and from MYSQL database</ol> <ol>Implemented PHP sessions to store visitor preferences as they login and navigate over multiple pages</ol> Created full screen CSS <b>page preloader that animates as the page is loading Integrated Google Maps API for location services and PayPal REST API for B2C customer payment transactions</b>"},
    
  { title: "Job Application Manager",
     info: "This responsive Spring MVC project assists job seekers in keeping the job application process organized. Implemented CRUD methods which allows end-users to create, retrieve, update delete entries to and from MySQL database. ",
    },

  
];
  
let count = 0;
let source = document.querySelector(".source-code");

let prevbtn = document.querySelector(".prev");
let nextbtn = document.querySelector(".next");

let title = document.getElementById("project-title");
let info  = document.getElementById("project-info");


prevbtn.addEventListener('click',function(){
  count = count -1;
  
  if(count < 0)
  {
    count = projects.length;
  }
  
  title.innerHTML  = projects[count].title;
  info.innerHTML   = projects[count].info;
  source.innerHTML = projects[count].code;
  
});

nextbtn.addEventListener('click',function(){
  count = count + 1;
  if(count > projects.length)
  {
    count = 0;
  }
  title.innerHTML = projects[count].title;
  info.innerHTML  = projects[count].info;
});