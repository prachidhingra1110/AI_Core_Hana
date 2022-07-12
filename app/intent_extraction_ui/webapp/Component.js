sap.ui.define(["sap/fe/core/AppComponent",'sap/m/MessageToast'], function(AppComponent, MessageToast) {
    'use strict';

    return AppComponent.extend("intentextractionui.Component", {
        metadata: {
            manifest: "json"
        },

        createData : function(oEvent) {
			var msg = 'Data Saved';
			MessageToast.show(msg);
		}
    });
});
