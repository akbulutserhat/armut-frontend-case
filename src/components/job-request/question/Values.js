import ImageRadioBox from './ImageRadioBox';

const Values = ({ values }) => {
  return (
    <div className='values medium lh-18 type-5'>
      {values.map((value) => (
        <ImageRadioBox questionValue={value} key={value.id}></ImageRadioBox>
      ))}
    </div>
  );
};

export default Values;
