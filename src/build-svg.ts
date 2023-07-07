export const buildSvg = (message: string) => {
  const logLineHt = 48*1.45;
  let logHt = logLineHt;
  const logWid = window.innerWidth * 1.25;
  let msgArr = message.split("");
  const wordsPerLine = Math.floor(logWid/26);
  if(msgArr.length > wordsPerLine) {
    logHt*=Math.ceil(msgArr.length/wordsPerLine);
    msgArr = msgArr.map((msg:any,i:any) => {
      return (
        i===0
          ?"<tspan x='0'>"+msg
          :i%wordsPerLine===0 
            ?msg+"</tspan><tspan x='0' dy='1.2em'>"
            :msg
      )
    })
    msgArr.push("</tspan>");
  }
  const bg = `<svg xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes bgflash {
        0% {fill:#ff3ac6;}
        50% {fill:#009b00;}
      }
      @keyframes textflash {
        0% {fill:#5fa41c;}
        50% {fill:#ff1a00;}
      }
      .background {
        fill:#5fa41c;
        font-size:3rem;
        height: ${logHt}px;
        width: ${logWid*1.075}px;
        animation: 0.25s bgflash infinite step-end;
      }
      .text {
        fill:#5fa41c;
        font-size:3rem;
        width: ${logWid}px;
        animation: 0.25s textflash infinite step-end;     
      }
    </style>
    <g>
      <rect x="0" y="0" class="background"></rect>
      <text x="0" y="50" font-family="Verdana" font-size="35" class="text">${msgArr.join("")}</text>
    </g>
  </svg>`
  return {url: `data:image/svg+xml;base64,${btoa(bg)}`, width: logHt, height: logWid}
}