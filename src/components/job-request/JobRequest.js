import DiscountBanner from './DiscountBanner';
import PriceDetail from './PriceDetail';
import Header from './Header';
import { useLocation } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const JobRequest = () => {
  const location = useLocation();
  const { state } = location;
  const { service, questions } = state;
  const { name, price, discountRateText } = service;
  return (
    <div className='job-request'>
      <Header name={name}></Header>
      <ProgressBar></ProgressBar>
      <PriceDetail price={price}></PriceDetail>
      {discountRateText && (
        <DiscountBanner discountRateText={discountRateText}></DiscountBanner>
      )}
    </div>
  );
};

export default JobRequest;
