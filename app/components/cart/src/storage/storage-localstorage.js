import Storage from './storage';

/**
 * @extends {Storage}
 */
class StorageLocalStorage extends Storage {

	get(name) {
		const promise = new Promise((fulfill, reject) => {
			const item = localStorage.getItem(name);
			if (item) {
				fulfill(item);
			} else {
				reject();
			}
		});
		return promise;
	}

	set(name, value, options = {}) {
		const promise = new Promise((fulfill, reject) => {
			localStorage.setItem(name, value);
			fulfill();
		});
		return promise;
	}

	storageAvailable(type) {
		try {
			var storage = window[type],
				x = '__storage_test__';
			storage.setItem(x, x);
			storage.removeItem(x);
			return true;
		}
		catch(e) {
			return false;
		}
	}

	all() {
		return this.parse(document.cookie);
	}

	parse(str) {
		// const obj = {};
		// const pairs = str.split(/ *; */);
		// const pair;

		// if ('' == pairs[0]) {
		// 	return obj;
		// }

		// for (let i = 0; i < pairs.length; ++i) {
		// 	pair = pairs[i].split('=');
		// 	obj[this.decode(pair[0])] = this.decode(pair[1]);
		// }

		// return obj;
	}

	encode(value) {
		try {
			return encodeURIComponent(value);
		} catch (e) {
			return null;
		}
	}

	decode(value) {
		try {
			return decodeURIComponent(value);
		} catch (e) {
			return null;
		}
	}
}

export default new StorageLocalStorage();

