import styled from '@emotion/styled';
import { NextPage } from 'next';
import { card } from '../../interface/card';

interface props {
  card: card;
}

const Card: NextPage<props> = ({ card }: props) => {
  const { clubName, tags, banner, icon } = card;
  return (
    <CardFrame>
      <Banner banner={banner}>
        {tags.map((tag) => (
          <Tag key={tag}>{`#${tag}`}</Tag>
        ))}
      </Banner>
      <CardInfo>
        <ClubIcon icon={icon} />
        <ClubName>{clubName}</ClubName>
        <SeeMore>SEE MORE +</SeeMore>
      </CardInfo>
    </CardFrame>
  );
};

const CardFrame = styled.div`
  width: 270px;
  height: 400px;
  border-radius: 15px;
  margin: 0 3px;
  background-color: white;
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

const CardInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClubIcon = styled.div`
  background-image: url(${({ icon }: { icon: string }) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 90px;
  height: 90px;
  border: white 1px solid;
  border-radius: 50%;
  margin-top: -45px;
`;

const ClubName = styled.p`
  color: #0a2d5e;
  margin: 0;
  font-size: 23px;
`;

const SeeMore = styled.button`
  color: white;
  background-color: #b2b2b2;
  border: none;
  font-size: 16px;
  padding: 8px 30px;
  border-radius: 20px;
  margin-top: 10px;

  cursor: pointer;
`;

export default Card;
