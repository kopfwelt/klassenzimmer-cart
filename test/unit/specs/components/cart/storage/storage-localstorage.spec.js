/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import localstorage from '../../../../../../app/components/cart/src/storage/storage-localstorage';

describe('StorageCookie', () => {
	describe('set', () => {
		it('should save to localStorage', () => {
			localstorage
				.set('cart', {steve:"steve"});
			localstorage
				.get('cart')
				.then(items => {
					expect(items).to.be.equal('moin');
					done();
				})
				.catch(() => {
					throw new Error('Can not save to local storage');
				});
		});
	});

	describe('get', () => {
		it('should read a localStorage', () => {
			localstorage
				.get('cart')
				.then(items => {
					expect(items).to.be.equal('moin');
					// return this;
					done();
				})
				.catch(() => {
					throw new Error('Can not read local storage');
				});
		});
	});
});
