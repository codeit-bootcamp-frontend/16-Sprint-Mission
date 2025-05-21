export default function inputValidator(value, validateCase) {
  switch (validateCase) {
    case 'pw':
      if (value === '') {
        return { state: false, message: '비밀번호를 입력해주세요.' };
      } else {
        if (value.length < 8) {
          return { state: false, message: '비밀번호를 8자 이상 입력해주세요.' }
        } else {
          return { state: true, message: '' };
        }
      }
    case 'email':
      const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (value === "") {
        return { state: false, message: '이메일을 입력해주세요.' };
      } else {
        if (!regex.test(value)) {
          return { state: false, message: '잘못된 이메일 형식입니다.' };
        } else {
          return { state: true, message: '' };
        }
      }
    case 'nickname':
      if (value === '') {
        return { state: false, message: '닉네임을 입력해주세요.' };
      } else {
        return { state: true, message: '' };
      }
  }
}
