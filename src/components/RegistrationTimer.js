import moment from "moment";
import { useEffect, useState } from "react";

const RegistrationTimer = ({ timer }) => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  const momentFromNow = (t1, t2) => {

    let output = "";
    let momentYears = Math.abs(t1.diff(t2, "years"));
    let momentMonths = Math.abs(t1.diff(t2, "months"));
    let momentDays = Math.abs(t1.diff(t2, "days"));
    let momentHours = Math.abs(t1.diff(t2, "hours"));
    let momentMinutes = Math.abs(t1.diff(t2, "minutes"));
    let momentSeconds = Math.abs(t1.diff(t2, "seconds"));

    if (momentYears) {
      output = output.concat(momentYears, "Y ");
    }

    if (momentMonths) {
      if (!momentYears) {
        output = output.concat(momentMonths, "M ");
      } else {
        output = output.concat(momentMonths % 12, "M ");
      }
    }

    if (momentDays) {
      if (!momentMonths) {
        output = output.concat(momentDays, "D ");
      } else {
        output = output.concat(momentDays % 30, "D ");
      }
    }

    if (momentHours) {
      if (!momentDays) {
        output = output.concat(momentHours, "H ");
      } else {
        output = output.concat(momentHours % 24, "H ");
      }
    }

    if (momentMinutes) {
      if (!momentHours) {
        output = output.concat(momentMinutes, "M ");
      } else {
        output = output.concat(momentMinutes % 60, "M ");
      }
    }

    if (momentSeconds) {
      if (!momentMinutes) {
        output = output.concat(momentSeconds, "S ");
      } else {
        output = output.concat(momentSeconds % 60, "S ");
      }
    }

    return output;
  }

  return (
    <>
      { moment().isBefore(moment(timer)) ? "Registration opens " : "Registration colsed at " }
      <span>
        { momentFromNow(moment(), moment(timer)) }
      </span>
    </>
  )
}

export default RegistrationTimer
