Ext.define('app.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'app.view.Main'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'app-main'
    }],
    initComponent: function () {
        console.log("Viewport initComponent..");
        this.callParent(arguments);
    }
});