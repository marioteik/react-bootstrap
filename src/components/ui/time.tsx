import { useEffect, useState } from "react";

export const Time = () => {
  const [time, setTime] = useState(
    new Date()
      .toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      })
      .replace("AM", "")
      .replace("PM", "")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date()
          .toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          })
          .replace("AM", "")
          .replace("PM", "")
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};
