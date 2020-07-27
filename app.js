const command = process.argv[2];
console.log(process.argv);

if (command === "plus") {
  console.log("Addition is going on ...");
} else if (command === "minus") {
  console.log("Substraction is going on ...");
}
