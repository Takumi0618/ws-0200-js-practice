/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  for (i = 0; i <=10; i++) {
    console.log(i);
  }
}

printOneToTen();

/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc() {
  for (i = 10; i >=0; i--) {
    console.log(i);
  }
}

printOneToTenDesc();
/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile() {
  let index = 0
  while(index < 11) {
    console.log(index);
    index++;
  }
}

printOneToTenWhile();

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc() {
  let index = 10
  while(index >= 0) {
    console.log(index);
    index--;
  }
}

printOneToTenWhileDesc();

module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
