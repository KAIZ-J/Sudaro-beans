const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {});
const cards = document.querySelectorAll(".card");
cards.forEach((el) => observer.observe(el));
document.getElementById("follow-us-section").querySelectorAll("a").forEach((el) => observer.observe(el));
observer.observe(document.getElementById("comment-form"))
function callPhone() {
  window.location.href = `tel:+251956334243`;
}
function packagesPage() {
  document.getElementById("packages").scrollIntoView({ behavior: "smooth" });
}
function backToTop(elem){
document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
}
const bttBtn= document.getElementById("btt-btn");
window.addEventListener("scroll",()=>{
if(window.scrollY>750){
  bttBtn.style.scale="1"
}
else{
  bttBtn.style.scale="0"
}
})

function themeChange(elem) {
  document.body.classList.toggle("dark");
   elem.querySelector("i").style.rotate="0deg"
   setTimeout(()=>{ 
elem.querySelector("i").style.rotate="360deg";
  elem.querySelector("i").classList.toggle("fa-sun");
   elem.querySelector("i").classList.toggle("fa-moon"); 
   },100)
  
}