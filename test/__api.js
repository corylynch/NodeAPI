var expect = require('expect');
request = require('supertest');


describe('API', function(){
	var server;
	beforeEach(function(){
		server = require('../src/server.js');
	});

	afterEach(function(){
		server.close();
	});

	it('Returning hello: "world"', function testHealth(done) {
		request(server)
			.get('/api/')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {hello: "world"}, done);

	});

	it('/v1 returning hello: "world"', function testHealth(done) {
		request(server)
			.get('/api/v1')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {hello: "world"}, done);

	});

	it('Returning healthy: true', function testHealth(done) {
		request(server)
			.get('/api/status')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {healthy: true}, done);

	});

	it('/user/id returning user object with id', function testHealth(done) {
		var fakeUserId = 347;
		request(server)
			.get('/api/user/' + fakeUserId)
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, {user: {id: fakeUserId}}, done);

	});


});