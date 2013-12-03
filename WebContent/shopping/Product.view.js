sap.ui.jsview("shopping.Product", {

	getControllerName : function() {
		return "shopping.Product";
	},

	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	createContent : function(oController) {

		// create list for displaying the Products
		this.productList = new sap.m.List({
			headerText : "{i18n>LIST_HEADER_PRODUCT}",
		});
		this.productTemplate = new sap.m.StandardListItem({
			title : "{Name}",
			icon : "{img}",
			iconInset : false,
			iconDensityAware : false,
			type : sap.m.ListType.Navigation,
			description : appV.bindingPrice.price,
			// info : appV.bindingPrice.price,
			tap : [ oController.productDetailsTap, oController ]
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
			content : [ this.productList ]
		});
		return this.page;
	}
});