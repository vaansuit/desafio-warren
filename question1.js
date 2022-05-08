/* Para rodar o programa, basta abrir o terminal e digitar $ node question1.js > resultado1.txt
    o Node ira gerar um arquivo de nome resultado1.txt com a resposta*/



const reversedNum = (num) =>
  parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)

const getFirstDigit = (number) => parseInt(number.toString().charAt(0))
const getLastDigit = (number) =>
  parseInt(number.toString().charAt(number.toString().length - 1))

const doWhatever = () => {
  const allNumbers = Array.from({ length: 1000 }, (_, i) => i + 1)

  return allNumbers.map((number) => {
    const firstDigit = getFirstDigit(number)
    const lastDigit = getLastDigit(number)

    if (firstDigit === 0 || lastDigit === 0 || number.toString().length === 1) {
      return {
        number,
        skip: true,
        sum: 0,
        reversed: 0,
      }
    }
    const reversed = reversedNum(number)

    const sum = number + reversed
    const isEvenNumber = sum % 2 !== 0

    return {
      number,
      reversed,
      skip: !isEvenNumber,
      sum,
    }
  })
}


const response = doWhatever()
  const result = response.map((item) => {
    if (item.skip) {
      return null
    }
    return {
      soma: item.sum,
      numero: item.number,
      //reversoNumero: item.reversed,
      
    }
  })
  
    console.table(result)
  
  
