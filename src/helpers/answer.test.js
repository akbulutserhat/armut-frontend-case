import { validateAnswer, detectMeaninglessAnswer } from './answer';

test('validate answer required', () => {
  expect(validateAnswer('', true)).toEqual({
    isValid: false,
    message: 'Bu alan zorunlu',
  });

  expect(validateAnswer('deneme', true)).toEqual({
    isValid: true,
  });

  expect(validateAnswer('deneme', false)).toEqual({
    isValid: true,
  });

  expect(validateAnswer('', false)).toEqual({
    isValid: true,
  });
});

test('detect meaningless answer', () => {
  expect(detectMeaninglessAnswer('asdasd ase asdsa ead')).toBeTruthy();

  expect(
    detectMeaninglessAnswer(
      'Evimizin bahçe kapısını değiştirmek istiyoruz. Eskidiği için artık paslandı ve kırıklar oluştu'
    )
  ).toBeFalsy();

  expect('selaaaam, işin hızlı yapılması çoooookkk önemli').toBeTruthy();
});
