Ext.define("app.view.module.region.GridToolbar", {
   extend: 'Ext.toolbar.Toolbar',
   alias: 'widget.gridtoolbar',
   uses: [

   ],
   initComponent: function () {
       console.log("GridToolbar initComponent...");
       this.callParent(arguments);
   }
});