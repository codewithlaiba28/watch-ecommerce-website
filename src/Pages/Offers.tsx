import CategoryPage from '../components/CategoryPage';
import { WATCH_COLLECTION } from '../types';

const Offers = () => {
  const saleWatches = WATCH_COLLECTION.filter(w => w.onSale || w.price < 15000);

  return (
    <CategoryPage
      title="Exclusive Offers"
      categoryBanner="/images/forthpage/forthpage1.png"
      watches={saleWatches}
    />
  );
};

export default Offers;