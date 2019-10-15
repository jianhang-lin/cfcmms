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
        'app.view.main.region.Top',
        'app.view.main.region.Bottom',
        'app.view.main.region.MainMenuToolbar',
        'app.view.main.region.MainMenuTree',
        'app.view.main.region.AccordionMainMenu'
    ],
    items: [
        {
            id: 'maintop',
            title: "",
            xtype: 'maintop',
            region: 'north'
        }, {
            id: 'mainmenutoolbar',
            xtype: 'mainmenutoolbar',
            region: 'north'
        }, {
            id: 'mainbottom',
            xtype: 'mainbottom',
            region: 'south'
        }, {
            id: 'mainmenutree',
            title: '导航菜单',
            region: 'west',
            xtype: 'mainmenutree',
            width: 250,
            split: true,
            hidden: true
        }, {
            id: 'mainmenuaccordion',
            region: 'west',
            xtype: 'mainmenuaccordion',
            width: 250,
            split: true,
            hidden: true
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [{
                title: 'Center Tab 1',
                html: '<h2>Content appropriate for the current navigation.</h2>',
                glyph: 0xf012
            }],
        }
    ],
    initComponent: function () {
        console.log("view/Main.js initComponent..");
        Ext.setGlyphFontFamily('FontAwesome');
        this.callParent(arguments);
    }
});