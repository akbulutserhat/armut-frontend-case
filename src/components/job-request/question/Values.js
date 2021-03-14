import ImageRadioBox from './ImageRadioBox';
import RadioBox from './RadioBox';

const Values = ({ values, typeId, placeHolder }) => {
  let valuesHTML;
  switch (typeId) {
    case 5:
      valuesHTML = (
        <div className='values medium lh-18 type-5'>
          {values.map((value) => (
            <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
          ))}
        </div>
      );
      break;
    case 6:
      valuesHTML = (
        <div className='values medium lh-18 type-6'>
          {values.map((value) => (
            <RadioBox value={value.value} key={value.id}></RadioBox>
          ))}
        </div>
      );
      break;
    case 8:
      valuesHTML = (
        <div className='values medium lh-22 type-8'>
          <textarea placeholder={placeHolder}></textarea>
        </div>
      );
      break;
    default:
      valuesHTML = <div>Default</div>;
  }
  return <>{valuesHTML}</>;
};

export default Values;
