/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import CartSorted from '../../../../../app/components/cart/src/cart-sorted';
// import cookie from '../../../../../app/components/cart/src/storage/storage-cookie';

describe('CartSorted', () => {

	let cart = null;

	before(() => {
		cart = new CartSorted();
	});

	afterEach(() => {
		cart.clear();
	});

	describe('add', () => {
		it('should have empty items array');
	});
});
