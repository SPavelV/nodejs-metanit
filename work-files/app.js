const fs = require("fs");

fs.appendFileSync("hello.txt", "Привет ми ми ми!");

fs.appendFile("hello.txt", "Привет МИД!", (err) => {
  if (err) throw err;

  console.log("Запись файла завершена. Содержимое файла:");
  let data = fs.readFileSync("hello.txt", "utf-8");
  console.log(data);
});

fs.writeFileSync("hello.txt", "Привет ми ми ми!");

fs.readFile("hello.txt", "utf8", (err, data) => {
  console.log("Асинхронное чтение файла");
  if (err) throw err;
  console.log(data);
});

fs.writeFile("hello.txt", "Привет МИГ-29!", (err) => {
  if (err) throw err;
  console.log("Асинхронная запись файла завершена. Содержимое файла: ");
  let data = fs.readFileSync("hello.txt", "utf-8");
  console.log(`data `, data);
});

console.log("Синхронное чтение файла");
let fileContent = fs.readFileSync("hello.txt", "utf-8");
console.log(fileContent);

fs.unlinkSync("hello.txt");

fs.unlink("hello.txt", (err) => {
  if (err) throw err;
  else console.log("hello.txt was deleted");
});
