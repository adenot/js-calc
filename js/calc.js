(function( $ ) {
	
	function CalculatorView(element) {
		
		this.setClass = function() {
			$(element).addClass("calc-container");
		}
		
		this.setID = function(id) {
			$(element).addClass("calc-container-"+id);
		}
		

	}
	
	function Calculator(element, specs) {
		var View = new CalculatorView(element);

		function construct() {
			console.log(element);
			readSpecs();
			
		}

		function readSpecs() {
			View.setClass();
			View.setID(specs.ID);
		}

		
		construct();
		return true;
	}
	
	
	$.fn.calculator = function(specs) {
		var myCalculator = new Calculator(this, specs);
	};
})( jQuery );

