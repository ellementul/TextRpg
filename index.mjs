import 'zx/globals'
import constructorQuest from './questions.mjs'

const questList = new Map
questList.beginQuest = "start"
questList.endQest = "end" 

questList.set("start",
  constructorQuest({
    text: [
      "Вы стоите перед мостом через небольшую речку.",
    ],
    list: true,
    variants: {
      "Вы переходите мост": "ambush",
      "Вы наблюдаете": "start"
    }
  })
)

questList.set("ambush",
  constructorQuest({
    text: [
      "Вы видите двух мужчин.",
    ],
    list: true,
    variants: {
      "Вы подходите к ним ближе": "fight",
      "Вы наблюдаете": "end"
    }
  })
)

questList.set("fight",
  constructorQuest({
    text: [
      "Они достали оружие!",
    ],
    list: true,
    variants: {
      "Вы пытаетесь заговорить с ними" : "end",
      "Вы сражаетесь с ними" : "end",
      "Вы убегаете от них" : "start"
    }
  })
)

questList.set("end",
  {
    type: "end",
    text: "Game End!"
  }
)


let questName = questList.beginQuest
do {

  if (questName == questList.endQest) {
    console.log(questList.get(questName).text)
    break;
  }

  const answer = await questList.get(questName).request()

  questName = questList.get(questName).response(answer)
} while(true)