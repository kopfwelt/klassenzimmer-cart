/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import localstorage from '../../../../../../app/components/cart/src/storage/storage-localstorage';

describe('StorageLocalStorage', () => {
	describe('save', () => {
		it('should save to localStorage', done => {
			localstorage
				.save('cart', {steve: 'steve'})
				.then(() => {
					localstorage
						.read('cart')
						.then(items => {
							expect(items).to.be.an.object;
							expect(items.steve).to.be.equal('steve');
							done();
						}, () => {
							throw new Error('Can read local storage');
						});
				}, () => {
					throw new Error('Can not save to local storage');
				});
		});
	});

	describe('read', () => {
		it('should read a localStorage', done => {
			localstorage
				.save('cart', {moin: 'moin'})
				.then(() => {
					localstorage
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
});
