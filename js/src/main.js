require.config({ 
	paths: { 
		'jquery': '../lib/jquery-1.9.1.min',
		'pubsub': '../lib/pubsub'
	} 
});

require(['jquery', 'cart', 'pubsub'], function ($, Cart) {
	$(function() {
		var text = {
				add: $('.btn-success').eq(0).text(),
				rem: 'Remove from cart'
			},
			icon = {
				add: $('.btn-success').find('i').get(0).className,
				rem: 'icon-remove icon-white'
			},
			cart = new Cart('cart');

		function add() {
			var _this = this,
				$this = $(this);

			_this.className = 'btn btn-warning';
			$this.html($this.html().replace(text.add, text.rem));
			$this.find('i').get(0).className = icon.rem;
			$.publish('cart.add', [_this]);
		}

		function remove() {
			var _this = this,
				$this = $(this);

			_this.className = 'btn btn-success';
			$this.html($this.html().replace(text.rem, text.add));
			$this.find('i').get(0).className = icon.add;
			$.publish('cart.remove', [_this]);
		}

		$(document).on('click', '.btn-success', add);
		$(document).on('click', '.btn-warning', remove);
		$('#vlog').get(0).href = 'http://www.youtube.com/playlist?list=PLfkCqyu_J41kGU2sa_aIeZCxVt2c-TBFj';
	});

});