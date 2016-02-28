/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import CartCookie from '../../../app/components/cart/src/cart-cookie';

describe('CartCookie', () => {
	describe('_save', () => {
		it('should save an item to a cookie', () => {
			const cart = new CartCookie();

			// cart._save({'steve'});
			cart.add({
				id: 1,
				title: 'steve'
			});
			cart._save({
				id: 1,
				title: 'steve'
			});
			expect(cart.items).to.be.an('array');
			expect(cart.items.length).to.be.equal(1);
		});
	});
});
