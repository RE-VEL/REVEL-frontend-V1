import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import { applicantType } from '../../../interface/applicant';
import { interTimeType } from '../../../interface/interTime';
import AppliedForClubView from './appliedForClubView';

const AppliedForClub: NextPage<applicantType> = ({
  id,
  name,
  interviewDay,
  interviewCompleted,
}: applicantType) => {
  const date = new Date();
  const [interTime, setInterTime] = useState<interTimeType>({
    month: date.getMonth() + 1,
    day: date.getDay(),
    hour: date.getHours(),
    min: date.getMinutes(),
  });

  const [showInterInput, setShowInterInput] = useState<boolean>(false);

  const changeShowInterInputState = (): void => {
    setShowInterInput((pre) => !pre);
  };

  const submitInterTime = (): void => {
    changeShowInterInputState();
  };

  const changeInterTime = (name: string, value: number) => {
    // setInterTime({
    //   ...interTime,
    //   [name]: value,
    // });
  };

  const props = {
    id,
    name,
    interviewDay,
    interviewCompleted,
    interTime,
    changeInterTime,
    showInterInput,
    changeShowInterInputState,
    submitInterTime,
  };
  return <AppliedForClubView {...props}></AppliedForClubView>;
};

export default AppliedForClub;
