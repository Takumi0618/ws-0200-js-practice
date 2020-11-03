/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log("Hello World");
}

helloWorld();

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst() {
  const hoge = "hoge";
  console.log(hoge);
}

displayConst();

/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet() {
  let hoge = "hoge";
  console.log(hoge);
}

displayLet();
/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg) {
  console.log(arg);
}
const foo =  "hello"

displayArgument(foo);

/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  console.log(a + b);
  return a + b;
}

sumTwoArgs(3, 7);

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  console.log(a - b);
  return a - b;
}

subtractTwoArgs(9, 4);
/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  if (b === 0) {
    console.log("null");
    return null;
  } else {
    console.log(Math.floor(a / b));
    return Math.floor(a / b);
  }
}

quotientTwoArgs(10, 0);

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  console.log(a * b);
  return a * b;
}

productTwoArgs(5, 4);
/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  console.log(a % 2);
  return a % 2;
}

remainderTwoArgs(9);

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  const isEven = a % 2
  console.log(isEven === 0)
  return isEven === 0;
}

isEven(10)

/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  console.log(a + b);
  return a + b;
}

concatString("こんにちは", "太郎さん");

module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
