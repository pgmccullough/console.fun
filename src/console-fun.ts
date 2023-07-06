const unfunLog: (arg0: string, arg1: string) => void = console.log;
console.log = (message: string): void => {
  let phase: number = 0;
  setInterval(() => {
    console.clear();
    unfunLog(`%c ${message}`,
      phase++%2
        ?'font-size: 3rem; background: #222; color: #bada55; margin: 0;'
        :'font-size: 3rem; background: red; color: #fff; margin: 0;'
      )
  },100);
};