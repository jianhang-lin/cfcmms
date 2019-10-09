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
    uses: [
      'app.view.main.region.Top', 'app.view.main.region.Bottom'
    ],
    items: [
        {
            id: 'maintop',
            title: "fccc",
            xtype: 'maintop',
            region: 'north'
        }, {
            xtype: 'mainbottom',
            region: 'south'
        }, {
            id: 'west',
            region: 'west',
            xtype: 'panel',
            title: 'west',
            width: 250,
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            split: true,
            tbar: [{
                id: "onClickButton",
                text: 'Button'
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
        Ext.setGlyphFontFamily('FontAwesome');
        this.callParent(arguments);
    }
});