Ext.define('cfcmms.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Fit',
        'cfcmms.view.Main'
    ],
    layout: {
        type: 'fit'
    },
    items: [{
        xtype: 'app-main'
    }]
});