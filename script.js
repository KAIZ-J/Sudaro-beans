const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      console.log(entry.target);
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
