import styled from '@emotion/styled';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

interface fileObjType {
  fileName: string;
  binary: string;
}

interface categoryType {
  [id: number]: string;
}

const Aside: NextPage = () => {
  const [iconFile, setIconFIle] = useState<fileObjType>({
    fileName: '',
    binary: '',
  });

  const [bannerFile, setBannerFile] = useState<fileObjType>({
    fileName: '',
    binary: '',
  });

  const [category, setCategory] = useState<categoryType>({
    0: '',
  });

  const addCategoryInput = () => {
    if (Object.keys(category).length < 3) {
      const id = Math.max(...Object.keys(category).map((k) => Number(k))) + 1;

      setCategory({
        ...category,
        [id]: '',
      });
    }
  };

  const changeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCategory({
      ...category,
      [name]: value,
    });
  };

  const getIconFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: File = e.target.files[0];
      setIconFIle((pre) => ({ ...pre, fileName: file.name }));

      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        }: any = finishedEvent;

        setIconFIle((pre) => ({ ...pre, binary: result }));
      };
      await reader.readAsDataURL(file);
    }
  };

  const getBannerFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: File = e.target.files[0];
      setBannerFile((pre) => ({ ...pre, fileName: file.name }));

      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        const {
          currentTarget: { result },
        }: any = finishedEvent;

        setBannerFile((pre) => ({ ...pre, binary: result }));
      };
      await reader.readAsDataURL(file);
    }
  };

  return (
    <AsideSection>
      <Form>
        <CategoryHeadWrap>
          <FromLabel>동아리 분야</FromLabel>
          <AddCategory>
            <AddBtn onClick={addCategoryInput} />
            <Label>3개까지 입력 가능</Label>
          </AddCategory>
        </CategoryHeadWrap>
        <Categorys>
          {Object.keys(category).map((cate) => (
            <CategoryInput
              key={cate}
              name={cate}
              placeholder="Embedded"
              value={category[Number(cate)]}
              onChange={changeCategory}
            />
          ))}
        </Categorys>
      </Form>
      <Form>
        <FromLabel>facebook page URL</FromLabel>
        <FormInput placeholder="https://facebook.com" />
      </Form>
      <Form>
        <FromLabel>동아리 로고</FromLabel>
        <FileInputWrap>
          <FormInput
            placeholder="revel.png"
            readOnly
            value={iconFile.fileName}
          />
          <input
            type="file"
            id="clubIcon"
            onChange={getIconFile}
            style={{ display: 'none' }}
            accept="image/*"
          />
          <Choice htmlFor="clubIcon">파일 추가</Choice>
        </FileInputWrap>
      </Form>
      <Form>
        <FromLabel>동아리 배너</FromLabel>
        <FileInputWrap>
          <FormInput
            placeholder="revel.png"
            readOnly
            value={bannerFile.fileName}
          />
          <input
            type="file"
            id="clubBanner"
            style={{ display: 'none' }}
            onChange={getBannerFile}
            accept="image/*"
          />
          <Choice htmlFor="clubBanner">파일 추가</Choice>
        </FileInputWrap>
      </Form>
    </AsideSection>
  );
};

const CategoryHeadWrap = styled.div`
  position: relative;
`;

const Label = styled.label`
  color: #bcb5b5;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 600;
`;

const AddCategory = styled.div`
  position: absolute;
  top: 0;
  left: 90px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AddBtn = styled.button`
  background-image: url('/img/plus.svg');
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 15px;
  border: none;
  box-shadow: inset 0 0 4px #00000030;

  &:active {
    transform: scale(0.95);
  }
`;

const FileInputWrap = styled.div`
  position: relative;
`;

const Choice = styled.label`
  background-color: #87a4c5;
  font-size: 14px;
  padding: 7px 15px;
  border-radius: 5px;
  position: absolute;
  white-space: nowrap;
  top: 0%;
  color: white;
  cursor: pointer;
  right: -90px;
`;

const AsideSection = styled.aside`
  width: 30%;
  height: 85%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Form = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

const FromLabel = styled.label`
  font-size: 16px;
`;
const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid #767676;
  width: 280px;
  outline: none;
  font-size: 16px;
  padding: 0 5px 7px 5px;
  text-align: center;
`;

const CategoryInput = styled(FormInput)`
  width: 130px;
`;

const Categorys = styled.div`
  display: flex;
  gap: 10px;
`;

export default Aside;
