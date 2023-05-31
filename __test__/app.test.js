const request = require('supertest');
const app = require('../app');

describe('server', () => {
	let api;

	beforeAll(() => {
		api = app.listen(5000, () => {
			console.log('Server is running on port: 5000');
		});
	});

	afterAll((done) => {
		console.log('Server test stopped');
		api.close(done);
	});

	it('responds to GET / with status 200', (done) => {
		request(api).get('/').expect(200, done);
	});
});
