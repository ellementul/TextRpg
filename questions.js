function getFirstLetter (word) {
  return word.toLowerCase()[0]
}

function joinLines(lines) {
  return  lines.join("\n") + "\n"
}

module.exports = {
  isYes: {
    request: function (text) {
      return question(joinLines(text))
    },
    response: function (answer) {
      return getFirstLetter(answer) == "д"
    }
  }
}