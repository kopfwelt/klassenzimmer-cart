export default class Cart {

	constructor() {
		this.items = [];
	}

	add(item) {
		if (!this._contains(item)) {
			this.items.push(item);
		}
	}

	remove(item) {
		return item;
	}

	clear() {
		return;
	}

	_contains(item) {
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].id === item.id) {
				return true;
			}
		}
		return false;
	}

}
