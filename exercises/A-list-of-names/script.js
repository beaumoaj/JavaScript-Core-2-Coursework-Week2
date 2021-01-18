function listOfNames(arrayOfPeople) {
  let content = document.getElementById("content");
  content.innerHTML = convertToHtml();
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);

function convertToHtml() {
  let html = "";
  for (let i = 0; i < people.length; i++) {
    html = html + `<p> ${people[i].name}</p>`;
  }
  return html;
}
