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
    <div className="flex items-center mt-1 space-x-[6px]">
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{years}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">y</span>
      </div>
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{months}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">m</span>
      </div>
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{days}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">d</span>
      </div>
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{hours}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">h</span>
      </div>
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{minutes}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">m</span>
      </div>
      <div className="flex space-x-px">
        <span className="text-sm font-satoshi text-medium text-neutral-500">{seconds}</span>
        <span className="text-sm font-satoshi text-normal text-neutral-500">s</span>
      </div>
    </div>
  );
};

export default BirthdayCounter;
