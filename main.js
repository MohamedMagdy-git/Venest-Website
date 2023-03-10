// statas number down up
let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats .container");
let start = true;



window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (start) {
      nums.forEach((num) => startCount(num));
    }
    start = false;
  }
}




function startCount(ele) {
  let goal = ele.dataset.goal;
  let count = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal){
      clearInterval(count);
    }
  }, 10000/goal);
};



// --------------------- nav menu
let pugerIcone = document.querySelector(".icone");
let ul = document.querySelector(".mobile-nav");
let closeIcone = document.querySelector(".fa-circle-xmark");

console.log(closeIcone)
pugerIcone.onclick = function () {
  ul.style = "transform: translateX(0px);"
};

closeIcone.onclick = function () {
  ul.style = "transform: translateX(100%);"
};


// ----------------- filter img portfolio
let lis = document.querySelectorAll('.portfolio ul li')
let img = document.querySelectorAll(".portfolio .img-container .box")


lis.forEach((li)=> {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImg);
})


// function to remove active and add to Present li
function removeActive (){
  lis.forEach((li)=> {
    li.classList.remove("active")
    this.classList.add("active")
  })
};



// function manage img

function manageImg() {
  img.forEach((img) => {
    img.style.display = 'none'
  });
  document.querySelectorAll(this.dataset.cut).forEach((ele) => {
    ele.style.display = 'block';
  })
}