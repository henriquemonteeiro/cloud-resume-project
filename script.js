document.addEventListener("DOMContentLoaded", function () {
  const counterElement = document.getElementById("visitor-count");

  if (!counterElement) return;

  let count = localStorage.getItem("visitorCount");

  if (count === null) {
    count = 1;
  } else {
    count = Number(count) + 1;
  }

  localStorage.setItem("visitorCount", count);
  counterElement.textContent = count;
});
