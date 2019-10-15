Ext.define('app.view.main.menu.SettingMenu', {
    extend: 'app.ux.ButtonTransparent',
    alias: 'widget.settingmenu',
    text: '设置',
    glyph: 0xf013,
    initComponent: function () {
        console.log("SettingMenu initComponent");
        this.menu = [
            {
                text: '菜单样式',
                menu: [
                    {
                        text: '标准菜单',
                        handler: function () {
                            console.log("标准菜单 handler...");
                            Ext.getCmp("mainmenutree").hide();
                            Ext.getCmp("buttonmainmenu").hide();
                        }
                    }, {
                        text: '树形菜单',
                        handler: function () {
                            console.log("树形菜单 handler...");
                            Ext.getCmp("mainmenutree").show();
                            Ext.getCmp("buttonmainmenu").hide();
                        }
                    }, {
                        text: '按钮菜单',
                        handler: function () {
                            console.log("按钮菜单 handler...");
                            Ext.getCmp("mainmenutree").hide();
                            Ext.getCmp("buttonmainmenu").show();
                        }
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
});