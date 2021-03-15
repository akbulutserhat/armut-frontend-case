import { validateAnswer } from './answer';

test('validate answer required', () => {
  expect(validateAnswer('', true)).toEqual({
    isValid: false,
    message: 'Bu alan zorunlu',
  });

  expect(validateAnswer('some answer', true)).toEqual({
    isValid: true,
  });

  expect(validateAnswer('some answer', false)).toEqual({
    isValid: true,
  });

  expect(validateAnswer('', false)).toEqual({
    isValid: true,
  });
});
