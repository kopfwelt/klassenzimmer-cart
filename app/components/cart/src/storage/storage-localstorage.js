import StorageInterface from './storage-interface';

/**
 * @extends {Storage}
 */
class StorageLocalStorage extends StorageInterface {

	read(key) {
		const promise = new Promise((fulfill, reject) => {
			const item = localStorage.getItem(key);
			if (item) {
				fulfill(item);
			} else {
				reject();
			}
		});
		return promise;
	}

	save(key, object, options = {}) {
		const json = JSON.stringify(object);
		const promise = new Promise((fulfill, reject) => {
			const success = localStorage.setItem(key, json);
			if (success) {
				fulfill();
			} else {
				reject();
			}
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
}

export default new StorageLocalStorage();

