
let projects = [
  { image: "/images/burger-app-images/burgerBg.jpg",
    title: "Rocket Animation",
    techStack: "CSS", 
    details: "full stack rest"
  },
  { image: "/images/job-app-images/office-space.jpg",
    title: "Turtle Animation",
    techStack: "Python, HTML", 
    details: "full stack rest"
  }
];



let index = 0;



const nextbtn = document.querySelector('.next-btn');
nextbtn.addEventListener('click', function(){
  index = index + 1;
  if(index > projects.length){
    index = 0;
  }
      title.innerHTML = projects[index].title;
  techStack.innerHTML = projects[index].techStack;
    details.innerHTML = projects[index].details;

});


const prevbtn = document.querySelector('.prev-btn');
prevbtn.addEventListener('click', function(){
  index = index - 1;
  if(index < 0){
    index = projects.length;
  }
    title.innerHTML = projects[index].title;
    techStack.innerHTML = projects[index].techStack;
    details.innerHTML = projects[index].details;
    photo.src = projects[index].image;
  
});

let title     = document.getElementById("project-title");
let techStack = document.getElementById("project-tech-stack");
let details   = document.getElementById("project-details");
let photo     = document.getElementById("project-img")