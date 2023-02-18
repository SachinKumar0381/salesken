var data = JSON.parse(localStorage.getItem("qstn"));
var count = 0;

data.map((el) => {
  if (el.ans == el.atmp) {
    count++;
    var td4 = document.createElement("td");
    td4.style.textAlign = "center";
    td4.innerHTML = `<i class="fa-solid fa-check green"></i>`;
  } else {
    var td4 = document.createElement("td");
    td4.style.textAlign = "center";
    td4.innerHTML = `<i class="fa-solid fa-x red"></i>`;
  }
  var tr1 = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerText = el.qsnt;
  var td2 = document.createElement("td");
  td2.innerText = el.atmp;
  var td3 = document.createElement("td");
  td3.innerText = el.ans;

  tr1.append(td1, td2, td3, td4);
  document.getElementById("tbd").append(tr1);
});

document.getElementById("score").innerText = `Total Score = ${count}`;
document.getElementById("percent").innerText = `Percentage = ${
  (count / 10) * 100
}%`;
if (count >= 9) {
  document.getElementById("status").innerText =
    "Congratulation, You have won Gold Badge.";
  document.getElementById(
    "trophy"
  ).innerHTML = `<i class="fa-solid fa-award trophy"></i>`;
  document.getElementById(
    "trophy"
  ).style.color = "gold";
} else if (count >= 7 && count < 9) {
  document.getElementById("status").innerText =
    "Congratulation, You have won Silver Badge.";
  document.getElementById(
    "trophy"
  ).innerHTML = `<i class="fa-solid fa-award trophy"></i>`;
  document.getElementById(
    "trophy"
  ).style.color = "silver";
} else if (count >= 5 && count < 7) {
  document.getElementById("status").innerText =
    "Congratulation, You have won Bronze Badge.";
  document.getElementById(
    "trophy"
  ).innerHTML = `<i class="fa-solid fa-award trophy"></i>`;
  document.getElementById(
    "trophy"
  ).style.color = "#CD7F32";
} else {
  document.getElementById("status").innerText = "Oops! Better luck next time.";
  document.getElementById(
    "trophy"
  ).innerHTML =`<i class="fa-solid fa-face-sad-tear trophy"></i>`;
}
document.getElementById("home").addEventListener("click",()=>{
    window.location.href = "../login/login.html";
})