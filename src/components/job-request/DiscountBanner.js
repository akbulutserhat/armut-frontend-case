const DiscountBanner = ({ discountRateText }) => {
  return (
    <div className='discount-banner'>
      <p className='medium lh-22'>{discountRateText}</p>
    </div>
  );
};

export default DiscountBanner;
