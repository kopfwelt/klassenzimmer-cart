/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

// const mocha = require('mocha');
// const describe = mocha.describe;
// const it = mocha.it;

var chai = require('chai');
var expect = chai.expect;

var cart = require('../../../app/components/cart');

describe('Cart', function() {
	describe('add', function() {
		it('should add an object to the collection', function() {
			var response = cart();
			expect(response).to.be.equal('cart');
		});
	});
});
