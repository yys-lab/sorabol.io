process.env.timeZone = "Asia/Seoul";

const neis = require("../src/neis");

const school = neis.createSchool(neis.REGION.SEOUL, "B100000454", neis.TYPE.HIGH);
school.getMeal(2020, 11).then(d => {
	d.forEach(meal => {
		console.log(meal.date.toDateString() + "\n" +
			"조식 : " + meal.breakfast + "\n" +
			"중식 : " + meal.lunch + "\n" +
			"석식 : " + meal.dinner + "\n"
		);
	});
	console.log("1일 급식 : " + "\n" +
		"조식 : " + d[1].breakfast + "\n" +
		"중식 : " + d[1].lunch + "\n" +
		"석식 : " + d[1].dinner + "\n");

});
 