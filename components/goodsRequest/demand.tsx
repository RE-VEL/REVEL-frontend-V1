import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import DemandView from './demandView';

const Demand: NextPage = () => {
  const [count, setCount] = useState<number>(1);
  const onlyNumberInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const newCount = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '')
      .replace(/^(0+)/, '');

    console.log(newCount || 0);
    setCount(parseInt(newCount));
    console.log('count : ' + count);
  };

  const props = {
    count,
    onlyNumberInput,
  };
  return <DemandView {...props} />;
};

export default Demand;
