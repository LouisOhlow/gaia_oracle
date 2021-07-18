import React from 'react';
import {Image} from 'react-native';

export type Props = {
  image: Object;
  type: string;
};

interface styleByType {
  [key: string]: Object;
}

const FormattedImage: React.FC<Props> = ({image, type}) => {
  const style = styleByType[type];
  return <Image style={style} source={image} />;
};

const styleByType: styleByType = {
  type9x9: {
    height: '60%',
    width: '100%',
  },
  type6x9: {
    height: '40%',
    width: '100%',
  },
  type9x3: {
    height: '100%',
    width: '20%',
  },
  type9x6: {
    height: '100%',
    width: '40%',
  },
  type3x9: {
    height: '20%',
    width: '100%',
  },
};

export default FormattedImage;
