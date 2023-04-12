const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder') // создается массив placeholders

item.addEventListener('dragstart', dragstart) //чтобы обработать событие движения элемента исп dragstart. Передаем вторым параметром функцию
item.addEventListener('dragend', dragend) //закончили само перетаскивание. Передаем вторым параметром функцию


for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover) //когда мы находимся над местом куда хотим перетащить
    placeholder.addEventListener('dragenter', dragenter) // когда находимся на террритории этого места, зашли
    placeholder.addEventListener('dragleave', dragleave)// когда покинули это место
    placeholder.addEventListener('drop', dragdrop) // когда отпустили элемент
}

function dragstart(event) {   //когда мы запуск функцию dragstart к нам прилетает объект event
 // event.target это и есть наш элемент, мы имеем к нему так доступ
event.target.classList.add('hold') //добавили класс к элементу, нужно перейти в css и добавить этот класс и туда и внести в него стили
setTimeout(() => event.target.classList.add('hide'), 0)  // добавили setTimeot чтобы скрыть наш элемент с задержкой
 //доб класс hide, чтобы при перетаскивании элемента он скрывался на позиции страрт. И добавляем этот класс в css! это важно!!!
}

function dragend(event) {
event.target.classList.remove('hold') //и удаляем класс когда перетаскивание завершено, изменения запущенные на старте исчезают
event.target.classList.remove('hide') // удаляем класс, чтобы элемент при завершении перетаскивания оставался на месте, а не исчезал
}
//создаем функции под каждое действие с элементом
function dragover(event) {  //по умолчанию фунция dragover отменяет поведения которые позволяют нам перетаскивать этот элемент, поэтому... 
event.preventDefault() //... мы используем метот preventDefault() кот убирает дефолтное поведение(предотвратить поведение по умолчанию)
}

function dragenter(event) {
    event.target.classList.add('hovered') //создаем класс - перевод наведенный(hovered)
}

function dragleave(event) {
    event.target.classList.remove('hovered') // удаляем класс чтобы полоска исчезала после перетаскивания
}

function dragdrop(event) {
  event.target.append(item) //используем метод append(добавить) чтобы добавить наш элемент(item) в нужное место
  event.target.classList.remove('hovered')
}


