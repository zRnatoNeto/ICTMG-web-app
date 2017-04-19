class CourseCategories {

	getCourseCategorie(objt, orm) {
		const self = this;
		return new Promise(function(fulfill, reject) {
            self.CourseCategorie.find({id: objt}, function(err, data) {
                if (err) reject(err);
                fulfill(data);
            });
		});
	}

	constructor(CourseCategorie) {
		this.CourseCategorie = CourseCategorie;
	}
}

module.exports = (db) => {
	const CourseCategorie = require('../models/course_categories')(db);
	return new CourseCategories(CourseCategorie);
};