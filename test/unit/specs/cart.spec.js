/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import Cart from '../../../app/components/cart/src/cart';

describe('Cart', () => {
	describe('constructor', () => {
		it('should set items to empty array', () => {
			const cart = new Cart();
			expect(cart.items).to.be.an('array');
			expect(cart.items).to.be.empty;
		});
	});
	describe('add', () => {
		it('should add an object to the collection', () => {
			const cart = new Cart();
			cart.add({
				id: 1,
				title: 'steve'
			});
			expect(cart.items).to.be.an('array');
			expect(cart.items.length).to.be.equal(1);
		});
	});
});
