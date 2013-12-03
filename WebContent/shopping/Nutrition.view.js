sap.ui.jsview("shopping.Nutrition", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shopping.Nutrition
	*/ 
	getControllerName : function() {
		return "shopping.Nutrition";
	},
	
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shopping.Nutrition
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "Nutrtion Facts",
			content : [
						new sap.m.VBox({
							alignItems : sap.m.FlexAlignItems.Center,
							items : [ new sap.m.Image({
								src :  "images/fruit/appleS.png",// appV.bindingImg.image,
								width : "130px",
								height : "130px",
								decorative : true,
								densityAware : false
							}) ]
						}),
						new sap.m.List({
							items : [
									new sap.m.CustomListItem({
										content : [ new sap.m.VBox({
											items : [ this.nameLabel, this.nameValue ],
										}) ]
									}),
									new sap.m.CustomListItem({
										content : [ new sap.m.VBox({
											items : [ this.priceLabel, this.priceValue ]
										}) ]
									}),
									new sap.m.CustomListItem({
										content : [ new sap.m.VBox({
											items : [ this.descLabel, this.descValue ]
										}) ]
									}),
									new sap.m.CustomListItem({
										content : [

												new sap.m.VBox({
													items : [
															new sap.m.HBox({
																items : [ this.dimLabel ],
															}),
															new sap.m.HBox({
																items : [ this.widthLbl, this.widthValue, this.heightLbl,
																		this.heightValue, this.depthLbl, this.depthValue ],
															}), ],
												}), ]
									}), new sap.m.CustomListItem({
										content : [ new sap.m.VBox({
											items : [ this.weightLabel, this.weightValue ]
										}) ]
									}), ],
						}), ]		});
	}

});