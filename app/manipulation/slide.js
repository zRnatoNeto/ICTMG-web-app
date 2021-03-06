class Slides {

	save(objt) {
		const self = this;
		return new Promise(function(fulfill, reject) {
			if (objt.id) {
				objt.imagePath = 'data/slides/' + objt.id + '.jpg';
				self.Slide.get(objt.id, function(err, data) {
					// replace data of db object
					for (let i in data) {
						if (data.hasOwnProperty(i))
							data[i] = objt[i];
					}

					// saving changes
					data.save(function(err) {
						if (err) reject(err);
						data.imagePath = objt.imagePath;
						fulfill(data);
					});
				});
			} else {
				// create a new object in db and save
				let lastId;
				self.Slide.find({}, function(err, data) {
					if (err) reject(err);
					if(data.length > 0) {
						lastId = data[data.length - 1].id + 1;
						objt.imagePath = 'data/slides/' + lastId + '.jpg';
					} else {
						objt.imagePath = 'data/slides/1.jpg';
					}
					self.Slide.create(objt, function(err, data) {
						if (err) reject(err);
						data.imagePath = objt.imagePath;
						fulfill(data);
					});
				});
			}
		});
	}

	load(objt) {
		const self = this;
		return new Promise(function(fulfill, reject) {
			if (objt) {
				self.Slide.find(objt, function(err, data) {
					if (err) reject(err);
					fulfill(data);
				});
			} else {
				self.Slide.find({}, function(err, data) {
					if (err) reject(err);
					fulfill(data);
				});
			}
		});
	}

	sendCallback(callback, data) {
		callback(data);
	}

	constructor(Slide) {
		this.Slide = Slide;
	}
}

module.exports = (modelDB) => {
	const Slide = require('../models/slide')(modelDB);
	return new Slides(Slide);
};
