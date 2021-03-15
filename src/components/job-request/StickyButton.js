import { useHistory } from 'react-router';
import { addAnswer, takeCheckedRadioValue } from '../../helpers/jobRequest';

const StickyButton = ({
  pageNumber,
  state,
  isLastPage,
  setAnswers,
  answers,
}) => {
  const history = useHistory();

  const handleClickContinue = () => {
    const checkedRadioValue = takeCheckedRadioValue();
    addAnswer(setAnswers, checkedRadioValue);

    history.push(`/request/${Number(pageNumber) + 1}`, state);
  };

  const handleClickSendRequest = () => {
    const checkedRadioValue = document.querySelector(
      'input[type="radio"]:checked'
    )?.value;
    const detailValue = document.querySelector('textarea').value;
    answers = [...answers, detailValue];
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
