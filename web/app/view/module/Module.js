Ext.define('app.view.module.Module', {
   extend: 'Ext.panel.Panel',
   alias: 'widget.modulepanel',
   requires: [

   ],
   uses: [
       'app.view.module.region.Navigate'
   ],
   controller: '',
   viewModel: {

   },
   layout: 'border',
   initComponent: function () {
       this.items = [{
           xtype: 'navigate',
           region: 'west',
           width: 250,
           collapsible: true,
           split: true
       }];
       this.callParent(arguments);
   }
});