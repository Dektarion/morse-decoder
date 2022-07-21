const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const exprLength = expr.length;
  let exprArr = [];
  let repElement = '';
  let string = '';
  
  const keyArr = Object.keys(MORSE_TABLE);
  const valueArr = Object.values(MORSE_TABLE);

  for (let i = 0; i < exprLength; i = i + 10){
    exprArr.push(expr.slice(i, i + 10));
  }

  const dotDashArr = exprArr.map((element) => {
    repElement = element.replaceAll('10', '.').replaceAll('11', '-').replaceAll('00', '').replaceAll('**********', ' ');
    return repElement;
  })
  
  dotDashArr.forEach((element, index) => {
    let ind = keyArr.indexOf(dotDashArr[index]);
    if (ind !== -1) {
      string = `${string}${valueArr[ind]}`;
    } else {
      string = `${string} `
    }
  })
  
  return string;
}

module.exports = {
  decode
}