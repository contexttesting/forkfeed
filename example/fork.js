const rl = require('readline')

const i = rl.createInterface({
  input: process.stdin,
  output: process.stderr,
})
i.question(
  'What was the football coach yelling at the vending machine?\n> ',
  () => {
    i.question('What do snowmen do in their spare time?\n> ', () => {
      process.exit(1)
    })
  })