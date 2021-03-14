const ProgressBar = ({ widthOfProgress }) => {
  return (
    <div
      className='progress-bar'
      style={{ width: widthOfProgress + '%' }}></div>
  );
};

export default ProgressBar;
