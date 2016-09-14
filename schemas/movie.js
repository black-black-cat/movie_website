var mongoose = require('mongoose');
var movieSchema = new mongoose.Schema({
    director: String,
    title: String,
    language: String,
    country: String,
    summary: String,
    video: String,
    poster: String,
    year: Number,
    meta: {
        createAt: {
            type: Date,
            defaults: Date.now()
        },
        updateAt: {
            type: Date,
            defaults: Date.now()
        }
    }
})

// 每次保存之前调用，记录增、改的时间
movieSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});

movieSchema.statics = {
    // 取出现时数据库里的全部数据
    fetch: function(cb) {
        return this.find({})
            .sort('meta.updateAt')
            .exec(cb);
    },

    findById: function(id, cb) {
        return this.findOne({_id: id}).exec(cb);
    }
};

module.exports = movieSchema;
