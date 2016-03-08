/* eslint no-unused-expressions: 0, prefer-reflect: 0, no-undef: 0 */

import chai from 'chai';
const expect = chai.expect;

import localstorage from '../../../../../../app/components/cart/src/storage/storage-localstorage';

describe('StorageCookie', () => {
	describe('save', () => {
		it('should save to localStorage', () => {
			localstorage
				.save('cart', {steve:"steve"});
			localstorage
				.read('cart')
				.then(items => {
					expect(items).to.be.equal('moin');
					done();
				})
				.catch(() => {
					throw new Error('Can not save to local storage');
				});
		});
	});

	describe('read', () => {
		it('should read a localStorage', () => {
			localstorage
				.read('cart')
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
