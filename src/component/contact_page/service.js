export const formValidation = (formData) => {
  let isPass = true;
  let failValue = [];

  Object.entries(formData).forEach(([key, val]) => {
    if (val === '' || val === false) {
      failValue.push(key);
      isPass = false;
    }
  });

  return isPass === true ? ['success'] : [isPass, failValue];
};
