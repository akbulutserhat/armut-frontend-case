import closeIcon from '../../assets/Close.png';
import prevIcon from '../../assets/Left.png';

const Header = ({ name }) => {
  return (
    <div className='header'>
      <p className='small lh-18'>{name}</p>
      <div className='close-icon'>
        <img src={closeIcon}></img>
      </div>
      <div className='prev-icon'>
        <img src={prevIcon}></img>
      </div>
    </div>
  );
};

export default Header;
