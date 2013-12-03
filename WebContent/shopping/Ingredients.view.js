sap.ui.jsview("shopping.Ingredients", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shopping.Ingredients
	*/ 
	getControllerName : function() {
		return "shopping.Ingredients";
	},
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shopping.Ingredients
	*/ 
	createContent : function(oController) {
		// create list for displaying the Products
		this.ingrList = new sap.m.List({
			headerText : "Ingredients",
		});
		this.ingrTemplate = new sap.m.StandardListItem({
			title : "{Name}",
			icon : "{icon}",
			iconInset : false,
			iconDensityAware : false,
			type : sap.m.ListType.Navigation,
//			description : appV.bindingPrice.price,
			tap : [ oController.ingrDetailsTap, oController ]
		});

		// create page
		this.page = new sap.m.Page({
			showNavButton : true,
			navButtonTap : [ oController.navButtonTap, oController ],
			// icon : appV.bindingIcon.ui5,
			headerContent : [ new sap.m.Button({
				icon : appV.bindingIcon.cart,
				tap : [ oController.cartButtonTap, oController ]
			}) ],
			content : [ this.ingrList ]
		});
		return this.page;
	}

});