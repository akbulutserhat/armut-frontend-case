import DiscountBanner from './DiscountBanner';
import PriceDetail from './PriceDetail';
import Header from './Header';
import { Link, useLocation } from 'react-router-dom';
import ProgressBar from './ProgressBar';

const JobRequest = () => {
  const location = useLocation();
  const { state } = location;
  if (!state)
    return (
      <div className='center'>
        <p>Please don't change params with manually</p>
        <Link className='home-page-link' to='/'>
          Go Home
        </Link>
      </div>
    );
  const { service, questions } = state;
  const { name, price, discountRateText } = service;
  return (
    <div className='job-request'>
      <Header name={name} state={state}></Header>
      <ProgressBar></ProgressBar>
      <PriceDetail price={price}></PriceDetail>
      {discountRateText && (
        <DiscountBanner discountRateText={discountRateText}></DiscountBanner>
      )}
    </div>
  );
};

export default JobRequest;
