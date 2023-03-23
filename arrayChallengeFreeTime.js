// =================== PROBLEM DESCRIPTION ===================
/*
Problem Name: Most Free Time
Can be Find in: https://coderbyte.com/
Coderbyte Difficulty: Medium
My Difficulty: A(Medium)
Ps: it's a challenge from a selection process of a company, but to have access
to the problem outside the process it is necessary to pay the Coderbyte Subscription.
*/
// ===========================================================


const arrayChallenge = (strArray) => {
  const schedule = strArray.map((str) => str.split('-'));
  let morning = []
  let afternoon = []
  schedule.forEach((time) => {
    if (time[0].includes('AM'))
      morning.push(time);
    else
      afternoon.push(time);
  });

  morning = sortSchedule(morning);
  afternoon = sortSchedule(afternoon);
  const sortedSchedule = morning.concat(afternoon).map(([st,ed]) => [st.replace(/AM|PM/g, ''), ed.replace(/AM|PM/g, '')]);
  let maxFreeTime = '00:00';
  const len = sortedSchedule.length;
  console.log(sortedSchedule);
  for (let i = 0 ; i < len-1 ; i+=1) {
    const freeTime = calculateHoursDiff(sortedSchedule[i], sortedSchedule[i+1]);
    if (freeTime > maxFreeTime)
      maxFreeTime = freeTime;
  }

  return maxFreeTime;
};

const sortSchedule = (arr) => {
  return arr.sort((a,b) => {
    let hourA = a[0].split(':')[0];
    let hourB = b[0].split(':')[0];
    hourA = (hourA === '12') ? '00' : hourA;
    hourB = (hourB === '12') ? '00' : hourB;
    if (hourA < hourB)
      return -1;

    return a - b;
  });
};

const calculateHoursDiff = (time1, time2) => {
  const end1 = time1[1]
  const start2 = time2[0]
  const [endHour1, endMin1] = end1.split(':').map((num) => Number(num));
  const [startHour2, startMin2] = start2.split(':').map((num) => Number(num));

  let hourDiff = startHour2 - endHour1;
  let minDiff = Math.abs(startMin2 - endMin1);
  hourDiff = hourDiff < 10 ? `0${hourDiff}` : hourDiff;
  minDiff = minDiff < 10 ? `0${minDiff}` : minDiff;
  return `${hourDiff}:${minDiff}`;
}

// ============================== TESTS ==============================

const arr = ['12:15PM-02:00PM', '09:00AM-10:00AM', '10:30AM-12:00PM'];
const arr2 = ['12:15PM-02:00PM', '09:00AM-12:11PM', '02:02PM-04:00PM'];

console.log(arrayChallenge(arr2));