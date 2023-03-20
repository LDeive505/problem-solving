const monthsWith30 = ['04', '06', '09', '11'];
const monthsWith31 = ['01', '03', '05', '07', '08', '10', '12'];


function dayOfProgrammer(year) {
    if(year > 1918) {
        if(isLeapYearGregorian(year)) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        }
    } else if (year < 1918) {
        if(isLeapYearJulian(year)) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        }
    } else {
        return `26.09.${year}`;
    }

}

const isLeapYearGregorian = (year) => (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
const isLeapYearJulian = (year) => year % 4 === 0;