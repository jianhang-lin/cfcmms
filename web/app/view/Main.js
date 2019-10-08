Ext.define('app.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    xtype: 'app-main',
    layout: {
        type: 'border'
    },
    items: [
        {
            region: 'west',
            xtype: 'panel',
            title: 'west',
            width: 150,
            bodyCls: 'content-panel-body'
        },{
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Center Tab 1'
            }]
        }
    ],
    initComponent: function () {
        console.log("view/Main.js initComponent..");
        this.callParent(arguments);
    }
});