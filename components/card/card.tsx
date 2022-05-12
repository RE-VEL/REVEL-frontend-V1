import styled from '@emotion/styled';
import { NextPage } from 'next';
import { card } from '../../interface/card';

interface props {
  card: card;
}

const Card: NextPage<props> = ({ card }: props) => {
  const { id, clubName, tags, banner, icon } = card;
  return (
    <CardFrame>
      <Banner banner={banner}>
        {tags.map((tag) => (
          <Tag key={tag}>{`#${tag}`}</Tag>
        ))}
      </Banner>
    </CardFrame>
  );
};

const CardFrame = styled.div`
  width: 270px;
  height: 390px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

const Banner = styled.div`
  border-radius: 15px;
  width: 270px;
  height: 270px;
  background-image: url(${({ banner }: { banner: string }) => banner});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: flex-start;

  padding: 10px;
`;

const Tag = styled.p`
  margin: 0;
  background-color: #eee8;
  padding: 5px 8px;
  font-size: 16px;
  width: fit-content;
  height: fit-content;
  border-radius: 16px;
`;

export default Card;
