sap.ui.jsview("shopping.Search", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shopping.Search
	*/ 
	getControllerName : function() {
		return "shopping.Search";
	},
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shopping.Search
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Search",
			content: [
			   new sap.m.SearchField({
				   saerch : function(ev) {
					   alert("Not found");
				   }
			   })
			]
		});
	}

});