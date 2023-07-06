const boringLog = console.log;
console.log = (message) => {
  let phase = 0;
  setInterval(() => {
    console.clear();
    boringLog(`%c ${message}`,
      phase++%2
        ?'font-size: 3rem; background: #222; color: #bada55; margin: 0;'
        :'font-size: 3rem; background: red; color: #fff; margin: 0;'
      )
  },100);
};