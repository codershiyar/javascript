var date = new Date();
var time = document.getElementById("time");
time.innerHTML = date.getDay().toLocaleString('ar-IQ');

// Method	Description
// getFullYear()	Get the year as a four digit number (yyyy)
// getMonth()	Get the month as a number (0-11)
// getDate()	Get the day as a number (1-31)
// getHours()	Get the hour (0-23)
// getMinutes()	Get the minute (0-59)
// getSeconds()	Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	Get the time (milliseconds since January 1, 1970)
// getDay()	Get the weekday as a number (0-6)
// Date.now()	Get the time. ECMAScript 5.

// getUTCDate()	Same as getDate(), but returns the UTC date
// getUTCDay()	Same as getDay(), but returns the UTC day
// getUTCFullYear()	Same as getFullYear(), but returns the UTC year
// getUTCHours()	Same as getHours(), but returns the UTC hour
// getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds
// getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes
// getUTCMonth()	Same as getMonth(), but returns the UTC month
// getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds