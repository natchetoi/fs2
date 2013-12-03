sap.ui.controller("shopping.MainMenu", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf shopping.MainMenu
*/
	onInit: function() {
		menuC = this;
	},
	referUs : function () {	
		appC.navTo("ReferUs", true, undefined, undefined);
	},
	scan : function () {	
		appC.navTo("Scan", true, undefined, undefined);
	},
	profile: function () {
		appC.navTo("Profile", true, undefined, undefined);
	},
	search: function() {	
		appC.navTo("Search", true, undefined, undefined);
	},
	recalls: function() {	
		appC.navTo("Recalls", true, undefined, undefined);
	},
	shoppingList: function sale() {	
		appC.navTo("ShopList", true, undefined, undefined);
	},
	cart: function () {	
		appC.navTo("BarCode", true, undefined, undefined);
	},
	support:  function () {	
		appC.navTo("Chat", true, undefined, undefined);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf shopping.MainMenu
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf shopping.MainMenu
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf shopping.MainMenu
*/
//	onExit: function() {
//
//	}

});