/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

// const mocha = require('mocha');
// const describe = mocha.describe;
// const it = mocha.it;

const chai = require('chai');
const expect = chai.expect;

const cart = require('../../../app/components/cart');

describe('Cart', function() {
	describe('add', function() {
		it('should add an object to the collection', function() {
			const response = cart.add('steve');
			expect(response[0]).to.be.equal('steve');
		});
	});
});
