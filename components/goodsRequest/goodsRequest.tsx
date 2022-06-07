import { useState } from 'react';
import { articleType } from '../../interface/goodsRequest/article';
import GoodsRequestView from './goodsRequestView';

const GoodsRequest = () => {
  const [articles, setArticles] = useState<articleType[]>([
    {
      id: 0,
      name: '',
      price: 0,
      shippingFee: 0,
      quantity: 0,
      reason: '',
    },
    {
      id: 1,
      name: '',
      price: 0,
      shippingFee: 0,
      quantity: 0,
      reason: '',
    },
  ]);

  const addArticle = (): void => {
    const id = articles[articles.length - 1].id + 1;
    setArticles([
      ...articles,
      {
        id,
        name: '',
        price: 0,
        shippingFee: 0,
        quantity: 0,
        reason: '',
      },
    ]);
  };

  const props = {
    articles,
    addArticle,
  };

  return <GoodsRequestView {...props} />;
};

export default GoodsRequest;
