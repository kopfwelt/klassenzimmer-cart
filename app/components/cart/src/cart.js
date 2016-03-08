/**
 * Handles objects and provides simple cart interface.
 * Use it together with storage enginges to create persistancy
 *
 * @class
 */
class Cart {

	constructor() {
		this._items = [];
		this._options = [];
		this._storage = undefined;
	}

	/**
	 * Set storage engine
	 * @param  {Storage} engine Set storage enginge for use of cookie, localstorage, ...
	 * @return {Cart}        Cart instance this
	 */
	use(engine) {
		this._storage = engine;

		return this;
	}

	/**
	 * Init cart by passing options.
	 *
	 * @param  {Object} options [description]
	 * @return {Cart}        Cart instance this
	 */
	init(options = {}) {
		this._options = options;
		// this._items = this._read();

		return this;
	}

	/**
	 * Returns plain cart items
	 * @return {Array} Cart items
	 */
	get() {
		return this._items;
	}

	/**
	 * Adds an item to the cart
	 * @param {Object} item  Can be any object, but must have an unique id
	 * @param {Number} count Amount of the item you want to add
	 * @return {Cart}        Cart instance this
	 */
	add(item, count = 1) {
		if (this._contains(item)) {
			const index = this._index(item);
			this._items[index].count += count;
		} else {
			this._items.push({item, count});
		}
		// this._save(this._items);

		return this;
	}

	/**
	 * Removes an item from the cart
	 * @param  {Object} item An object already added to the cart
	 * @return {Cart}        Cart instance this
	 */
	remove(item) {
		if (this._contains(item)) {
			const index = this._index(item);
			this._items.splice(index, 1);
		}

		return this;
	}

	/**
	 * Empties the cart
	 * @return {Cart}        Cart instance this
	 */
	clear() {
		this._items = [];

		return this;
	}

	/**
	 * Checks if an item exists in the carts
	 * @param  {Objext} item
	 * @return {Boolean}
	 * @private
	 */
	_contains(item) {
		let contains = false;
		const uniqueId = this._options['uniqueId'];
		for (let i = 0; i < this._items.length; i++) {
			if (this._items[i].item[uniqueId] === item[uniqueId]) {
				contains = true;
			}
		}

		return contains;
	}

	/**
	 * Returns the index of an item in the cart
	 * @param  {Object} item
	 * @return {Integer}
	 * @private
	 */
	_index(item) {
		let index = 0;
		const uniqueId = this._options['uniqueId'];
		for (let i = 0; i < this._items.length; i++) {
			if (this._items[i].item[uniqueId] === item[uniqueId]) {
				index = i;
			}
		}

		return index;
	}

	/**
	 * Returns saved items
	 * @return {Array} Saved items
	 * @private
	 */
	_read() {
		if (typeof this._storage !== 'undefined') {
			return this._storage.read('cart');
		}
	}

	/**
	 * Saves items
	 * @private
	 */
	_save() {
		if (typeof this._storage !== 'undefined') {
			return this._storage.save('cart', this.items);
		}
	}

}

export default Cart;
