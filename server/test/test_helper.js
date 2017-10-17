const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(done => {
	let options = {
		useMongoClient: true
	};
	mongoose.connect('mongodb://localhost/craepro', options);
    mongoose.connection
        .once('open', () => done())
        .on('error', (error) => {
            console.warn('Warning', error);
    });
})

beforeEach((done) => {
    mongoose.connection.collections.alunos.drop(() => {
        done();
    });
});