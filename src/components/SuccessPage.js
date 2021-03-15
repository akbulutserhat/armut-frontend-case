import success from '../assets/success.png';
import { useLocation } from 'react-router';

const SuccessPage = () => {
  const location = useLocation();
  const { answers } = location.state;
  console.log(answers);
  return (
    <div className='success-page'>
      <div className='image-text-section'>
        <img src={success}></img>
        <h1>Talebini Aldık!</h1>
      </div>
    </div>
  );
};

export default SuccessPage;
