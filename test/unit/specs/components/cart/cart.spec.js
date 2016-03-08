/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import Cart from '../../../../../app/components/cart/src/cart';
import localstorage from '../../../../../app/components/cart/src/storage/storage-localstorage';

describe('Cart', () => {
	let cart = null;
	let hammer = null;
	let nail = null;
	let bucket = null;

	before(() => {
		cart = new Cart();

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
				.use(localstorage);

			expect(cart._storage).to.be.equal(localstorage);
		});
	});

	describe('add', () => {
		it('should add an object to the collection', () => {
			cart
				.init({
					uniqueId: 'sku'
				})
				.add(hammer, 2);
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(1);
		});

		it('should add increase the count of an item if item exists in cart', () => {
			cart
				.init({
					uniqueId: 'sku'
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
				.init({
					uniqueId: 'sku'
				})
				.add(hammer, 2)
				.add(bucket, 1)
				.add(nail, 2)
				.remove(bucket);

			expect(cart.get().length).to.be.equal(2);

			cart.remove(hammer);
			const containsHammer = cart._contains(hammer);
			expect(cart.get().length).to.be.equal(1);
			expect(containsHammer).to.be.false;
		});
	});

	describe('clear', () => {
		it('should clear the cart', () => {
			cart
				.init({
					uniqueId: 'sku'
				})
				.add({
					sku: 111231923,
					title: 'steve'
				}, 2)
				.clear();
			expect(cart.get()).to.be.an('array');
			expect(cart.get().length).to.be.equal(0);
		});
	});

	describe('_contains', () => {
		it('should return true if an item exists already in cart', () => {
			cart.init({
				uniqueId: 'sku'
			})
			.add(nail, 10)
			.add(hammer, 1);

			const containsNails = cart._contains(nail);
			expect(containsNails).to.be.true;

			const containsHammer = cart._contains(hammer);
			expect(containsHammer).to.be.true;
		});
		it('should return false if an item does not exists already in cart', () => {
			cart.init({
				uniqueId: 'sku'
			})
			.add(nail, 10)
			.add(hammer, 1);

			const containsBucket = cart._contains(bucket);
			expect(containsBucket).to.be.false;
		});
	});

	describe('_index', () => {
		it('should return the index of an existing item in the cart', () => {
			cart.init({
				uniqueId: 'sku'
			})
			.add(nail, 10)
			.add(hammer, 1);

			const indexHammer = cart._index(hammer);
			expect(indexHammer).to.be.equal(1);

			const indexNails = cart._index(nail);
			expect(indexNails).to.be.equal(0);
		});
	});

});
