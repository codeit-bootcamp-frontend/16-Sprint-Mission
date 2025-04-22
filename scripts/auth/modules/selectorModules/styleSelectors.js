export function inputContainerStyleSelector(val,inputContainerElement) {
  if (val === 1) {
    inputContainerElement.classList.add('valid');
    inputContainerElement.classList.remove('inValid');
  } else {
    inputContainerElement.classList.add('inValid');
    inputContainerElement.classList.remove('valid');
  }
}

export function inputStatusStyleSelector(val,inputStatusElement){
  if (val === 1) {
    inputStatusElement.classList.add('inVisible');
  }
  else if (val <= 0){
    inputStatusElement.classList.remove('inVisible');
  } 
}
