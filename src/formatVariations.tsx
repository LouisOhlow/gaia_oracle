const type9x9 = {
  height: '60%',
  width: '100%',
  format: '9x9',
};

const type6x9 = {
  height: '40%',
  width: '100%',
  format: '6x9',
};

const type9x3 = {
  height: '100%',
  width: '33%',
  format: '9x3',
};

const type9x6 = {
  height: '100%',
  width: '66%',
  format: '9x6',
};
const type3x9 = {
  height: '20%',
  width: '100%',
  format: '3x9',
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

const allFormats = [
  ...formatVariations.format2,
  ...formatVariations.format3,
  ...formatVariations.format4,
  ...formatVariations.format5,
];

export {allFormats};
