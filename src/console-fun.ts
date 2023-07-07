const unfunLog: (arg0: string, arg1: string) => void = console.log;
const entries: string[] = []
console.log = (message: string): void => {
  !entries.includes(message) && entries.push(message);
  let phase: number = 0;
  setInterval(() => {
    console.clear();
    entries.forEach((msg: string) => 
      unfunLog(`%c ${msg} `,
        phase++%2
          ?'font-size:3rem;background:#ff3ac6;color:#5fa41c;'
          :'font-size:3rem;background:#009b00;color:#ff1a00;'
      )
    )
  },100);
};