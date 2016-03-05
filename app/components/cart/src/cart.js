class Cart {

	constructor() {
		this._items = [];
		this._options = [];
		this._storage = this;
	}

	use(engine) {
		this._storage = engine;

		return this;
	}

	init(options = {}) {
		this._options = options;
		// this._items = this._read();

		return this;
	}

	add(item, count) {
		this._items.push({item, count});
		// this._save();

		return this;
	}

	remove(item) {
		this._items.push(item);

		return this;
	}

	clear() {
		this._items = [];

		return this;
	}

	set() {
	}

	get() {
		return this._items ? this._items : [];
	}

	_read() {
		const item = this._storage.get('cart');
		if(!items) {
			items = [];
		}

		return items;
	}

	/**
	 * [_save description]
	 * @todo  return promise
	 */
	_save() {
		return this._storage.set('cart', this.items);
	}

}

export default new Cart();
