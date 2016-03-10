/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import CartSorted from '../../../../../app/components/cart/src/cart-sorted';
// import cookie from '../../../../../app/components/storage/src/storage-cookie';

describe('CartSorted', () => {
	let cart = null;
	let hammer = null;
	let nail = null;
	let bucket = null;

	before(() => {
		cart = new CartSorted();

		// fixtures
		hammer = {
			sku: 18273,
			title: 'Hammer'
		};
		nail = {
			sku: 82356123,
			title: 'Nail'
		};
		bucket = {
			sku: 91823,
			title: 'Bucket'
		};
	});

	afterEach(() => {
		cart.clear();
	});

	describe('add', () => {
		it('should add an object to a certain slot(position)', () => {
			cart
				.init({
					uniqueId: 'sku'
				})
				.add(hammer, 2, 0);
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(1);
		});

		it('should through an error if the position is not passed', () => {
			cart
				.init({
					uniqueId: 'sku'
				});
			expect(() => {
				cart.add(hammer, 2)
			}).to.throw('Position is not defined');
		});
	});
});
