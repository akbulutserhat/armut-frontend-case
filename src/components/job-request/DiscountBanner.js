const DiscountBanner = ({ discountRateText }) => {
  const percentNumberPattern = /%\d+/;
  const percentNumber = discountRateText.match(percentNumberPattern)[0];
  const emphasizedPercentNumber = (
    <span className='emphasized-text'>{percentNumber}</span>
  );
  const withoutPercentNumber = discountRateText.split(percentNumber);
  const modifiedText = [
    withoutPercentNumber[0],
    emphasizedPercentNumber,
    withoutPercentNumber[1],
  ].join('');

  console.log(modifiedText);
  return (
    <div className='discount-banner'>
      <p className='medium lh-22'>{discountRateText}</p>
    </div>
  );
};

export default DiscountBanner;
