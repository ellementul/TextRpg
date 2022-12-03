import 'zx/globals'
import answerProccesing from './questions.js'
// import list  from 'cli-list-select'



const questList = [
  {
    type: "isYes",
    text: [
      "Ты стоишь перед мостом через небольшую речку.",
      "Перейти?"
    ]
  },
  {
    type: "isYes",
    text: [
      "Вы перешли мост.",
      "Ты видишь двух мужчин.",
      "Подойти?"
    ]
  },
  // {
  //   type: "selectList",
  //   text: ["Они вытащили оружие."],
  //   variants:
  //     [
  //       "Сражаться",
  //       "Бежать",
  //       "Говорить"
  //     ]
  // }
]

let questIndex = 0
do {
  const answer = await answerProccesing[questList[questIndex].type]
    .request(questList[questIndex].text)

  if(answerProccesing[questList[questIndex].type].response(answer))
    questIndex++

} while(true)