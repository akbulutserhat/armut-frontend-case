export const checkIsLastPage = (pageNumber, length) => {
  return pageNumber == length;
};

export const calculateWidthOfProgress = (pageNumber, length) => {
  return Math.floor((Number(pageNumber) / length) * 100);
};

export const addAnswer = (setAnswers, answerValue) => {
  setAnswers((prevAnswers) => [...prevAnswers, answerValue]);
};

export const takeCheckedRadioValue = () => {
  return document.querySelector('input[type="radio"]:checked')
    ? document.querySelector('input[type="radio"]:checked').value
    : null;
};

export const takeDetailValue = () => {
  return document.querySelector('textarea').value
    ? document.querySelector('textarea').value
    : null;
};
