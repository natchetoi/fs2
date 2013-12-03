jQuery.sap.declare("sap.app.config");

sap.app.config = {

	// If 'false' SMP is connected to ABAP Backend. Otherwise SMP connected to HANA Cloud backend
	useAbap : false,

	// when useWeb flag is set to true, the app can be run as a web app.
	// when useWeb flag is set to false, the app can be run as a mobile app
	useWeb : true,

	// default SMP URL for espmhana account
	smpUrl : "https://localhost/food1/",

	// default settings for HANA Cloud
	cloudAppName : "espm_shopping_cloud",
	cloudImgName : "espm_shopping_cloud_img",

	// default settings for ABAP Gateway
	abapAppName : "espm_shopping_abap",
	abapImgName : "espm_shopping_abap_img",

	connection : "/Connections",
	deviceType : "Android",

	// connection url for HANA Cloud
	connUrl : "/public/odata/applications/latest/",

	reqRepUrl : "/public/",

	// Symbol for Currency Euro
	currencySymbol : "$",

	// binding for different Collection
	prodCategoriesCollection : "/ProductCategories",
	productCollection : "/Products",
	customerCollection : "/Customers",
	salesOrderHeaderCollection : "/SalesOrderHeaders",

	// Function Import for GetCustomerByEmailAddress
	getCustomerByEmailAddress : "/GetCustomerByEmailAddress"
};