Ext.define('app.view.module.Module', {
   extend: 'Ext.panel.Panel',
   alias: 'widget.modulepanel',
   requires: [
       'app.model.ModuleModel',
       'app.view.module.factory.ModelFactory'
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
       var moduleData = this.getModuleData();
       this.glyph = moduleData.glyph;
       this.model = app.view.module.factory.ModelFactory.getModelByModule(moduleData);
       console.log(this.model);
       this.store = new Ext.data.Store({
           model: this.model,
           autoLoad: true,
           proxy: {
               type: 'localstorage',
               id: 'module' + '__' + moduleData.moduleName
           }
       });
       this.items = [{
           xtype: 'navigate',
           region: 'west',
           width: 250,
           collapsible: true,
           split: true
       }, {
           xtype: 'modulegrid',
           region: 'center',
           store: this.store
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
   getModuleData: function () {
       console.log("getGlyph");
       var data = null;
       Ext.Ajax.request({
           url: 'http://localhost:8080/module',
           method: 'get',
           headers: {
               'Content-Type': 'application/json'
           },
           async: false,
           success: function (response, options) {
               var moduleData = Ext.decode(response.responseText).module;
               data = moduleData[0];
               return data;
           }
       });
       return data;
   }
});