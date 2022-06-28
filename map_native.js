console.clear();
const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");
myMap.set("Luis", "315-0322");

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

console.log(myMap.delete("Luis"));
console.log(myMap.delete("Luis"));
console.log(myMap.get("Luis"));
