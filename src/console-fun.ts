const unfunLog: (arg0: string, arg1: string) => void = console.log;
console.log = (message: string): void => {
  let phase: number = 0;
  setInterval(() => {
    console.clear();
    unfunLog(`%c ${message}`,
      phase++%2
        ?'font-size:3rem;background:#ff3ac6;color:#5fa41c;'
        :'font-size:3rem;background:#009b00;color:#ff1a00;'
      )
  },100);
};