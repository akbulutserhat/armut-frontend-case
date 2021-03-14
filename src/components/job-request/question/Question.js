import Values from './Values';

const Question = ({ question }) => {
  const { typeId, label, values, placeHolder } = question;
  return (
    <div className='question'>
      <div className='question-label'>
        <h1>{label}</h1>
      </div>
      <Values
        values={values}
        typeId={typeId}
        placeHolder={placeHolder}></Values>
    </div>
  );
};

export default Question;
