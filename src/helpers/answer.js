export const addAnswer = (setAnswers, label, answer) => {
  setAnswers((prevAnswers) => [...prevAnswers, { question: label, answer }]);
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

export const validateAnswer = (answer, required) => {
  if (required && !answer) {
    return { isValid: false, message: 'Bu alan zorunlu' };
  }
  if (answer && detectMeaninglessAnswer(answer))
    return {
      isValid: false,
      message: `"${answer}" bu açıklama hizmet verenlerin ilgisini çekmeyecektir. Bu işi gerçekten yaptırmak istiyorsan daha ciddi ve türkçe kurallarına uygun yazmalısın`,
    };

  return { isValid: true };
};

// Bu kontrol çok riskli
// normalde natural language processing ya da belirli cümle kalıpları ile çalışmak lazım
export const detectMeaninglessAnswer = (answer) => {
  // aynı harf 3 veya daha fazla tekrar ederse ['aaa','bbb','   ','aaaaaa' ...]
  // 2'li harf grupları 3 veya daha fazla tekrar ederse ['ababab','mamama','asasasas' ...]
  // [aeiıoöuüç,.\s] dışında kalan harfler 3 veya daha fazla tekrar ederse ['sdf','mlk' ...]
  const regex = /(.{1,2})\1{2,}|(...+)\2{1,}|[^aeiıoöuüç,.\s]{3,}/gi;
  // Yukarıda ki regex'i içeren bir cevabın türkçe açısından anlamsız bir cümle olma ihtimali yüksek.

  return regex.test(answer);
};
