$(document).ready(function () {
	var my_calendar = $("#dncalendar-container").dnCalendar({
				minDate: "2016-01-15",
				maxDate: "2016-12-02",
				defaultDate: "2016-05-10",
				monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
				monthNamesShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Dec' ],
				dayNames: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                dayNamesShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
                dataTitles: { defaultDate: 'default', today : 'hari ini' },
                notes: [
                		{ "date": "2016-05-25", "note": ["Natal"] },
                		{ "date": "2016-05-12", "note": ["Tahun Baru"] }
                		],
                showNotes: false,
                startWeek: 'sunday',
                dayClick: function(date, view) {
                	alert(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear());
                }
			});

			// init calendar
			my_calendar.build();

			// update calendar
			// my_calendar.update({
			// 	minDate: "2016-01-05",
			// 	defaultDate: "2016-05-04"
			// });

});