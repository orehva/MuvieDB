

// const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMuvieDB = {
//   count: numbersOfFilms,
//   muvies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// const a = +prompt ('Один из последних просмотренных фильмов?', ''),
//       b = +prompt ('На сколько оцените его?', ''),
//       c = +prompt ('Один из последних просмотренных фильмов?', ''),
//       d = +prompt ('На сколько оцените его?', '');

// personalMuvieDB.muvies[a] = b;
// personalMuvieDB.muvies[c] = d;


// for (i = 0; i < 2; i++ ){
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//       if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <50) {
//         personalMuvieDB.muvies[a] = b;
//         console.log('OK!')
//       } else {
//         i--
//         console.log('Error')
//       }


//   personalMuvieDB.muvies[a] = b;
// }

// console.log (personalMuvieDB)


// const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

// while (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <50) {
//   personalMuvieDB.muvies[a] = b
//   console.log('OK')
// }

// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         personalMuvieDB.muvies[a] = b
//          console.log('OK')
// } while (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length <50)
  
// console.log (personalMuvieDB)


// if (numbersOfFilms <= 10) {
//   prompt ('Просмотрено очень мало фильмов')}
//   else if (numbersOfFilms > 10 && numbersOfFilms <= 30) {
//     prompt ('Вы классический зритель')}
//   else if (numbersOfFilms > 30) {
//         prompt ('Вы киноман')}
//     else 
//     {prompt ('Произошла ошибка')
//   }


// function createCounter(){
//    let counter = 0;
//    const myFunction = function () {
//          counter = counter + 1
//          return counter
//    }
//    return myFunction
// }
// const increment = createCounter ()
// const c1 = increment ()
// const c2 = increment ()
// const c3 = increment ()
// console.log ('example increment', c1, c2, c3)





// let String = 'am in the easycode';
// let Splits = String.split(' ');
// let stringItog = '';

// for (i = 0; i < Splits.length; i++) {
//    let Name = Splits[i];
//    let First = Name.substring(0,1).toUpperCase();
//    let value = Name.slice(1, Name.length);
//    stringItog += First + value + ' ';
// }
//  console.log(stringItog)

//  2. Дана строка “tseb eht ma i”. 
//  Используя циклы, сделать строку-перевертыш 
//  (то есть последняя буква становится первой, 
//   предпоследняя - второй итд).


// let string = 'tseb eht ma i';
//   let itog = '';

//   for (i=string.length -1; i >= 0; i--) {
//     let Name = string[i];
//      itog += Name
//   }
//  console.log(itog)


//  Факториал числа - произведение всех натуральных чисел
//   от 1 до n включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. 
//   С помощью циклов вычислить факториал числа 10. Использовать for.

// for (i=0; i < 10; i++) {
//   result = result * 1
//   console.log(i)
// }



// let str = 'JavaScript is a pretty good language';
// let splits = str.split(' ');
// let Itog = '';

// for (i = 0; i < splits.length; i++){
//   let value = splits[i];
//   let Name = value.substring(0,1).toUpperCase();
//   let Upper = value.substring(1, value.length)
//   Itog += Name + Upper;

// }

// console.log(Itog);

// Найти все нечетные числа в массиве от 1 до 15 
// включительно и вывести их в консоль. 
// Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] 
// Использовать for of.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// for ( let key of arr) {
//   if ((arr[key] % 2) === 0) {
//   console.log(key)
//   }
// }


// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }

// for (let key in list) {
//   let stringItog = list[key].toUpperCase()
//   console.log(stringItog)
// }




// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// for (let num of arr) {
//   if (num % 2) {
//     console.log(num);
//   }
// }

// let str = 'i am in the easycode';
// let res = '';

// for (let i = 0; i < str.length; i++){
//   if (i ===0 || str[i-1]=== ' '){
//     res += str[i].toUpperCase();
//   } else {
//     res += str[i];
//   }
// }
// console.log(res)



// let value = 'i am going to hause';
// let resultat = '';

// for (i = 0; i < value.length; i++) {
//   if ((i===0 || value[i-1] === ' ')) {
//   resultat +=value[i].toUpperCase();
// } else {
//   resultat += value[i];
// }
// }
// console.log (resultat)

// console.log(isPalindrome("ana"));

// function isPalindrome(line) {
//   return line.toString().split('').reverse().join('') == line.toString();
// }

function isAnagram(str1, str2){
  if(str1.length != str2.length) return false;

  for (let i=0; i < str1.length; i++) {
    let char = str1[i];
    if(!str2.split('').includes(char)) return false;
  }

  return true;
}
var isAnagram = " ";

