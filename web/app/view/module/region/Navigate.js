Ext.define("app.view.module.region.Navigate", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.navigate',
    title: '导航',
    initComponent: function () {
        console.log("Navigate initComponent...");
        this.callParent(arguments);
    }
});