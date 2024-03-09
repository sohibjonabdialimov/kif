const td = document.querySelectorAll(".table tbody tr td");
console.log(Array(td));

td.forEach((item) => {
  if(item.innerHTML === "bor"){
    item.classList.add("exist");
  }
})