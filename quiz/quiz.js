var questions = [
  {
    qst: "What does Harry accidentally do when he goes to the zoo?",
    a: "Make the glass in the snake enclosure disappear",
    b: "Teaches the monkeys to sing",
    c: "Turns a flamingo blue",
    d: "Turns a meerkat into a football",
    ans: "Make the glass in the snake enclosure disappear",
  },
  {
    qst: "What's Harry's mum Lily's surname before she marries Harry's dad?",
    a: "Peters",
    b: "Smith",
    c: "Evans",
    d: "Collins",
    ans: "Evans",
  },
  {
    qst: "Which of these is NOT a book by Gilderoy Lockhart?",
    a: "Travels With Trolls",
    b: "Year With A Yeti",
    c: "Zumba with a Zombie",
    d: "Holidays With Hags",
    ans: "Zumba with a Zombie",
  },
  {
    qst: "What's the name of Dudley Dursely's dad?",
    a: "Victor",
    b: "Ivan",
    c: "Vernon",
    d: "Vesuvius",
    ans: "Vernon",
  },
  {
    qst: "How many Harry Potter books are there in total?",
    a: "2",
    b: "7",
    c: "12",
    d: "1",
    ans: "7",
  },
  {
    qst: "Who wrote them all?",
    a: "Dav Pilkey",
    b: "J.K. Rowling",
    c: "David Walliams",
    d: "Anthony McPartlin and Declan Donnelly",
    ans: "J.K. Rowling",
  },
  {
    qst: "In which year was Harry born?",
    a: "1991",
    b: "1976",
    c: "2002",
    d: "1980",
    ans: "1980",
  },
  {
    qst: "What shape scar does Harry have on his forehead?",
    a: "A cat",
    b: "A moon",
    c: "A fidget spinner",
    d: "A lightning bolt",
    ans: "A lightning bolt",
  },
  {
    qst: "Who does Harry live with before going to Hogwarts?",
    a: "The Simpsons",
    b: "The Menaces",
    c: "The Dursleys",
    d: "The Sheerans",
    ans: "The Dursleys",
  },
  {
    qst: "Can you name the other 3 Hogwarts houses?",
    a: "Slytherin, Hufflepuff and Ravenclaw",
    b: "Slytherin, Hufflepuff and Bumblebee",
    c: "Hufflepuff, Bumblebee and Catface",
    d: "Stormzy, Sheeran and Hufflepuff",
    ans: "Slytherin, Hufflepuff and Ravenclaw",
  },
];
var data = [];
var answer = "";
var count = 1;
document.getElementById("next").addEventListener("click", nxtqst);
document.getElementById("qn").innerText = `Q${count}`;
document.getElementById("qsn").innerText = questions[count - 1].qst;
document.getElementById("opa").innerText = questions[count - 1].a;
document.getElementById("opb").innerText = questions[count - 1].b;
document.getElementById("opc").innerText = questions[count - 1].c;
document.getElementById("opd").innerText = questions[count - 1].d;

function nxtqst() {
  count++;
  if (count == 11) {
    let obj = {
        qsnt: questions[count - 2].qst,
        ans: questions[count - 2].ans,
        atmp: answer,
      };
      data.push(obj);
    localStorage.setItem("qstn", JSON.stringify(data));
    window.location.href = "../card/card.html";
  } else if (count == 10) {
    document.getElementById("qn").innerText = `Q${count}.`;
    document.getElementById("qsn").innerText = questions[count - 1].qst;
    document.getElementById("opa").innerText = questions[count - 1].a;
    document.getElementById("opb").innerText = questions[count - 1].b;
    document.getElementById("opc").innerText = questions[count - 1].c;
    document.getElementById("opd").innerText = questions[count - 1].d;
    document.getElementById("next").innerText = "Submit";
    let obj = {
      qsnt: questions[count - 2].qst,
      ans: questions[count - 2].ans,
      atmp: answer,
    };
    data.push(obj);
  } else {
    document.getElementById("qn").innerText = `Q${count}.`;
    document.getElementById("qsn").innerText = questions[count - 1].qst;
    document.getElementById("opa").innerText = questions[count - 1].a;
    document.getElementById("opb").innerText = questions[count - 1].b;
    document.getElementById("opc").innerText = questions[count - 1].c;
    document.getElementById("opd").innerText = questions[count - 1].d;
    let obj = {
      qsnt: questions[count - 2].qst,
      ans: questions[count - 2].ans,
      atmp: answer,
    };
    data.push(obj);
  }
  document.getElementById("opa").style.backgroundColor = "#EEEEEE";
  document.getElementById("opb").style.backgroundColor = "#EEEEEE";
  document.getElementById("opc").style.backgroundColor = "#EEEEEE";
  document.getElementById("opd").style.backgroundColor = "#EEEEEE";
  answer = "";
}

document.getElementById("opa").addEventListener("click", () => {
  document.getElementById("opa").style.backgroundColor = "green";
  document.getElementById("opb").style.backgroundColor = "#EEEEEE";
  document.getElementById("opc").style.backgroundColor = "#EEEEEE";
  document.getElementById("opd").style.backgroundColor = "#EEEEEE";
  answer = questions[count - 1].a;
});
document.getElementById("opb").addEventListener("click", () => {
  document.getElementById("opb").style.backgroundColor = "green";
  document.getElementById("opa").style.backgroundColor = "#EEEEEE";
  document.getElementById("opc").style.backgroundColor = "#EEEEEE";
  document.getElementById("opd").style.backgroundColor = "#EEEEEE";
  answer = questions[count - 1].b;
});
document.getElementById("opc").addEventListener("click", () => {
  document.getElementById("opc").style.backgroundColor = "green";
  document.getElementById("opb").style.backgroundColor = "#EEEEEE";
  document.getElementById("opa").style.backgroundColor = "#EEEEEE";
  document.getElementById("opd").style.backgroundColor = "#EEEEEE";
  answer = questions[count - 1].c;
});
document.getElementById("opd").addEventListener("click", () => {
  document.getElementById("opd").style.backgroundColor = "green";
  document.getElementById("opb").style.backgroundColor = "#EEEEEE";
  document.getElementById("opc").style.backgroundColor = "#EEEEEE";
  document.getElementById("opa").style.backgroundColor = "#EEEEEE";
  answer = questions[count - 1].d;
});
