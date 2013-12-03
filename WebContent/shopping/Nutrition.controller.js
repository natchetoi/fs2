sap.ui.controller("shopping.Nutrition", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shopping.Nutrition
*/
	onInit: function() {

	},

	onBeforeShow : function(evt) {
		var view = this.getView();
		// bind this view to the current product
		view.setBindingContext(evt.data.context);
		curContext = evt.data.context;
	},	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf shopping.Nutrition
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf shopping.Nutrition
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf shopping.Nutrition
*/
//	onExit: function() {
//
//	}

});