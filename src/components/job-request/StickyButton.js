import { useHistory } from 'react-router';
import { addAnswer, takeAnswerValue } from '../../helpers/answer';

const StickyButton = ({
  pageNumber,
  state,
  isLastPage,
  setAnswers,
  answers,
  questionType,
}) => {
  const history = useHistory();

  const handleClickContinue = () => {
    const answer = takeAnswerValue(questionType);
    addAnswer(setAnswers, answer);
    history.push(`/request/${Number(pageNumber) + 1}`, state);
  };

  const handleClickSendRequest = () => {
    const answer = takeAnswerValue(questionType);
    answers = [...answers, answer];
    history.push('/success', { answers });
  };
  return (
    <div className='sticky-button-section'>
      {!isLastPage && (
        <button className='button' onClick={handleClickContinue}>
          <label className='large lh-20'>DEVAM</label>
        </button>
      )}
      {isLastPage && (
        <button className='button' onClick={handleClickSendRequest}>
          <label className='large lh-20'>TALEP GÖNDER</label>
        </button>
      )}
    </div>
  );
};

export default StickyButton;
