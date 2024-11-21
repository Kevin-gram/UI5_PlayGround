sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], function(Controller, JSONModel, MessageBox, MessageToast) {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
     onInit(){
        const oModel=new JSONModel()
        oModel.loadData("model/data.json")
        .then(()=>console.log("there was somthing wrong loading the data"))
        .catch((error)=>console.error("There was an error ",error))
        this.getView().setModel(oModel)
     },
        onPress: function() {
            MessageToast.show("Button Pressed!");
            console.log()
        },
        onPost: function(oEvent) {
            const sValue = oEvent.getSource().getValue();
            MessageBox.information(sValue || "No input provided.");
        }
    });
});
