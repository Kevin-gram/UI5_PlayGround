sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function(Controller, ODataModel, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
        onInit: function() {
            // Set up OData model programmatically
            const sServiceUrl = "/V2/Northwind/Northwind.svc/";
            const oODataModel = new ODataModel(sServiceUrl);
            this.getView().setModel(oODataModel);

            // Optional: Test if data loads successfully
            oODataModel.read("/Products", {
                success: function(oData) {
                    console.log("Data loaded successfully:", oData);
                },
                error: function(oError) {
                    console.error("Error loading OData:", oError);
                }
            });
        },
        onPress: function() {
            MessageToast.show("Button Pressed!");
        },
        onPost: function(oEvent) {
            const sValue = oEvent.getSource().getValue();
            MessageBox.information(sValue || "No input provided.");
        }
    });
});
