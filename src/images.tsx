import {getRandomItem} from './utils';

const images: Object = {
  images9x9: [
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche1.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche2.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche4.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche5.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche6.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche7.png'),
    require('../src/res/images/9x9/GAYA-ISOTYPES_Zeichenfläche8.png'),
  ],
  images6x9: [
    require('../src/res/images/6x9/GAYA-ISOTYPES-17.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-18.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-19.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-20.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-22.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-23.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-24.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-25.png'),
    require('../src/res/images/6x9/GAYA-ISOTYPES-26.png'),
  ],
  images3x9: [
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 2.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 3.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 4.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 5.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 6.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 7.png'),
    require('../src/res/images/3x9/Gaya_Isotype-TYPO_Zeichenfläche 1 Kopie 8.png'),
  ],
  images9x3: [
    require('../src/res/images/9x3/GAYA-ISOTYPES-38.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-39.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-40.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-41.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-54.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-55.png'),
    require('../src/res/images/9x3/GAYA-ISOTYPES-56.png'),
  ],
  images9x6: [
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
    require('../src/res/images/9x6/GAYA-ISOTYPES-34.png'),
  ],
};

function getRandomImageByFormat(format: string) {
  const imageList: Array<Object> = images[`images${format}`];
  console.log('getRandomImagesByFormat: ' + imageList.length);
  return getRandomItem(imageList);
}

export {getRandomImageByFormat};
