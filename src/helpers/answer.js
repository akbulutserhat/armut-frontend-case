export const addAnswer = (setAnswers, answerValue) => {
  setAnswers((prevAnswers) => [...prevAnswers, answerValue]);
};

const takeCheckedRadioValue = () => {
  return document.querySelector('input[type="radio"]:checked')
    ? document.querySelector('input[type="radio"]:checked').value
    : null;
};

const takeDetailValue = () => {
  return document.querySelector('textarea').value
    ? document.querySelector('textarea').value
    : null;
};

export const takeAnswerValue = (questionType) => {
  switch (questionType) {
    case 5:
    case 6:
      return takeCheckedRadioValue();
    case 8:
      return takeDetailValue();
    default:
      return null;
  }
};
