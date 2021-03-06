
module.exports = (moodleDB) => {
    const Course = moodleDB.define('mdl_course', {
        id: {type: 'serial', key: true},
        category: Number,
        sortorder: Number,
        fullname: String,
        shortname: String,
        idnumber: String,
        summary: String,
        summaryformat: Number,
        format: String,
        showgrades: Number,
        newsitems: Number,
        startdate: Number,
        enddate: Number,
        marker: Number,
        maxbytes: Number,
        legacyfiles: Number,
        showreports: Number,
        visible: Number,
        visibleold: Number,
        groupmode: Number,
        groupmodeforce: Number,
        defaultgroupingid: Number,
        lang: String,
        calendartype: String,
        theme: String,
        timecreated: Number,
        timemodified: Number,
        requested: Number,
        enablecompletion: Number,
        completionnotify: Number,
        cacherev: Number,
    });
    return Course;
};
