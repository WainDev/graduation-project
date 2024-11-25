const promtName = prompt("Каккое название поля вы хотте задатьт");
const promtValueName = prompt(
  "Введите значение которые хотите записать в обьект"
);

const user = {
  [promtName]: promtValueName,
};

console.log(user);
