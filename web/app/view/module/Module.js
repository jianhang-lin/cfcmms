Ext.define('app.view.module.Module', {
   extend: 'Ext.panel.Panel',
   alias: 'widget.modulepanel',
   requires: [

   ],
   uses: [
       'app.view.module.region.Navigate',
       'app.view.module.region.Grid',
       'app.view.module.region.Detail'
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
       }, {
           xtype: 'modulegrid',
           region: 'center'
       }, {
           xtype: 'recorddetail',
           region: 'east',
           width: 250,
           collapsible: true,
           collapseMode: 'Mini',
           split: true
       }];
       this.callParent(arguments);
   }
});