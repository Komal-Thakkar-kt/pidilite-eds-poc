export default function decorateCustomForm(block) {

  const formEle = document.querySelector('form');
  formEle.setAttribute('class', 'form-element');

  const personFieldWrapper = document.querySelector('.personName.field-wrapper.text-wrapper');
  const mobileFieldWrapper = document.querySelector('.mobileNumber.field-wrapper.text-wrapper');
  const pincodeFieldWrapper = document.querySelector('.pinCode.field-wrapper.text-wrapper');

  const textFieldParentWrapper = document.createElement('div');
  textFieldParentWrapper.classList.add('text-field-parent-wrapper');

  textFieldParentWrapper.appendChild(personFieldWrapper);
  textFieldParentWrapper.appendChild(mobileFieldWrapper);
  textFieldParentWrapper.appendChild(pincodeFieldWrapper);

  const checkboxWrapper = document.querySelector('.checkbox-wrapper');
  const formWrapper = document.querySelector('.form-element');
  
  formWrapper.insertBefore(textFieldParentWrapper, checkboxWrapper);

  return formWrapper;
}