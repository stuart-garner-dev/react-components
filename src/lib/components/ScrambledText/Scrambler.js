export default class Scrambler {
  static get CHARACTERS() {
    return {
      DEFAULT: [
        '!',
        '@',
        '#',
        '-',
        '_',
        '~',
        '`',
        '"',
        '/',
        '*',
        '+',
        '=',
        '*',
        '&',
        '%',
        '$',
        '|',
      ],
    };
  }
  constructor() {
    this.characters = [...Scrambler.CHARACTERS.DEFAULT];
    this.onScramble = null;
    this.targetText = null;
    this.encodedText = null;
    this.frameIndex = 0;
    this.enterFrame = null;
    this.characterArray = null;
    this.currentFrame = 0;
    this.characterIndex = 0;
    this._update = this._update.bind(this);
    this._encode = this._encode.bind(this);
    this._getCharactersToEncode = this._getCharactersToEncode.bind(this);
  }

  scramble(text, onScramble) {
    this.targetText = text.split('');
    this.encodedText = this.targetText;
    this.onScramble = onScramble;
    this._getCharactersToEncode();
  }

  _getCharactersToEncode() {
    this.characterArray = [];
    let ignore = false;
    this.targetText.forEach((character, index) => {
      if (character !== ' ') {
        if (character === '<' && !ignore) {
          ignore = true;
        } else if (character === '>' && ignore) {
          ignore = false;
          return;
        }
        if (!ignore) {
          this.characterArray.push({
            target: character,
            display: '',
            index: index,
            loops: this._randomIntFromInterval(3, 6),
            loopComplete: 0,
            complete: false,
          });
          this.targetText[index] = '';
        }
      }
    });
    this.onScramble('');
    this.enterFrame = requestAnimationFrame(this._update);
  }

  _update() {
    this.currentFrame++;

    if (this.currentFrame % 2 === 0) {
      if (this.characterIndex < this.characterArray.length) {
        this.characterIndex++;
      }
      this.characterArray.forEach((item, index) => {
        if (index < this.characterIndex) {
          this._encode(item, index);
        }
      });
      this.onScramble(this.targetText.join(''));
    }
    if (this.characterArray.length > 0) {
      this.enterFrame = requestAnimationFrame(this._update);
    } else {
      cancelAnimationFrame(this.enterFrame);
    }
  }

  _encode(item, index) {
    if (item.loopComplete !== item.loops) {
      const newText = this.characters[
        this._randomIntFromInterval(0, this.characters.length - 1)
      ];
      item.display = newText;
      this.targetText[item.index] = item.display;
      item.loopComplete++;
    } else {
      item.display = item.target;
      this.targetText[item.index] = item.display;
      this.characterArray.splice(index, 1);
    }
  }

  _randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
