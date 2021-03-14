import { useHistory } from 'react-router';

const StickyButton = ({ pageNumber, state }) => {
  const history = useHistory();
  const handleClickContinue = () => {
    history.push(`/request/${Number(pageNumber) + 1}`, state);
  };
  return (
    <div className='sticky-button-section'>
      <button className='button' onClick={handleClickContinue}>
        <label className='large lh-20'>DEVAM</label>
      </button>
    </div>
  );
};

export default StickyButton;
