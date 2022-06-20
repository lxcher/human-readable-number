module.exports = function toReadable (number) {
  let array = Array.from(String(number))
  let readableArray = []
  if (array.length === 1) {
    switch (array[0]) {
      case '0':
        readableArray.push('zero');
        break;
      case '1':
        readableArray.push('one');
        break;
      case '2':
        readableArray.push('two');
        break;
      case '3':
        readableArray.push('three');
        break;
      case '4':
        readableArray.push('four');
        break;
      case '5':
        readableArray.push('five');
        break;
      case '6':
        readableArray.push('six');
        break;
      case '7':
        readableArray.push('seven');
        break;
      case '8':
        readableArray.push('eight');
        break;
      case '9':
        readableArray.push('nine');
        break;
    }
  }
  else if (array.length === 2 && number < 20) {
    switch (number) {
      case 10:
        readableArray.push('ten');
        break;
      case 11:
        readableArray.push('eleven');
        break;
      case 12:
        readableArray.push('twelve');
        break;
      case 13:
        readableArray.push('thirteen');
        break;
      case 14:
        readableArray.push('fourteen');
        break;
      case 15:
        readableArray.push('fifteen');
        break;
      case 16:
        readableArray.push('sixteen');
        break;
      case 17:
        readableArray.push('seventeen');
        break;
      case 18:
        readableArray.push('eighteen');
        break;
      case 19:
        readableArray.push('nineteen');
        break;
    }
    
  }
  else if (array.length === 2 && number >= 20) {
    switch (array[0]) {
      case '2':
        readableArray.push('twenty');
        break;
      case '3':
        readableArray.push('thirty');
        break;
      case '4':
        readableArray.push('forty');
        break;
      case '5':
        readableArray.push('fifty');
        break;
      case '6':
        readableArray.push('sixty');
        break;
      case '7':
        readableArray.push('seventy');
        break;
      case '8':
        readableArray.push('eighty');
        break;
      case '9':
        readableArray.push('ninety');
        break;
    }
    switch (array[1]) {
      case '0':
        break;
      case '1':
        readableArray.push(' one');
        break;
      case '2':
        readableArray.push(' two');
        break;
      case '3':
        readableArray.push(' three');
        break;
      case '4':
        readableArray.push(' four');
        break;
      case '5':
        readableArray.push(' five');
        break;
      case '6':
        readableArray.push(' six');
        break;
      case '7':
        readableArray.push(' seven');
        break;
      case '8':
        readableArray.push(' eight');
        break;
      case '9':
        readableArray.push(' nine');
        break;
    }
  }
  else if (array.length === 3) {
    switch (array[0]) {
      case '0':
        break;
      case '1':
        readableArray.push('one hundred');
        break;
      case '2':
        readableArray.push('two hundred');
        break;
      case '3':
        readableArray.push('three hundred');
        break;
      case '4':
        readableArray.push('four hundred');
        break;
      case '5':
        readableArray.push('five hundred');
        break;
      case '6':
        readableArray.push('six hundred');
        break;
      case '7':
        readableArray.push('seven hundred');
        break;
      case '8':
        readableArray.push('eight hundred');
        break;
      case '9':
        readableArray.push('nine hundred');
        break;
    }
    if (array[1] === '0') {
      switch (array[2]) {
        case '0':
          break;
        case '1':
          readableArray.push(' one');
          break;
        case '2':
          readableArray.push(' two');
          break;
        case '3':
          readableArray.push(' three');
          break;
        case '4':
          readableArray.push(' four');
          break;
        case '5':
          readableArray.push(' five');
          break;
        case '6':
          readableArray.push(' six');
          break;
        case '7':
          readableArray.push(' seven');
          break;
        case '8':
          readableArray.push(' eight');
          break;
        case '9':
          readableArray.push(' nine');
          break;
      }
    }
    else if (array[1] === '1') {
      switch (array[2]) {
        case '0':
          readableArray.push(' ten');
          break;
        case '1':
          readableArray.push(' eleven');
          break;
        case '2':
          readableArray.push(' twelve');
          break;
        case '3':
          readableArray.push(' thirteen');
          break;
        case '4':
          readableArray.push(' fourteen');
          break;
        case '5':
          readableArray.push(' fifteen');
          break;
        case '6':
          readableArray.push(' sixteen');
          break;
        case '7':
          readableArray.push(' seventeen');
          break;
        case '8':
          readableArray.push(' eighteen');
          break;
        case '9':
          readableArray.push(' nineteen');
          break;
      }
    }
    else {
      switch (array[1]) {
        case '0':
          break;
        case '1':
          break;
        case '2':
          readableArray.push(' twenty');
          break;
        case '3':
          readableArray.push(' thirty');
          break;
        case '4':
          readableArray.push(' forty');
          break;
        case '5':
          readableArray.push(' fifty');
          break;
        case '6':
          readableArray.push(' sixty');
          break;
        case '7':
          readableArray.push(' seventy');
          break;
        case '8':
          readableArray.push(' eighty');
          break;
        case '9':
          readableArray.push(' ninety');
          break;
      }
      switch (array[2]) {
        case '0':
          break;
        case '1':
          readableArray.push(' one');
          break;
        case '2':
          readableArray.push(' two');
          break;
        case '3':
          readableArray.push(' three');
          break;
        case '4':
          readableArray.push(' four');
          break;
        case '5':
          readableArray.push(' five');
          break;
        case '6':
          readableArray.push(' six');
          break;
        case '7':
          readableArray.push(' seven');
          break;
        case '8':
          readableArray.push(' eight');
          break;
        case '9':
          readableArray.push(' nine');
          break;
      }
    }
  }
  return readableArray.join('')
}
