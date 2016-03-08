import StorageInterface from './storage-interface';

/**
 * @extends {Storage}
 * @class
 */
class StorageLocalStorage extends StorageInterface {

	read(key) {
		const promise = new Promise((fulfill, reject) => {
			const json = localStorage.getItem(key);
			const object = JSON.parse(json);
			fulfill(object);
		});
		return promise;
	}

	save(key, object) {
		const json = JSON.stringify(object);
		const that = this;
		const promise = new Promise((fulfill, reject) => {
			try {
				localStorage.setItem(key, json);
				fulfill(that);
			} catch (error) {
				reject(error);
			}
		});
		return promise;
	}

	// _available(type) {
	// if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
	// } else {
	//     // Sorry! No Web Storage support..
	// }
	// 	try {
	// 		var storage = window[type],
	// 			x = '__storage_test__';
	// 		storage.setItem(x, x);
	// 		storage.removeItem(x);
	// 		return true;
	// 	}
	// 	catch(e) {
	// 		return false;
	// 	}
	// }
}

export default new StorageLocalStorage();

