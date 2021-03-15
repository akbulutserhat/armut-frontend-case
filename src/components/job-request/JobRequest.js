import DiscountBanner from './DiscountBanner';
import PriceDetail from './PriceDetail';
import Header from './Header';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Question from './question/Question';
import StickyButton from './StickyButton';
import {
  checkIsLastPage,
  calculateWidthOfProgress,
} from '../../helpers/jobRequest';
import { useState } from 'react';

const JobRequest = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const { pageNumber } = params;
  const { state } = location;

  const [answers, setAnswers] = useState([]);

  if (!state) history.goBack(); // If url was changed manually.

  const { service, questions } = state;
  const { name, price, discountRateText } = service;

  const question = questions.filter(
    (question) => question.pageNumber == pageNumber
  )[0];

  const isLastPage = checkIsLastPage(pageNumber, questions.length);

  const widthOfProgress = calculateWidthOfProgress(
    pageNumber,
    questions.length
  );

  console.log(answers);

  return (
    <>
      <div className='job-request'>
        <Header
          name={name}
          state={state}
          widthOfProgress={widthOfProgress}></Header>
        <ProgressBar widthOfProgress={widthOfProgress}></ProgressBar>
        <PriceDetail price={price}></PriceDetail>
        {discountRateText && pageNumber == 1 && (
          <DiscountBanner discountRateText={discountRateText}></DiscountBanner>
        )}
        <Question question={question}></Question>
      </div>
      <StickyButton
        answers={answers}
        setAnswers={setAnswers}
        pageNumber={pageNumber}
        state={state}
        isLastPage={isLastPage}></StickyButton>
    </>
  );
};

export default JobRequest;
