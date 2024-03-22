const whoamiObj = {
  "message": [
    [
      "I am that I am",
    ],
    [
      "here today, gone tomorrow",
    ],
  ],
}

export const createWhoami = (): string[] => {
  const whoami: string[] = [];
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
