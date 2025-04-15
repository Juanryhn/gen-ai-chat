/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'react-syntax-highlighter' {
  import { ComponentType } from 'react';

  export const Light: ComponentType<any>;
  export const Prism: ComponentType<any>;
  export const registerLanguage: (lang: string, def: any) => void;
}

declare module 'react-syntax-highlighter/dist/esm/styles/prism';
declare module 'react-syntax-highlighter/dist/esm/languages/prism/*';
