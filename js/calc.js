(function( $ ) {
	
	function CalculatorView(element) {
		var sectionCount = 1;
		var sections = [];
		
		this.setClass = function(layout) {
			$(element).addClass("calc-container calc-layout-"+layout);
		}
		
		this.setID = function(id) {
			$(element).addClass("calc-container-"+id);
		}
		
		this.createSection = function(args) {
			var section = $("<fieldset class='calc-section calc-section-"+sectionCount+"'></fieldset>")
			sectionCount++;
			
			if (args.title) {
				section.append($("<legend>"+args.title+"</legend>"));
			}
			
			$(element).append(section);
			
			return section;
		}
		
		this.createWidget = function(section, args) {
			var widget = $("<div class='calc-widget calc-"+args.type+"'></div>")
			
			widget.addClass("position-x-"+args.position[0]+" position-y-"+args.position[1]);
			
			if (args.layout !== undefined) {
				widget.addClass("calc-widget-layout-"+args.layout);
			}
			
			if (args.group !== undefined) {
				widget.attr("calc-group",args.group);
			}
			
			if (args.prefix !== undefined) {
					widget.append("<span class='prefix'>"+args.prefix+"</span>");
			}
			
			if (args.type == "label") {
				widget.append("<label>"+args.text+"</label>");

			} else
			if (args.type == "textbox") {
				
				
				
				widget.append("<input name='"+args.name+"' type='text'/>");
				
			} else
			if (args.type == "slider") {
				widget.append("<div class='calc-slider'></div>");
				
			} else
			if (args.type == "radio") {
				var radio_name = args.name;
				for (var i=0;i<args.options.length;i++) {
					var radio_id = radio_name+"-"+i;
					var checked = (args.options[i].checked === 1) ? "checked" : "";
					widget.append(
						"<div class='calc-radio-option'>"+
						"<input type='radio' id='"+radio_id+"' name='"+radio_name+"' "+checked+"/>"+
						"<label for='"+radio_id+"'>"+args.options[i].text+"</label>"+
						"</div>");
					
				}
				
			}
			
			
			section.append(widget);
		}
		
	}
	
	function CalculatorModel() {
		/* Calculator Logic */
		
		var widgets = [];
		
		
	}
	
	function Calculator(element, specs) {
		var View = new CalculatorView(element);

		function construct() {
			console.log(element);
			readSpecs();
			
		}

		function readSpecs() {
			View.setClass(specs.layout);
			View.setID(specs.ID);
			
			for (var i=0;i<specs.section.length;i++) {
				var sectionView = View.createSection(specs.section[i]);
				
				for (var w=0;w<specs.section[i].widgets.length;w++) {
					View.createWidget(sectionView, specs.section[i].widgets[w]);
					
				}
				
			}
			
		}

		
		construct();
		return true;
	}
	
	
	$.fn.calculator = function(specs) {
		var myCalculator = new Calculator(this, specs);
	};
})( jQuery );

