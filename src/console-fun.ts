import { buildSvg } from "./build-svg";

const cl : (arg0: string, arg1: string) => void = console.log;
console.log = (message: string) => {
  const { url, width, height } : {
    url: string, width: number, height: number
  } = buildSvg(message);
  cl(
    '%c ',
    `background-image: url(${ url });
      padding-top: ${ width }px;
      padding-left: ${ height *1.075 }px;`
  );
}