import cliSelect from 'cli-select'
import chalk from 'chalk'

function getFirstLetter (word) {
  return word.toLowerCase()[0]
}

function joinLines(lines) {
  return  lines.join("\n") + "\n"
}

export default function constructorQuest(data) {

  const variant_names = Object.keys(data.variants)
  const variant_quests = Object.values(data.variants)


  let quest = {
    request: async function () {
      if(data.list) {
        console.log(joinLines(data.text))
        return await cliSelect({ 
          values: variant_names, 
          defaultValue: 1,
          valueRenderer: (value, selected) => {
            if(selected){
              return chalk.yellow(chalk.underline(value));
            }

            return value;
          }
        })
      }
      else {
        return await question(joinLines(data.text))
      }
    },
    response: function (answer) {
      if(data.list) {
        console.log(variant_names[answer.id])
        return variant_quests[answer.id]
      }
      else {
        if(getFirstLetter(answer) == "д")
          return data.variants.y
        else
          return data.variants.n
      }
    }
  }
  
  return quest
}