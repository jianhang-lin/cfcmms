Ext.define('app.controller.Module', {
    extend: 'Ext.app.Controller',
    xtype: "module",
    models: [
        'ModuleModel'
    ],
    stores: [
        'ModuleStore'
    ],
    views: [
        'Module'
    ],
    init: function () {
        console.log("controller/Module.js init...");
        /*var store = Ext.getStore("MainStore");
        store.load({
            params: {},
            callback: function () {
                console.log("MainStore callback...");

                // set Top
                Ext.getCmp("system.name").setText(store.getAt(0).get("system").name);

                Ext.getCmp("service.copyright").setText(Ext.getCmp("service.copyright").getText() + store.getAt(0).get("service").copyright);
            }
        });*/

        this.control({
        });
    }
});