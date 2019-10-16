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
       console.log("Module initComponent..");
       this.glyph = this.getGlyph();
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
   },
   getGlyph: function () {
       console.log("getGlyph");
       var glyph = "";
       Ext.Ajax.request({
           url: 'http://localhost:8080/module',
           method: 'get',
           headers: {
               'Content-Type': 'application/json'
           },
           async: false,
           success: function (response, options) {
               var moduleData = Ext.decode(response.responseText).module;
               glyph = moduleData[0].glyph;
               return glyph;
           }
       });
       return glyph;
   }
});