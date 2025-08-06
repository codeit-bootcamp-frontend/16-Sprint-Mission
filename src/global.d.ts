declare module '*.png';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.jsx' {
  import * as React from 'react';
  const component: React.FC<any>;
  export default component;
}
