const StickyButton = ({
  handleClickContinue,
  handleClickSendRequest,
  isLastPage,
}) => {
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
