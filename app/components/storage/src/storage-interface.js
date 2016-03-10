/**
 * Storage interface
 *
 * @interface
 */
class Storage {

	/**
	 * Returns a saved string
	 * @return {Promise}
	 */
	read(key) {}

	/**
	 * Saves string
	 *
	 * @param {String} key   Identifier of the saved object
	 * @param {Object} object Object to be saved serialized
	 * @return {Promise}
	 */
	save(key, object = {}) {}

	/**
	 * Clears the storage
	 * @return {Promise}
	 */
	clear() {}

}

export default Storage;
