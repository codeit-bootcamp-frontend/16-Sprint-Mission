export default function debounce(callback, limit = 100) {
  let timeout; // ← 이 변수는 debounce 함수의 '스코프(클로저)'에 저장됨

  return function (...args) {
    clearTimeout(timeout); // ← 클로저에 저장된 timeout 값을 사용
    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, limit);
  };
}
