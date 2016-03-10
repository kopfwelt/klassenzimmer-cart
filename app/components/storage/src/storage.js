/**
 * Storage fabric
 * @param  {String} type Type of engine. Can be cookie, localstorage
 * @return {Storage} Instance of a storage enging having .read(key) and .save(key, value)
 */
const storage = type => {
	try {
		const storageEngine = require(`./storage-${type}`);
		return storageEngine.default;
	} catch (error) {
		throw new Error(`Unknown storage engine ${type}. Msg: ${error}`);
	}
};

export default storage;
