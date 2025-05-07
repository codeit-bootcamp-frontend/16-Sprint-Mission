// src/js/utils/Redirector.js

/**
 * 지정한 경로로 페이지를 이동합니다.
 * @param {string} path
 */
export function redirectTo(path) {
  window.location.href = path;
}
