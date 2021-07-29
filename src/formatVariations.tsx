const type9x9 = {
  height: '60%',
  width: '100%',
};

const type6x9 = {
  height: '40%',
  width: '100%',
};

const type9x3 = {
  height: '100%',
  width: '20%',
};

const type9x6 = {
  height: '100%',
  width: '40%',
};
const type3x9 = {
  height: '20%',
  width: '100%',
};

const formatVariations = {
  format2: [
    [type9x9, type6x9],
    [type6x9, type9x9],
  ],
  format3: [
    [type3x9, type9x9, type3x9],
    [type3x9, type3x9, type9x9],
    [type9x9, type3x9, type3x9],
    [type9x9, type3x9, type3x9],
    [type6x9, type3x9, type6x9],
    [type6x9, type6x9, type3x9],
    [type3x9, type6x9, type6x9],
    [type9x6, type9x3, type6x9],
    [type6x9, type9x6, type9x3],
    [type9x3, type9x6, type6x9],
    [type6x9, type9x3, type9x6],
  ],
  format4: [
    [type9x3, type9x3, type9x3, type6x9],
    [type6x9, type9x3, type9x3, type9x3],
    [type6x9, type3x9, type3x9, type3x9],
    [type3x9, type3x9, type6x9, type3x9],
    [type3x9, type6x9, type3x9, type3x9],
    [type3x9, type3x9, type3x9, type6x9],
    [type9x6, type9x3, type3x9, type3x9],
    [type9x3, type9x6, type3x9, type3x9],
    [type3x9, type9x6, type9x3, type3x9],
    [type3x9, type9x3, type9x6, type3x9],
    [type3x9, type3x9, type9x6, type9x3],
    [type3x9, type3x9, type9x3, type9x6],
  ],
  format5: [
    [type3x9, type3x9, type3x9, type3x9, type3x9],
    [type9x3, type9x3, type9x3, type3x9, type3x9],
    [type3x9, type3x9, type9x3, type9x3, type9x3],
  ],
};

module.exports = formatVariations;
