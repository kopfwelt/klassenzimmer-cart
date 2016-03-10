// import EventEmitter from 'wolfy87-eventemitter';

/**
 * Handles objects and provides simple cart interface.
 * Use it together with storage enginges to create persistancy
 *
 * @class
 */
// class Cart extends EventEmitter {

function cart() {
	let _items = [];
	let _options = [];
	let _storage = null;

	/**
	 * Set storage engine
	 *
	 * @param  {Storage} engine Set storage enginge for use of cookie, localstorage, ...
	 * @return {Cart}        Cart instance this
	 */
	const use = function (engine) {
		_storage = engine;

		return this;
	};

	/**
	 * Init cart by passing options.
	 *
	 * @param  {Object} options [description]
	 * @return {Cart}        Cart instance this
	 */
	const init = function (options = {}) {
		_options = options;
		_read()
			.then(
				set.bind(this)
			);

		return this;
	};

	/**
	 * Returns plain cart items
	 *
	 * @return {Array} Cart items
	 */
	const get = function () {
		return _items;
	};

	/**
	 * Set cart items
	 *
	 * @param {Array} items
	 */
	const set = function (items) {
		if(items) {
			_items = items;
		}
	};

	/**
	 * Adds an item to the cart
	 *
	 * @param {Object} item  Can be any object, but must have an unique id
	 * @param {Number} count Amount of the item you want to add
	 * @return {Cart}        Cart instance this
	 */
	const add = function (item, count = 1) {
		if (_contains(item)) {
			const index = _index(item);
			_items[index].count += count;
		} else {
			_items.push({item, count});
		}
		_save(_items)
		  .then(_updated.bind(this));

		return this;
	};

	/**
	 * Removes an item from the cart
	 *
	 * @param  {Object} item An object already added to the cart
	 * @return {Cart}        Cart instance this
	 */
	const remove = function (item) {
		if (_contains(item)) {
			const index = _index(item);
			_items.splice(index, 1);
		}

		return this;
	};

	/**
	 * Empties the cart
	 *
	 * @return {Cart}        Cart instance this
	 */
	const clear = function () {
		set([]);
		_save(get());

		return this;
	};

	const _updated = function () {
		// emitEvent('update');
	};

	/**
	 * Checks if an item exists in the carts
	 *
	 * @param  {Objext} item
	 * @return {Boolean}
	 * @private
	 */
	const _contains = function (item) {
		let contains = false;
		const uniqueId = _options.identifier;
		for (let i = 0; i < _items.length; i++) {
			if (_items[i].item[uniqueId] === item[uniqueId]) {
				contains = true;
			}
		}

		return contains;
	};

	/**
	 * Returns the index of an item in the cart
	 *
	 * @param  {Object} item
	 * @return {Integer}
	 * @private
	 */
	const _index = function (item) {
		let index = 0;
		const uniqueId = _options.identifier;
		for (let i = 0; i < _items.length; i++) {
			if (_items[i].item[uniqueId] === item[uniqueId]) {
				index = i;
			}
		}

		return index;
	};

	/**
	 * Returns saved items
	 *
	 * @return {Array} Saved items
	 * @private
	 */
	const _read = function () {
		let promise;
		if (_storage) {
			promise = _storage.read('cart');
		} else {
			promise = new Promise(fulfill => {
				fulfill();
			});
		}
		return promise;
	};

	/**
	 * Saves items
	 *
	 * @private
	 */
	const _save = function (items) {
		if (_storage) {
			return _storage.save('cart', items);
		}
	};

	return {
		use,
		init,
		get,
		set,
		add,
		remove,
		clear
	};
}

export default cart;
