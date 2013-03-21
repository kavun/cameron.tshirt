define(['jquery', 'pubsub'], function($) {

	function Cart (cart) {
		if (typeof cart === 'string') {
			this.cart = $('#' + cart).eq(0);	
		} else {
			this.cart = $(cart);
		}

		$.subscribe('cart.add', $.proxy(this.add, this));
		$.subscribe('cart.remove', $.proxy(this.rem, this));
	}

	Cart.prototype = {
		add: function (e, sender) { 
			this.cart.html(
				parseInt(this.cart.text(), 10) + 1
			); 
		},
		rem: function (e, sender) { 
			this.cart.html(
				parseInt(this.cart.text(), 10) - 1
			); 
		}
	}

	return Cart;

});