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

  whoamiObj.message[r].forEach((ele) => {
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
