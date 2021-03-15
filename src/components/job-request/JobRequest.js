import DiscountBanner from './DiscountBanner';
import PriceDetail from './PriceDetail';
import Header from './Header';
import { useLocation, useParams, useHistory } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Question from './question/Question';
import StickyButton from './StickyButton';
import { checkIsLastPage, calculateWidthOfProgress } from '../../helpers/page';
import {
  addAnswer,
  takeAnswerValue,
  validateAnswer,
} from '../../helpers/answer';
import { useState, useEffect } from 'react';

const JobRequest = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const { pageNumber } = params;
  const { state } = location;

  let [answers, setAnswers] = useState([]);
  const [validate, setValidate] = useState({ isValid: false, message: '' });
  let answer;

  // true = continue button, false = send request button
  let [isContinueButton, setIsContinueButton] = useState(true);

  if (!state) history.goBack(); // If url is changed manually.

  const { service, questions } = state;
  const { name, price, discountRateText } = service;

  const question = questions.filter(
    (question) => question.pageNumber == pageNumber
  )[0];

  const { typeId, label, required } = question;

  const isLastPage = checkIsLastPage(pageNumber, questions.length);

  const widthOfProgress = calculateWidthOfProgress(
    pageNumber,
    questions.length
  );

  useEffect(() => {
    if (validate.isValid) {
      console.log(isContinueButton);
      answer = takeAnswerValue(typeId);
      if (isContinueButton) {
        addAnswer(setAnswers, label, answer);
        history.push(`/request/${Number(pageNumber) + 1}`, state);
      } else {
        answers = [...answers, { question: label, answer }];
        history.push('/success', { answers });
      }
    }
  }, [validate]);

  const validationProcess = () => {
    answer = takeAnswerValue(typeId);
    const { isValid, message } = validateAnswer(answer, required);
    setValidate({ ...validate, isValid, message });
  };

  const handleClickContinue = () => {
    setIsContinueButton(true);
    validationProcess();
  };

  const handleClickSendRequest = () => {
    setIsContinueButton(false);
    validationProcess();
  };

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
        <Question question={question} validate={validate}></Question>
      </div>
      <StickyButton
        handleClickContinue={handleClickContinue}
        handleClickSendRequest={handleClickSendRequest}
        isLastPage={isLastPage}></StickyButton>
    </>
  );
};

export default JobRequest;
