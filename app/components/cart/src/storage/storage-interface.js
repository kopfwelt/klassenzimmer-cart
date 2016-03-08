/**
 * Storage interface
 *
 * @interface
 */
class Storage {

	/**
	 * Returns a saved string
	 */
	read(key) {}

	/**
	 * Saves string
	 * @param {String} name   Identifier of the saved object
	 * @param {Object} object Object to be saved serialized
	 */
	save(key, object = {}) {}

}

export default Storage;
