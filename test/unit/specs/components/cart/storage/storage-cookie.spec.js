/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import cookie from '../../../../../../app/components/cart/src/storage/storage-cookie';

describe('StorageCookie', () => {
	describe('read', () => {
		it('should read saved cookie', done => {
			cookie
				.save('cart', {moin:"moin"})
				.then(() => {
					cookie
						.read('cart')
						.then(items => {
							expect(items).to.be.an.object;
							expect(items.moin).to.be.equal('moin');
							done();
						}, () => {
							throw new Error('Can read local storage');
						});
				}, () => {
					throw new Error('Can not save to local storage');
				});
		});
	});

	describe('save', () => {
		it('should save a cookie', done => {
			cookie
				.save('cart', {moin:"moin"})
				.then(() => {
					cookie
						.read('cart')
						.then(items => {
							expect(items).to.be.an.object;
							expect(items.moin).to.be.equal('moin');
							done();
						}, () => {
							throw new Error('Can read cookie');
						});
				}, () => {
					throw new Error('Can not save to cookie');
				});
		});
	});
});
