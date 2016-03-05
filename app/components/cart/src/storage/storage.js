/**
 * Storage interface
 *
 * @interface
 */
class Storage {

	/**
	 * Returns a saved string
	 */
	get() {}

	/**
	 * Saves string
	 * @param {String} name   Identifier of the saved object
	 * @param {Object} object Object to be saved serialized
	 */
	set(name = '', object = {}) {}

}

export default Storage;
