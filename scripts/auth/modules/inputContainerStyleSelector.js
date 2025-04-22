export default function inputContainerStyleSelector(val,inputContainerElement) {
  if (val === 1) {
    inputContainerElement.classList.add('valid');
    inputContainerElement.classList.remove('inValid');
  } else {
    inputContainerElement.classList.add('inValid');
    inputContainerElement.classList.remove('valid');
  }
}
