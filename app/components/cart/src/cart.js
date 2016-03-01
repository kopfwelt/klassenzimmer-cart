export default class Cart {

	constructor() {
		this.items = [];
		this.storage = null;
	}

	use(engine) {
		this.storage = engine;
		return this;
	}

	init(options = {}) {
		this.items = this._read();
		return this;
	}

	add(item) {
		this.items.push(item);
		this._save();

		return this;
	}

	remove(item) {
		this.items.push(item);

		return this;
	}

	_read() {
		const items = this.storage.get();

		return items ? items : [];
	}

	_save() {
		return this.storage.set(this.items);
	}

}
