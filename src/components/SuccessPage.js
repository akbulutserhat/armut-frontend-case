import success from '../assets/success.png';

const SuccessPage = () => {
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
