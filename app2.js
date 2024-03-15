const container = document.querySelector(".container");
const input = document.querySelector("input");
const resetButton = document.querySelector("button");

const raghuVamsham = [
  { name: "ram", age: 27 },
  { name: "laxman", age: 26 },
  { name: "bharat", age: 25 },
  { name: "shatragna", age: 24 },
];

function insert(family) {
  family.forEach((person) => {
    const list = document.createElement("li");
    list.className = "items";
    list.innerHTML = ` Name: ${person.name} , Age: ${person.age}`;
    container.append(list);
  });
}

insert(raghuVamsham);

input.addEventListener("input", () => {
  const searchValue = input.value;

  const filteredItem = raghuVamsham.filter(
    (person) =>
      person.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      person.age.toString().includes(searchValue)
  );

  container.innerHTML = "";
  insert(filteredItem);
});

resetButton.addEventListener("click", () => {
  container.innerHTML = "";
  input.value = "";
  insert(raghuVamsham);
});
