let items = [];

module.exports = {

	add: item => {
		items.push(item);
		return items;
	},

	clear: () => {
		items = [];
	}
};
