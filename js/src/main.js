$(function() {
	!function ($, window, document, undefined) {
		var text = {
				add: $('.btn-success').eq(0).text(),
				rem: 'Remove from cart'
			},
			icon = {
				add: $('.btn-success').find('i').get(0).className,
				rem: 'icon-fire icon-white'
			};

		var cart = (function() {
			var $cart = $('#cart');
			function add () { $cart.html(parseInt($cart.text(), 10) + 1); }
			function rem () { $cart.html(parseInt($cart.text(), 10) - 1); }
			return { add: add, remove: rem };
		})();

		function add() {
			var _this = this,
				$this = $(this);

			_this.className = 'btn btn-warning';
			$this.html($this.html().replace(text.add, text.rem));
			$this.find('i').get(0).className = icon.rem;
			$(document).trigger('cart.add', [_this]);
		}

		function remove() {
			var _this = this,
				$this = $(this);

			_this.className = 'btn btn-success';
			$this.html($this.html().replace(text.rem, text.add));
			$this.find('i').get(0).className = icon.add;
			$(document).trigger('cart.remove', [_this]);
		}

		$(document).on('click', '.btn-success', add);
		$(document).on('click', '.btn-warning', remove);
		$(document).on('cart.add', cart.add);
		$(document).on('cart.remove', cart.remove);

	}(jQuery, window, document);
});