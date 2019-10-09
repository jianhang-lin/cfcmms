Ext.define("app.ux.ButtonTransparent", {
   extend: "Ext.button.Button",
   alias: "widget.buttontransparent",
   initComponent: function () {
      console.log("ButtonTransparent initComponent...");
      this.listeners = {
         mouseout: function () {
            console.log("mouseout.." + this.id);
            this.setTransparent(document.getElementById(this.id));
         },
         mouseover: function () {
            console.log("mouseover.." + this.id);
            var b = document.getElementById(this.id);
            b.style.backgroundImage = '';
            b.style.backgroundColor = '';
            b.style.borderColor = '';
         },
         afterrender: function () {
            console.log("afterrender..");
            this.setTransparent(document.getElementById(this.id));
         }
      };
      this.callParent(arguments);
   },

   setTransparent: function (b) {
      b.style.backgroundImage = '#FFF';
      b.style.backgroundColor = '#FFF';
      b.style.borderColor = '#FFF';
   }
});