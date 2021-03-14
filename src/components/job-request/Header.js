import { useHistory, useParams } from 'react-router';
import closeIcon from '../../assets/Close.png';
import prevIcon from '../../assets/Left.png';

const Header = ({ name, state }) => {
  const history = useHistory();
  const params = useParams();

  const { pageNumber } = params;

  const handleCloseIconClicked = () => {
    history.push('/');
  };

  const handlePrevIconClicked = () => {
    history.push(`/request/${Number(pageNumber) - 1}`, state);
  };

  return (
    <div className='header'>
      <p className='small lh-18'>{name}</p>
      <div className='close-icon' onClick={handleCloseIconClicked}>
        <img src={closeIcon}></img>
      </div>
      {pageNumber > 1 && (
        <div className='prev-icon' onClick={handlePrevIconClicked}>
          <img src={prevIcon}></img>
        </div>
      )}
    </div>
  );
};

export default Header;
