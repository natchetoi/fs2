sap.ui.jsview("shopping.Profile", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shopping.Profile
	*/ 
	getControllerName : function() {
		return "shopping.Profile";
	},
	onBeforeShow : function(evt) {
		this.getController().onBeforeShow(evt);
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shopping.Profile
	*/ 
	createContent : function(oController) {

//---------------------------------------------------------------		
		this.nameLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "First Name",
		});
		this.nameLabel.addStyleClass("customlabel");
		this.nameField = new sap.m.Input({
			type: sap.m.InputType.Text,
			maxLength : 10,
		});
		this.nameField.addStyleClass("dimension");
		this.nameItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.nameLabel, this.nameField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.LastNameLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Last Name",
		});
		this.LastNameLabel.addStyleClass("customlabel");
		this.LastNameField = new sap.m.Input({
			type: sap.m.InputType.Text,
			maxLength : 10,
		});
		this.LastNameField.addStyleClass("dimension");
		this.lastNameItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.LastNameLabel, this.LastNameField ],
			}) ]
		}),
//---------------------------------------------------------------		
		this.emailLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "E-Mail",
		});
		this.emailLabel.addStyleClass("customlabel");
		this.emailField = new sap.m.Input({
			type: sap.m.InputType.Email,
			maxLength : 10,
		});
		this.emailField.addStyleClass("dimension");
		this.emailItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.emailLabel, this.emailField ],
			}) ]
		}),
//---------------------------------------------------------------		
		
		this.addressLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Address",
		});
		this.addressLabel.addStyleClass("customlabel");
		this.addressField = new sap.m.Input({
			type: sap.m.InputType.Text,
			maxLength : 10,
		});
		this.addressField.addStyleClass("dimension");
		this.addressItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.addressLabel, this.addressField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.cityLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "City",
		});
		this.cityLabel.addStyleClass("customlabel");
		this.cityField = new sap.m.Input({
			type: sap.m.InputType.Text,
			maxLength : 10,
		});
		this.cityField.addStyleClass("dimension");
		this.cityItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.cityLabel, this.cityField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.stateLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "State",
		});
		this.stateLabel.addStyleClass("customlabel");
		this.stateField = new sap.m.Select({
			items: [new sap.ui.core.Item({text: "ON", key: "ON"}),
			        new sap.ui.core.Item({text: "QC", key: "QC"}),
			        new sap.ui.core.Item({text: "AB", key: "AB"}),
			       ]
		});
		this.stateField.addStyleClass("dimension");
		this.stateItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.stateLabel, this.stateField ],
			}) ]
		}),
//---------------------------------------------------------------

		this.countryLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Country",
		});
		this.countryLabel.addStyleClass("customlabel");
		this.countryField = new sap.m.Select({
			items: [new sap.ui.core.Item({text: "USA", key: "US"}),
			        new sap.ui.core.Item({text: "Canada", key: "CA"}),
			        new sap.ui.core.Item({text: "France", key: "FR"}),
			       ]
		});
		this.countryField.addStyleClass("dimension");
		this.countryItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.countryLabel, this.countryField ],
			}) ]
		}),
//---------------------------------------------------------------

		
		
		this.weightLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Weight",
		});
		this.weightLabel.addStyleClass("customlabel");
		this.weightField = new sap.m.Input({
			type: sap.m.InputType.Number,
			maxLength : 10,
			width : "100px"
		});
		this.weightField.addStyleClass("dimension");
		this.weightItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.weightLabel, this.weightField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.preferLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Preferences",
		});
		this.preferLabel.addStyleClass("customlabel");
		this.preferField = new sap.m.Select({
			items: [new sap.ui.core.Item({text: "None", key: "1"}),
			        new sap.ui.core.Item({text: "Diet", key: "2"}),
			        new sap.ui.core.Item({text: "Reduce Weight", key: "3"}),
			        new sap.ui.core.Item({text: "Gain muscles", key: "4"}),
			        new sap.ui.core.Item({text: "Economical", key: "5"}),
			        new sap.ui.core.Item({text: "Gedeonism", key: "6"}),
			       ]
		});
		this.preferField.addStyleClass("dimension");
		this.preferItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.preferLabel, this.preferField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.allergLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Allergies",
		});
		this.allergLabel.addStyleClass("customlabel");
		this.allergField = new sap.m.Select({
			items: [
			        new sap.ui.core.Item({text: "Corn", key: "1"}),
			        new sap.ui.core.Item({text: "Diary", key: "2"}),
			        new sap.ui.core.Item({text: "Eggs", key: "3"}),
			        new sap.ui.core.Item({text: "Gelatin", key: "4"}),
			        new sap.ui.core.Item({text: "Gluten", key: "5"}),
			        new sap.ui.core.Item({text: "Meat", key: "6"}),
			        new sap.ui.core.Item({text: "Mustard", key: "7"}),
			        new sap.ui.core.Item({text: "Peanuts", key: "8"}),
			        new sap.ui.core.Item({text: "Seeds", key: "9"}),
			        new sap.ui.core.Item({text: "Shellfish", key: "10"}),
			        new sap.ui.core.Item({text: "Soy", key: "11"}),
			        new sap.ui.core.Item({text: "Tree Nuts", key: "12"}),
			        new sap.ui.core.Item({text: "Wheat", key: "13"}),
			       ]
		});
		this.allergField.addStyleClass("dimension");
		this.allergItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.allergLabel, this.allergField ],
			}) ]
		}),
//---------------------------------------------------------------
		
		this.religLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Religious restrictions",
		});
		this.religLabel.addStyleClass("customlabel");
		this.religField = new sap.m.Select({
			items: [
			        new sap.ui.core.Item({text: "Halal", key: "H"}),
			        new sap.ui.core.Item({text: "Kosher", key: "K"}),
			        new sap.ui.core.Item({text: "Vegetarian", key: "V"}),
			       ]
		});
		this.religField.addStyleClass("dimension");
		this.religItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.religLabel, this.religField ],
			}) ]
		}),
//---------------------------------------------------------------			
		
		this.aboutLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "About me",
		});
		this.aboutLabel.addStyleClass("customlabel");
		this.aboutField = new sap.m.TextArea({
			width: "100%",
			rows: 3,
		});
		this.aboutField.addStyleClass("dimension");
		this.aboutItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.aboutLabel, this.aboutField ],
			}) ]
		}),
//---------------------------------------------------------------			
		
		
		this.LastNameLabel = new sap.m.Label({
			design : sap.m.LabelDesign.Bold,
			text : "Last Name",
		});
		this.LastNameLabel.addStyleClass("customlabel");
		this.LastNameField = new sap.m.Input({
			type: sap.m.InputType.Text,
			maxLength : 10,
		});
		this.LastNameField.addStyleClass("dimension");
		this.lastNameItem = new sap.m.CustomListItem({
			content : [ new sap.m.VBox({
				items : [ this.LastNameLabel, this.LastNameField ],
			}) ]
		}),
//---------------------------------------------------------------		

		// create page
		this.page = new sap.m.Page({
			title : "{Name}",
			showNavButton : true,
			navButtonTap : [ oController.navButtonTap, oController ],
			// icon : appV.bindingIcon.ui5,
			headerContent : [ new sap.m.Button({
				icon : appV.bindingIcon.cart,
				tap : [ oController.cartButtonTap, oController ]
			}), ],
			footer : new sap.m.Bar({
				contentLeft: [ 
				 new sap.m.Button({
					text : "Nutrition",
					tap : [ oController.NutritionFacts, oController ]
				}) ],
				contentMiddle : [ new sap.m.Button({
					text : "Add to Cart",
					tap : [ oController.addToCartButtonTap, oController ]
				}) ],
				contentRight : [ new sap.m.Button({
				text : "Dietitian",
				tap : [ oController.bookDietAppointmentTap, oController ]
			}) ]
				
			}),
			content : [
					new sap.m.List({
						items : [
						        this.nameItem,
  					         	this.lastNameItem,
  					         	this.emailItem,
  					         	this.addressItem,
  					         	this.cityItem,
  					         	this.stateItem,
  					         	this.countryItem,
  					         	this.weightItem,
  					         	this.preferItem,
  					         	this.allergItem,
  					         	this.religItem,
  					         	this.aboutItem,						         
						        ],
					}), ]
		});
		return this.page;
    }
});