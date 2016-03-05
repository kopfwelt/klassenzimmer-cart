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
		this._storage = this;
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
	 * Adds item to the cart
	 * @param {Object} item  Can be any object, but must have an unique id
	 * @param {Number} count Amount of the item you want to add
	 * @return {Cart}        Cart instance this
	 */
	add(item, count = 1) {
		this._items.push({item, count});
		// this._save();

		return this;
	}

	/**
	 * Removes an item from the cart
	 * @param  {Object} item An object already added to the cart
	 * @return {Cart}        Cart instance this
	 */
	remove(item) {
		this._items.push(item);

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
	 * @private
	 */
	_save() {
		return this._storage.set('cart', this.items);
	}

}

export default Cart;
