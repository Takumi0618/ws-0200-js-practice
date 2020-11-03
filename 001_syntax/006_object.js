/**
 *  6.1 下記データを持ったオブジェクトを返す関数を実装してください。
 *
 *  name: 'Bob'
 *  age: 32
 *  gender: 'male'
 *
 */

function getPersonObject() {
  const person = {
    name: 'Bob',
    age: 32,
    gender: 'male',
  };
  console.log(person);
  return person;
}

getPersonObject();

/**
 *  6.2 下記データAが引数で与えられた場合にデータBに書き換える関数を実装してください。
 *
 *  Data A:
 *    name: 'Bob'
 *    age: 32
 *    gender: 'male'
 *  Data B:
 *    name: 'Mary'
 *    age: 37
 *    gender: 'female'
 *
 */

function mutateObject(person) {
  // const date = new Object;
  // date.name = person.name;
  // date.age = person.age;
  // date.gender = person.gender;
  // console.log(date);
  // return date;
  const date = new Object;
  if (person === dateA) {
    date.name = dateB.name;
    date.age = dateB.age;
    date.gender = dateB.gender;
    console.log(date);
    return date;
  }
}

const dateA = {
  name: 'Bob',
  age: 32,
  gender: 'male',
}

const dateB = {
  name: 'Mary',
  age: 37,
  gender: 'female',
}

mutateObject(dateA);

/**
 *  6.3 下記引数で渡される配列にランダムな1 ~10の数字を割り振り、オブジェクトとして返す
 *      関数を実装してください
 *
 *    [
 *      'Bob',
 *      'Mary',
 *      'Ann',
 *      'Mike'
 *    ]
 *
 *   output:
 *     {
 *       Bob: [Random Number],
 *       Mary: [Random Number],
 *       Ann: [Random Number],
 *       Mike: [Random Number]
 *     }
 *
 */

function assignNumber(persons) {
  const personNum = new Object();
  persons.forEach ((person) => {
    personNum[person] = Math.floor(Math.random() * 10 + 1);
  })
  console.log(personNum);
  return personNum;
}

const members = ['Bob', 'Mary', 'Ann', 'Mike']

assignNumber(members);

/**
 *  6.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *      但し、オブジェクトを使って実装すること
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
  // const obj = new Object();
  // const setArray = new Set(array);
  // obj.judge = (setArray.size !== array.length);
  // console.log(obj);
  // return obj;
  const setArray = new Set(array);
  console.log(setArray.size !== array.length)
  return setArray.size !== array.length;
}

const nums4 = [1, 2, 2, 3];
isDuplicate(nums4);

module.exports = {
  getPersonObject,
  mutateObject,
  assignNumber,
  isDuplicate
}
