import React, {FC} from 'react';
import {IQuality} from '../types/types';

export interface QualitysProps {
  qualityes: IQuality[];
}

const Qualitys: FC<QualitysProps> = ({qualityes}) => {
  return (
    <>
      {qualityes.map((e) => (
        <span key={e._id} className={'badge m-2 bg-' + e.color}>
          {e.name}
        </span>
      ))}
    </>
  );
};
export default Qualitys;
