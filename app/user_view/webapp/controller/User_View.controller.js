sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel"
    //"../../../../srv/TrainData-service"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("userview.controller.User_View", {
            onInit: function () {

            },
            onSubmit: function(oEvent) {
                 var msg = 'Data Saved';
                 console.log(msg);
                var oModel = new sap.ui.model.odata.ODataModel({
                    groupId : "$direct",                  
                  synchronizationMode : "None",                
                    serviceUrl : "/train-data/",
                json : true
                  });

                var inputData = this.getView().byId("input").mProperties.value;
                var intentData = this.getView().byId("idComboBox").mProperties.value;
                var la_filters = {};

                la_filters.Text = inputData;
                la_filters.Target = intentData;    
                console.log(la_filters);
                if (la_filters.Target == "False"){
                    la_filters.Target = false}
                else
                    {la_filters.Target = true}
                sap.ui.getCore().setModel(oModel);

                oModel.create("/DataUI", la_filters , null, function(){
                    //debugger;
                    console.log("successfully created");
                    alert("Create successfull");
                },function(){
                   alert("Create failed");});

                /*
                oModel.create("/DataUI", la_filters , null, {method: 'POST',  success: function (oData) {    
                    console.log("successfully created");
                    alert("Create successfull");
                    debugger;
               },

              error: function (err) {
                  debugger;
                  var lvErrTxt = err.message;

              }}
                );
            */
        }
        });
    });
