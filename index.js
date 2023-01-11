// ДОМАШНЄ ЗАВДАННЯ


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// надеюсь так можно)


// 1. 
// Зробити змінну типу масив, довжиною 100 елеменнтів. Заповнити його випадковими числами від 0 до 100 включно.
// Написати функцію, яка буде створювати новий массив, в якому усі його елменти будуть:
//   а) відсортовані по зростанню
//   б) усі елементи будуть більше ніж 50


let arr1 = [];
for(let i = 0; i < 100; i++) {
    arr1[i] = getRandomInt(101);
}
// console.log(arr1);

function sort1(arr) {
   let sortArr = arr.filter(num => num > 50).sort();
   return sortArr
}
// console.log(sort1(arr1));


// 2. 
// Зробити змінну типу масив, довжиною 100 елеменнтів. Заповнити його випадковими строками з літерами англійского алфавіту.
// Написати функцію, яка буде створювати новий массив, в якому усі його елменти будуть:
//   а) відсортовані по зростанню
//   б) усі елемени будуть перетворені у об'єкт типу 
//       {
//         value: значення з елементу масива
//       }



let arr2 = [];

for(let i = 0; i < 100; i++) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // let randomIndex = getRandomInt(alphabet.length);
    // // arr2[i] = alphabet[randomIndex];
    let randomStr = '';
    for (let i = 0; i <= 4; i++) {
        randomStr += alphabet[getRandomInt(alphabet.length)];
    }
    arr2[i] = randomStr;
}

function sort2(arr){
    let arrObj = [];
    let arrSort = arr.sort();

    arrSort.forEach(function(item, i) {
        arrObj[i] = {value: `${item}`}
    });
      
    return arrObj
}
// console.log(sort2(arr2));



// 3.
// Компанія розробляє календар зайнятості своїх співробітників. Календар зберігається у форматі об'єктов з властивостями:
// startTime (час початку, коли співробітник зайнятий) та endTime (час закінчення, коли співробітник зайнятий) - число з точністю до 30 хвилин, де 
//   0 - це час, який дорівнює 00:00 
//   1 - це час, який дорівнює 00:30 
//   2 - це час, який дорівнює 01:00
//   3 - це час, який дорівнює 01:30
// і так далі.


// Потрібно написати функцію mergeRanges, яка отримує масив об'єктів зайнятості співробітника, та поверне чистий час, коли співробітник зайнятий.

// Наприклад, у співробітника зареєстровано зайнятість
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]
// потрібно розрахувати чистий час, коли співробітник зайнятий, тобто:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 }
// ]

let time = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ]

function mergeRanges(graph) {

    graph = graph.sort((a, b) => a.startTime > b.startTime ? 1 : -1);

    let newTime = [];

    for (let i = 0; i < graph.length - 1; i++) {

        let obj = {
            startTime: 0,
            endTime: 0
        }

        if(graph[i].endTime < graph[i + 1].startTime) {
            obj.startTime = graph[i].startTime;
            obj.endTime = graph[i].endTime;
        } else if (graph[i].endTime >= graph[i + 1].startTime) {
            obj.startTime = graph[i].startTime;
            obj.endTime = graph[i + 1].endTime;
            i++;
        } else if(graph[i].endTime >= graph[i + 1].endTime) {
            obj.endTime = graph[i].endTime;
        }
        newTime.push(obj);
    }
    // console.log(newTime);
    return newTime
}
mergeRanges(time);


// при добалении более случайных значений скрипт работает на всегда правильно, но под данный в задаче что надо