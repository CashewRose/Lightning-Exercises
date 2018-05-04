const students = [
  {
    name: "Cashew",
    gender: "F"
  },
  {
    name: "Rachael",
    gender: "F"
  },
  {
    name: "Joshua",
    gender: "M"
  },
  {
    name: "Daniel",
    gender: "M"
  },
  {
    name: "Jacob",
    gender: "M"
  },
  {
    name: "Paul",
    gender: "M"
  },
  {
    name: "Meghan",
    gender: "F"
  },
  {
    name: "Hayley",
    gender: "F"
  },
  {
    name: "Deanna",
    gender: "F"
  },
  {
    name: "Kyle",
    gender: "M"
  }
]

let female = document.getElementById("female");
let male = document.getElementById("male");

for (let i = 0; i < students.length; i++) {
    if (students[i].gender === "F") {
        let li = document.createElement("li");
        let text = document.createTextNode(students[i].name + " is female.");
        li.appendChild(text);
        female.appendChild(li);
    }
    else {
        let li = document.createElement("li");
        let text = document.createTextNode(students[i].name + " is male.");
        li.appendChild(text);
        male.appendChild(li);
    }
}