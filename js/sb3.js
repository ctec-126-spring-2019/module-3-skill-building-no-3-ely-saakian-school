function verse1 () {
  const output =
  `Сверху - вниз я глазами раздеваю эту мисс<br>
  Сверху - вниз она взглядом говорит остановись<br>
  А я нет, на рассвете танцы в ультрафиолете<br>
  Мне напрочь сносит крышу будто я в кабриолете<br><br>
  
  Это че там за медведи топчутся рядом с тобой<br>
  Леди are you ready, давай сольемся с толпой<br>
  И на выход через черный, пока нас не спалили<br>
  Нет, но если передумаешь просто позвони мне<br><br>`

  return output
}

function verse2 () {
  const output =
  `Чего ждем ты объясни мне<br>
  А если честно до весны ни-ни<br>
  Я на тебя настроил сканер<br>
  Чего он тут руки распускает а<br><br>
  
  Только скажи, просто подай мне знак<br>
  Но тебе нравиться играть со мной, окей пусть будет так<br>
  Бармен еще лонкайл детка, предложение в силе<br>
  И как только наиграешься то позвони мне<br><br>`

  return output
}

function chorus1 () {
  const output =
  `Но я не оставлю тебе свой номер<br>
  Ты всегда найти сможешь меня у бара<br>
  Ты сияешь ярче всех на танцполе<br>
  Ведь таких как ты тут зая мало<br><br>`
  return output
}

function chorus2 () {
  const output =
  `Зая мало<br>
  Зая мало<br>
  Зая мало<br>
  Зая, зая, зая<br><br>`

  return output
}

function main () {
  const finalOutput = verse1() + chorus1() + chorus1() + verse2() + chorus1() + chorus1() + chorus2()// used to build lyrics string
  // call verse and chorus functions
  // each verse/chorus should return text including HTML paragraph tags

  // do not modify the statement below
  // it will take
  document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
  main()
}
