/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import cartClosure from '../../../../../app/components/cart/src/cart-closure';
import storage from '../../../../../app/components/storage/src/storage';

describe('cart closure', () => {
	let cart = null;
	let hammer = null;
	let nail = null;
	let bucket = null;

	before(() => {
		cart = cartClosure();

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

	describe('constructor', () => {
		it('should have an empty items array', () => {
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(0);
		});
	});

	describe('use', () => {
		it('should add a storage engine', () => {
			cart
				.use(storage('localstorage'));

			// expect(cart._storage).to.be.equal(storage('localstorage'));
		});
	});

	describe('add', () => {
		it('should add an object to the collection', () => {
			cart
				.use(storage('localstorage'))
				.init({
					identifier: 'sku'
				})
				.add(hammer, 2);
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(1);
		});

		it('should add increase the count of an item if item exists in cart', () => {
			cart
				.use(storage('localstorage'))
				.init({
					identifier: 'sku'
				})
				.add(hammer, 2)
				.add(hammer, 2);
			expect(cart.get().length).to.be.equal(1);
			expect(cart.get()[0].count).to.be.equal(4);
		});
	});

	describe('remove', () => {
		it('should remove a certain item from the cart', () => {
			cart
				.add(hammer, 2)
				.init({
					identifier: 'sku'
				})
				.add(bucket, 1)
				.add(nail, 2)
				.remove(bucket);

			expect(cart.get().length).to.be.equal(2);

			cart.remove(hammer);
			expect(cart.get().length).to.be.equal(1);
		});
	});

	describe('clear', () => {
		it('should clear the cart', () => {
			cart
				.init({
					identifier: 'sku'
				})
				.add(hammer, 2)
				.clear();
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(0);
		});
	});
});
