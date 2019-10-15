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
                            console.log("SettingMenu handler...");
                            if (Ext.getCmp("mainmenutree").hidden) {
                                Ext.getCmp("mainmenutree").show();
                            } else {
                                Ext.getCmp("mainmenutree").hide();
                            }
                        }
                    }, {
                        text: '树形菜单',
                    }, {
                        text: '按钮菜单',
                    }
                ]
            }
        ];
        this.callParent(arguments);
    },
});