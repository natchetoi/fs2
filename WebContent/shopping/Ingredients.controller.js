sap.ui.controller("shopping.Ingredients", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shopping.Ingredients
*/
	onInit: function() {

	},
	
	onBeforeShow : function(evt) {
		var view = this.getView();
		if ("to" === evt.direction) {
			this.getView().page.setTitle(evt.data.productName);
			var id = evt.data.productId;

			// bind list with the Products of the currently selected Category
			view.ingrList.bindAggregation("items", {
				path : "/Ingredients",
//				sorter : new sap.ui.model.Sorter("Name", false),
				filters : [ new sap.ui.model.Filter("Product", sap.ui.model.FilterOperator.EQ, id) ],
				template : view.ingrTemplate
			});
		}
	},

	ingrDetailsTap : function(ev) {
		var param = {
				context : evt.oSource.getBindingContext()
			};
			appC.navTo("ProductDetails", true, undefined, param);
		
	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf shopping.Ingredients
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf shopping.Ingredients
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf shopping.Ingredients
*/
//	onExit: function() {
//
//	}

});