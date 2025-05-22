// /vite-env.d.ts
// scss/css 모듈을 import 할 수 있도록 선언
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
