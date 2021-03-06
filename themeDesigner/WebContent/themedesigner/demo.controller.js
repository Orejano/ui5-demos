sap.ui.controller("themedesigner.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf themedesigner.demo
*/
	onInit: function() {

		
		var oData = {
				names: [{
					Name: "Dinosaur",
					Place: "Mountain"
				}, {
					Name: "Elephant",
					Place: "Forest"
				}, {
					Name: "Whale",
					Place: "Sea"
				}, {
					Name: "Duck",
					Place: "Water"
				}, {
					Name: "Monkey",
					Place: "Tree"
				}]
			};

			// create a oModel with this oData
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData(oData);

			sap.ui.getCore().setModel(oModel,"list");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf themedesigner.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf themedesigner.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf themedesigner.demo
*/
//	onExit: function() {
//
//	}

});