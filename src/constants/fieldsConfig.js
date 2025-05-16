export const FIELDS_CONFIG = {
  email: {
    id: 'email',
    labelText: '이메일',
    placeholder: '이메일을 입력해주세요',
    ariaLabel: '이메일 입력 칸',
    type: 'email',
    autoComplete: 'email',
  },
  nickname: {
    id: 'nickname',
    labelText: '닉네임',
    placeholder: '닉네임을 입력해주세요',
    ariaLabel: '닉네임 입력 칸',
    type: 'text',
    autoComplete: 'on',
  },
  password: {
    id: 'password',
    labelText: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
    ariaLabel: '비밀번호 입력 칸',
    type: 'password',
    autoComplete: 'current-password',
  },
  passwordVerify: {
    id: 'passwordVerify',
    labelText: '비밀번호 확인',
    placeholder: '비밀번호를 다시 한 번 입력해주세요',
    ariaLabel: '비밀번호 확인 입력 칸',
    type: 'password',
    autoComplete: 'new-password',
  },
};
