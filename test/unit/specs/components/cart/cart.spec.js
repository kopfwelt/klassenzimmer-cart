/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import Cart from '../../../../../app/components/cart/src/cart';
// import cookie from '../../../../../app/components/cart/src/storage/storage-cookie';

describe('Cart', () => {
	let cart = null;

	before(() => {
		cart = new Cart();
	});

	afterEach(() => {
		cart.clear();
	});

	describe('constructor', () => {
		it('should have an empty items array', () => {
			expect(cart._items).to.be.an('array');
			expect(cart._items.length).to.be.equal(0);
		});
	});

	describe('use', () => {
		it('should add a storage engine');
	});

	describe('add', () => {
		it('should add an object to the collection', () => {
			cart
				// .use(cookie)
				.init({
					uniqueId: 'sku'
				})
				.add({
					sku: 111231923,
					title: 'steve'
				}, 2);
			expect(cart._items).to.be.an('array');
			expect(cart._items.length).to.be.equal(1);
		});
	});

	describe('update', () => {
		it('should update a cart count');
	});

	describe('remove', () => {
		it('should remove a certain item from the cart');
	});

	describe('clear', () => {
		it('should clear the cart', () => {
			cart
				// .use(cookie)
				.init({
					uniqueId: 'sku'
				})
				.add({
					sku: 111231923,
					title: 'steve'
				}, 2)
				.clear();
			expect(cart._items).to.be.an('array');
			expect(cart._items.length).to.be.equal(0);
		});
	});
});
