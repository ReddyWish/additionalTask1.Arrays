const goals = [8, 1, 1, 3, 2, -1, 5];

// ........................Самый результативный матч по количеству голов.................

alert(`Самый результативный матч был под номером ${goals.indexOf(Math.max(...goals)) + 1}, в нём было забито ${Math.max(...goals)} мячей`)


// .........................Найти самые нерезультативные матчи................

// Для начала найдем матчи с автоматическими поражениями и заменим их на другое число чтобы не нарушать хронологию матчей
let lessThenO = goals.findIndex(item => {
   return item < 0
})
console.log(lessThenO)   //получили индекс [пять]

goals[5] = 999          //временно заменим на нереальное число голов
console.log(goals)
let worstGame = Math.min(...goals)  //нашли количество голов в наименее результативном матче
goals[5] = -1                       //вернём массив к исходному состоянию
goals.forEach((item, index) => {
  if(item === 1) {
     console.log(index)
  }
})                                //узнали индекс наименее результативного матча и индекс такого же матча. Это индексы [1] и [2] о них будем говорить как о 3м и 4м матчах
let number1 = goals.indexOf(1)
let number2 = goals.indexOf(1, 2)
console.log(number1)
console.log(number2)             //получили и записали эти индексы
//
alert(`Самые не результативные матчи были ${number1 + 1}й и ${number2 + 1}й, в каждом из них было забито по ${worstGame}му мячу`)

//
// // .............Общее количество голов за сезон.....................
//
let numberOfGoals = goals.reduce((acc, item) => {
    if(item > 0) {
        acc += item
    }
    return acc
})

alert(`Общее количество голов за сезон ${numberOfGoals}`)


// // .............................Были ли автоматические поражения ?..................
//
let autoLoose = goals.some(item => {
    return item < 0
})
if (autoLoose) {
    alert('К сожалению поражения были')
} else {
    alert('Поражений не было')
}


// // ..........................Среднее количество голов за матч...........................


numberOfGoals = goals.reduce((acc, item) => {
    return acc += item
})
numberOfGoals = (numberOfGoals / goals.length).toFixed(1)
alert(`Среднее количество голов за матч ${numberOfGoals}`)


// .........................Отсортируем голы в порядке возрастания.............

let newArr = [];

newArr = goals.slice(0)
newArr = newArr.sort((a, b) => a - b)

console.log(newArr)
console.log(goals)

newArr.forEach(item => {
    alert(item)
})