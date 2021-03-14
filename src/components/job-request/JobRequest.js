import DiscountBanner from './DiscountBanner';
import PriceDetail from './PriceDetail';
import Header from './Header';
import { Link, useLocation, useParams } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Question from './question/Question';
import StickyButton from './StickyButton';

const JobRequest = () => {
  const location = useLocation();
  const params = useParams();
  const { pageNumber } = params;
  const { state } = location;
  if (!state)
    return (
      <div className='center'>
        <p>Please don't change url with manually</p>
        <Link className='home-page-link' to='/'>
          Go Home
        </Link>
      </div>
    );
  console.log(pageNumber, state);
  const { service, questions } = state;
  const { name, price, discountRateText } = service;
  const question = questions.filter(
    (question) => question.pageNumber == pageNumber
  )[0];
  console.log(question);
  return (
    <div className='job-request'>
      <Header name={name} state={state}></Header>
      <ProgressBar></ProgressBar>
      <PriceDetail price={price}></PriceDetail>
      {discountRateText && pageNumber == 1 && (
        <DiscountBanner discountRateText={discountRateText}></DiscountBanner>
      )}
      <Question question={question}></Question>
      <StickyButton pageNumber={pageNumber} state={state}></StickyButton>
    </div>
  );
};

export default JobRequest;
