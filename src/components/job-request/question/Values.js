import ImageRadioBox from './ImageRadioBox';
import RadioBox from './RadioBox';

const Values = ({ values, typeId, placeHolder, validate }) => {
  let valuesHTML;
  switch (typeId) {
    case 5:
      valuesHTML = (
        <div className='medium lh-18 type-5'>
          {values.map((value) => (
            <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
          ))}
        </div>
      );
      break;
    case 6:
      valuesHTML = (
        <div className='medium lh-18 type-6'>
          {values.map((value) => (
            <RadioBox value={value.value} key={value.id}></RadioBox>
          ))}
        </div>
      );
      break;
    case 8:
      valuesHTML = (
        <div className='medium lh-22 type-8'>
          <textarea placeholder={placeHolder} name='detail'></textarea>
        </div>
      );
      break;
    default:
      valuesHTML = <div>There is no this type id</div>;
  }
  return (
    <div className='values'>
      {valuesHTML}
      {!validate.isValid && <p className='error-text'>{validate.message}</p>}
    </div>
  );
};

export default Values;
