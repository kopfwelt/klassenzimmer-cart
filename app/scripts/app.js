import cart from '../components/cart/src/cart';
import cookie from '../components/cart/src/storage/cookie';

const options = {
	identifier: 'id'
};

cart
	.use(cookie)
	.init(options);
