import Cart from './cart';

/**
 * Extends Cart by sorted items
 *
 * @class
 */
class CartSorted extends Cart {

	/**
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * Adds item to the cart and sets a position for an item
	 *
	 * @param {Object} item  Can be any object, but must have an unique id
	 * @param {Number} count Amount of the item you want to add
	 * @param {Number} position Position of the cart
	 * @return {Cart}        Cart instance this
	 */
	add(item, count = 1, position = undefined) {
		if (typeof position === 'undefined') {
			throw new Error('Position is not defined');
		}

		this._items.push({item, count, position});
		super._save();

		return this;
	}

}

export default CartSorted;
