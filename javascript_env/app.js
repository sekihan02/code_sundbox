// const,let 変数宣言
// var val1 = "var 変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "var 変数を上書き"
// console.log(val1);

// // var 変数は再宣言可能
// var val1 = "var 変数再宣言";
// console.log(val1);

// let val2 = "let 変数";
// console.log(val2);

// // let変数は上書きが可能
// val2 = "let 変数を上書き"
// console.log(val2);

// // let 変数は再宣言できない
// // let val2 = "let 変数再宣言";

// const val3 = "const 変数";
// console.log(val3);

// // // let変数は上書きが出来ない
// // val3 = "const 変数を上書き"
// // console.log(val3);

// // const 変数は再宣言できない
// const val3 = "const 変数";
// console.log(val3);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "user",
//     age: 31,
// };
// console.log(val4);

// val4.name = "user4";
// val4.address = "Hokkaido";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);

// val5[0] = "bird";
// console.log(val5);

// val5.push("monkey");
// console.log(val5);

// // テンプレート文字列
// const name = "user";
// const age = 31;

// // const message1 = "私の名前は"+ name + "です。年齢は" + age + "です。"
// // console.log(message1)

// // テンプレート文字列を使用する
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数

// // // 従来の関数
// // function func1(str) {
// //     return str;
// // }
// const func1 = function(str) {
//     return str;
// }
// console.log(func1("func1です。"));

// アロー関数
// const func2 = (str) => {
//     return str;
// }
// const func2 = str => {
//     return str;
// }
// const func2 = str => str;

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(1, 2));

// 分割代入
// const myProfile = {
//   name: "user",
//   age: 31,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["user", 31];
// const [user_name, user_age] = myProfile;
// const message3 = `名前は${user_name}です。年齢は${user_age}です。`;
// console.log(message3);

// デフォルト値（引数、分割代入）
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん!`);
// sayHello();
// sayHello("user");

// const myProfile = {
//   age: 31,
// };
// const { age, name = "user" } = myProfile;
// console.log(age);
// console.log(name);

// オブジェクトの省略記法
// const name = "user";
// const age = 31;

// const myProfile = {
//   name,
//   age,
// };

// console.log(myProfile);

// スプレッド構文
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];

// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4, ...arr5];
// console.log(arr6);

// mapやfilterを使った配列の処理
const nameArr = ["田中", "山田", "上だ"];
// // for (let index = 0; index < nameArr.length; index++) {
// //     console.log(nameArr[index]);
// // }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(...nameArr2);

// const nameArr3 = nameArr.map((name, index) => {
//   return console.log(`${index + 1}番目は${name}です。`);
// });

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(...newNumArr);

// 三項演算子
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
// const val2 = 1 > 2 ? "trueです" : "falseです";
// console.log(val2);
// const num = 1500;
// const num = "1500";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 49));
console.log(checkSum(50, 51));
