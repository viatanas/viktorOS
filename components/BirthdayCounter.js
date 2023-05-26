import { useEffect, useState } from "react";
import moment from "moment";

const birthDate = moment("1996-09-30");

const BirthdayCounter = () => {
  const [duration, setDuration] = useState(moment.duration());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(now.diff(birthDate));
      setDuration(duration);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [birthDate]);

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  return (
    <div className="flex items-center mt-1 space-x-[6px] text-xs lg:text-sm font-satoshi text-normal text-neutral-500">
      <div className="flex space-x-px">
        <span>{years}</span>
        <span>y</span>
      </div>
      <div className="flex space-x-px">
        <span>{months}</span>
        <span>m</span>
      </div>
      <div className="flex space-x-px">
        <span>{days}</span>
        <span>d</span>
      </div>
      <div className="flex space-x-px">
        <span>{hours}</span>
        <span>h</span>
      </div>
      <div className="flex space-x-px">
        <span>{minutes}</span>
        <span>m</span>
      </div>
      <div className="flex space-x-px">
        <span>{seconds}</span>
        <span>s</span>
      </div>
    </div>
  );
};

export default BirthdayCounter;
