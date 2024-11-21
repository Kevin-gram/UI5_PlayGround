sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/m/MessageToast"
], (Controller, MessageBox, MessageToast) => {
    "use strict";
    return Controller.extend("ui5.walkthrough.Controller.App", {
        onPress() {
            MessageToast.show("Here I am again Buddy!...")
        }, 
        onPost(oEvent) {
            const oValue = oEvent.getSource().getValue();
            MessageBox.error(oValue || "There is no message for you already");
        }
    });
});