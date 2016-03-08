import StorageInterface from './storage-interface';

/**
 * @extends {Storage}
 */
class StorageCookie extends StorageInterface {

	read(key) {
		const that = this;
		const promise = new Promise((fulfill, reject) => {
			const cookies = that.all();

			if (cookies) {
				const json = cookies[key];
				const object = JSON.parse(json);
				fulfill(object);
			} else {
				reject();
			}
		});

		return promise;
	}

	save(key, object, options = {}) {
		const json = JSON.stringify(object);
		const promise = new Promise((fulfill, reject) => {
			try {
				let str = `${this.encode(key)}=${this.encode(json)}`;

				if (object === null) {
					options.expiry = -1;
				}

				if (options.expiry && !options.expires) {
					options.expires = new Date(+new Date() + options.expiry);
				}

				if (options.path) {
					str += `; path=${options.path}`;
				}

				if (options.domain) {
					str += `; domain=${options.domain}`;
				}

				if (options.expires) {
					str += `; expires=${options.expires.toUTCString()}`;
				}

				if (options.secure) {
					str += '; secure';
				}

				document.cookie = str;
				fulfill();
			} catch (error) {
				reject(error);
			}
		});

		return promise;
	}

	all() {
		return this.parse(document.cookie);
	}

	parse(str) {
		const obj = {};
		const pairs = str.split(/ *; */);
		let pair = null;

		if (pairs[0] === '') {
			return obj;
		}

		for (let i = 0; i < pairs.length; ++i) {
			pair = pairs[i].split('=');
			obj[this.decode(pair[0])] = this.decode(pair[1]);
		}

		return obj;
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

export default new StorageCookie();