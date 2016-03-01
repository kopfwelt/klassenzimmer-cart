/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import StorageServiceWorker from '../../../app/components/cart/src/storage/storage-service-worker';

describe('StorageServiceWorker', () => {
	describe('set', () => {
		it('should save cart content using service worker', () => {
			const storage = new StorageServiceWorker();
			storage.set('cart', 'moin');
			const cart = storage.get('cart');
			expect(cart).to.be.equal('moin');
		});
	});
});
