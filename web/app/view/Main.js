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
            width: 250,
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            split: true,
            tbar: [{
                text: 'Button',
                handler: 'onClickButton'
            }]
        },{
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Center Tab 1',
                html: '<h2>Content appropriate for the current navigation.</h2>'
            }]
        }
    ],
    initComponent: function () {
        console.log("view/Main.js initComponent..");
        this.callParent(arguments);
    }
});