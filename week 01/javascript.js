const d = new Date();

var month = d.getMonth() + 1;	// Month	[mm]	(1 - 12)
var date = d.getDate();		// Day		[dd]	(1 - 31)
var year = d.getFullYear();	// Year		[yyyy]
var dateStr = month + "/" + date + "/" + year;
var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
document.getElementById("currentTime").innerText = dateStr + " " + time;
