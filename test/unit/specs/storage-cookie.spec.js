/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import StorageCookie from '../../../app/components/cart/src/storage/storage-cookie';

describe('StorageCookie', () => {
	describe('set', () => {
		it('should save a cookie', () => {
			const storage = new StorageCookie();
			storage.set('cart', 'moin');
			const cart = storage.get('cart');
			expect(cart).to.be.equal('moin');
		});
	});
});
