import styled from '@emotion/styled';

const MemberList = () => {
  const members = [];
  return (
    <InputForm>
      <FormLabel>
        구성원
        <AddMember></AddMember>
      </FormLabel>
      <Memebrs>
        <FormInput placeholder="2502 홍길순" />

        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
        <FormInput placeholder="2502 홍길순" />
      </Memebrs>
    </InputForm>
  );
};

const AddMember = styled.button`
  position: absolute;
  background-color: white;
  background-image: url('/img/plus.svg');
  border-radius: 50%;
  box-shadow: 0 0 4px #00000040;
  width: 20px;
  height: 20px;
  top: 50%;
  right: 30px;
  transform: translate(0, -50%);
  border: none;
  outline: none;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding: 5px;
  cursor: pointer;
`;

const Memebrs = styled.div`
  display: flex;
  width: 45vw;
  /* background-color: red; */
  gap: 8px 20px;
  flex-wrap: wrap;
`;

const InputForm = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormLabel = styled.label`
  width: 10vw;
  text-align: center;
  font-size: 16px;
  position: relative;
`;

const FormInput = styled.input`
  margin: 0;
  width: 10vw;
  text-align: center;
  font-size: 16px;
  border: none;
  border-bottom: 1px gray solid;
  padding-bottom: 5px;
  outline: none;
`;

export default MemberList;
