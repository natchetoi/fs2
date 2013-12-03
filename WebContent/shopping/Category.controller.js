sap.ui.controller("shopping.Category", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created. Can be used to
	 * modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 */
	onInit : function() {

	},

	onBeforeShow : function(evt) {
		var con = this;
		var abap = window.localStorage.getItem("ABAP");
		if (abap === null) {
			abap = false;
		} else {
			abap = (abap === 'true');
		}

		if (abap) {
			// if ABAP Gateway radio button is selected in the settings dialog
			con.loadDataLocal();
//			con.loadDataAbap();
		} else {
			con.loadDataLocal();
			// if HANA Cloud radio button is selected in the settings dialog
//			con.loadDataCloud();
		}
	},
	profileTap : function(ev) {
		appC.navTo("MainMenu", true, undefined, undefined);
	},
	
	// loading the data from HANA Cloud backend
	loadDataLocal : function() {
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
		
	var oData = {ProductCategories:[
{id:0,Category:"Fruits", count:6 },	         
{id:1,Category:"Baking", count:4  },	         
{id:2,Category:"Beverages", count:8  },	         
{id:3, Category:"Canned", count:12  },	         
{id:4, Category:"Cereals", count:34  },	         
{id:5, Category:"Condiments", count:12  },	         
{id:6, Category:"Dessert", count:4  },	         
{id:7, Category:"Pasta", count:5  },

], Products: [
{id:1,Name:"Apple", Category:"Fruits", Calories:23, Price:"12.3", img:"images/fruit/appleS.png", LongDescription:"Apple is a fruit",
	Nutrition: ""},                 
{id:2,Name:"Grapefruit" , Category:"Fruits", img:"images/fruit/grapefruitS.png",},                 
{id:3,Name:"Lemon", Category:"Fruits", img:"images/fruit/lemonS.png" },                 
{id:4,Name:"Lime", Category:"Fruits", img:"images/fruit/limeS.png"},                 
{id:5,Name:"Pear", Category:"Fruits", img:"images/fruit/pearS.png"},                 
{id:6,Name:"Plum", Category:"Fruits", img:"images/fruit/plumS.png"},                 
{id:7,Name:"Hershey's Natural Unsweetened Cocoa", Category:"Baking", Calories:23, Price:"2.98", img:"images/bakery/0003400005200_180X180.jpg",Ingredients:"Cocoa", Weight:45,
   LongDescription:"Use for hot cocoa, rich chocolate desserts or in recipes calling for baking chocolate Kosher Natural source of flavonol antioxidants"},                 
{id:8,Name:"Jif Creamy Peanut Butter", Category:"Baking", Calories:"23", Price:"2.98", img:"images/bakery/0005150025516_180X180.jpg",Ingredients:"Peanuts,Sugar,Milk", Weight:13, 
  LongDescription: "Contains no preservatives 190 calories per 2 tablespoons No. 1 choice of choosy moms"},                 
 
], Ingredients: [
{id:1,Name:"Cocoa",Product: "Hershey's Natural Unsweetened Cocoa",  icon:"icons/Kosher.jpg"},                 
{id:2,Name:"Peanuts", Product: "Jif Creamy Peanut Butter", icon:"icons/nuts.png"},                 
{id:3,Name:"Pork", Product: "Pork",icon:"nonKosher"},                 
{id:4,Name:"Butter", Product: "Butter", icon:"Fat"},                 
],

	 };

	 	oData.UserName = ""; // TODO: put your user name and password here
	 	oData.Password = "";
	 	
	 	oModel.setData(oData);
	 	sap.ui.getCore().setModel(oModel);
	 	
//	 	return oData;		
	},
	
	// loading the data from HANA Cloud backend
	loadDataCloud : function() {
		sap.app.config.useAbap = false;
		var newUrl = "";
		var sServiceUrl = "";
		appC.appCID = "ESPM" + new Date().getTime();
		newUrl = sap.app.config.smpUrl + sap.app.config.connUrl + sap.app.config.cloudAppName;
		jQuery.sap.require("sap.ui.model.odata.ODataModel");
		mHeaders = {
			"X-SUP-APPCID" : appC.appCID
		};
		this.loginModel = new sap.ui.model.odata.ODataModel(newUrl, false, null, null, mHeaders);
		var oEntry = {};
		oEntry.DeviceType = sap.app.config.deviceType;
		this.loginModel.create(sap.app.config.connection, oEntry, null, null);
		if (sap.app.config.useWeb == true) {
			sServiceUrl = "proxy/cloudmobilebackend";
		} else {
			sServiceUrl = sap.app.config.smpUrl + sap.app.config.reqRepUrl + sap.app.config.cloudAppName;
		}

		$(function() {
			jQuery.sap.require("sap.ui.model.odata.ODataModel");
			mHeaders = {
				"X-SUP-APPCID" : appC.appCID
			};
			appC.oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true, null, null, mHeaders);
			appC.oModel.setSizeLimit(100);
			appC.oModel.attachRequestFailed(function(evt) {
				alert("Server error: " + evt.getParameter("message") + " - " + evt.getParameter("statusText"));
			});
			jQuery.sap.log.debug(appC.oModel);
			sap.ui.getCore().setModel(appC.oModel);
		});
	},

	// loading the data from ABAP Gateway backend
	loadDataAbap : function() {
		sap.app.config.useAbap = true;
		var newUrl = "";
		var sServiceUrl = "";
		appC.appCID = "ESPM" + new Date().getTime();
		newUrl = sap.app.config.smpUrl + sap.app.config.connUrl + sap.app.config.abapAppName;
		jQuery.sap.require("sap.ui.model.odata.ODataModel");
		mHeaders = {
			"X-SUP-APPCID" : appC.appCID
		};
		this.loginModel = new sap.ui.model.odata.ODataModel(newUrl, false, null, null, mHeaders);
		var oEntry = {};
		oEntry.DeviceType = sap.app.config.deviceType;
		this.loginModel.create(sap.app.config.connection, oEntry, null, null);
		if (sap.app.config.useWeb == true) {
			sServiceUrl = "proxy/abapmobilebackend";
		} else {
			sServiceUrl = sap.app.config.smpUrl + sap.app.config.reqRepUrl + sap.app.config.abapAppName;
		}
		$(function() {
			jQuery.sap.require("sap.ui.model.odata.ODataModel");
			mHeaders = {
				"X-SUP-APPCID" : appC.appCID
			};
			appC.oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, false, null, null, mHeaders);
			appC.oModel.refreshSecurityToken();
			appC.oModel.setSizeLimit(100);
			appC.oModel.attachRequestFailed(function(evt) {
				alert("Server error: " + evt.getParameter("message") + " - " + evt.getParameter("statusText"));
			});
			jQuery.sap.log.debug(appC.oModel);
			sap.ui.getCore().setModel(appC.oModel);
		});
	},

	// navigation from Category to Products
	productListTap : function(evt) {
		var param = {
			categoryId : evt.oSource.data("id"),
			categoryName : evt.oSource.getTitle()
		};
		appC.navTo("Product", true, undefined, param);
	},

	// clicking on the cart icon
	cartButtonTap : function(evt) {
		appC.navTo("Order", true, undefined, "");
	},

	// clicking on the settings button
	settingsTap : function(evt) {
		var con = this;
		var abap = window.localStorage.getItem("ABAP");
		if (abap === null) {
			abap = false;
		} else {
			abap = (abap === 'true');
		}
		var infoDialog = new sap.m.Dialog({
			title : "{i18n>SETTINGS_TEXT}",
			type : sap.m.DialogType.Message,
			content : [ new sap.m.VBox({
				items : [ appC.radioButton6 = new sap.m.RadioButton({
					text : "{i18n>CLOUD_LABEL}",
					groupName : "GroupA",
					selected : !abap,
				}), appC.radioButton7 = new sap.m.RadioButton({
					text : "{i18n>ABAP_LABEL}",
					groupName : "GroupA",
					selected : abap
				}) ]
			}) ],
			rightButton : new sap.m.Button({
				text : "OK",
				tap : function() {
					infoDialog.close();
					if (appC.radioButton7.getSelected() == true) {
						// reset cart
						appC.cartItems = new Array();
						window.localStorage.setItem("ABAP", true);
						con.loadDataAbap();
					} else if (appC.radioButton6.getSelected() == true) {
						// reset cart
						appC.cartItems = new Array();
						window.localStorage.setItem("ABAP", false);
						con.loadDataCloud();
					}
				}
			}),
			leftButton : new sap.m.Button({
				text : "Close",
				tap : function() {
					infoDialog.close();
				}
			}),
			afterClose : function(evt) {
				infoDialog.close();

			}
		});
		appC.openDialog(infoDialog);
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered (NOT before the
 * first rendering! onInit() is used for that one!).
 */
// onBeforeRendering: function() {
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the
 * HTML could be done here. This hook is the same one that SAPUI5 controls get after being rendered.
 */
// onAfterRendering: function() {
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
 */
// onExit: function() {
// }
});