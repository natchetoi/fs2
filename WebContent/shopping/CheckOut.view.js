sap.ui.jsview("shopping.CheckOut", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shopping.CheckOut
	*/ 
	getControllerName : function() {
		return "shopping.CheckOut";
	},
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shopping.CheckOut
	*/ 
	createContent : function(oController) {
		
		this.barcode =  new sap.m.Image({
			   src: "images/barcode1.png"
		   })
		
		this.nameLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Points gained:",
		});
		this.nameLabel.addStyleClass("customlabel");
		this.nameValue = new sap.m.Text({
			text : "152",
			wrapping : true
		});
		this.nameValue.addStyleClass("dimension");
		
		this.button = new sap.m.Button({
			text: "Submit",
			press: this.getController().submit()
		});
		
 		return new sap.m.Page({
			title: "Title",
			content: [
			          barcode,
			          nameLabel,
			          nameValue,
			          button
			]
		});
	}

});