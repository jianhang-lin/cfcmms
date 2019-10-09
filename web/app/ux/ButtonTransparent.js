Ext.define("app.ux.ButtonTransparent", {
   extend: "Ext.button.Button",
   alias: "widget.buttontransparent",
   text: "ButtonTransparentText",
   initComponent: function () {
      console.log("ButtonTransparent initComponent...");
      this.callParent(arguments);
   }
});