Ext.define("app.view.main.region.MainMenuToolbar", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.mainmenutoolbar",
    defaults: {
        xtype: "buttontransparent"
    },
    items: [
        {
            glyph: 0xf100,
            tooltip: '在左边栏中显示树状菜单',
            disableMouseOver: true,
            margin: '0 -5 0 0',
            handler: function () {
                console.log("showLeftMenuRegion..." + Ext.getCmp("mainmenutree").hidden);
                Ext.getCmp("mainmenutree").show();
                Ext.getCmp("buttonmainmenu").hide();

                Ext.getCmp("mainmenutoolbar").hide();
            }
        }, {
            glyph: 0xf102,
            tooltip: '在顶部区域显示菜单',
            disableMouseOver: true,
            handler: function () {
                console.log("showMainMenuToolbar...");
                /*var tempItems = Ext.getCmp("mainmenutoolbar").items;
                var mainmenutoolbarLength = tempItems.length;

                for (var i=mainmenutoolbarLength - 1;i>1;i--) {
                    if (Ext.getCmp(tempItems.get(i).id).hidden) {
                        Ext.getCmp(tempItems.get(i).id).show();
                    } else {
                        Ext.getCmp(tempItems.get(i).id).hide();
                    }
                }*/
                Ext.getCmp("mainmenutree").hide();
                Ext.getCmp("buttonmainmenu").show();
            }
        }
    ],
    initComponent: function () {
        console.log("MainMenuToolbar initComponent");
        this.items = this.items.concat(this.getMenus());
        this.callParent();
    },
    getMenus: function () {
        console.log("MainMenuToolbar getMenus...");
        var items = [];
        Ext.Ajax.request({
            url: 'http://localhost:8080/system_menu',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            async: false,
            success: function (response, options) {
                var menuData = Ext.decode(response.responseText).systemMenu;
                Ext.Array.each(menuData, function (group) {
                    var submenu = [];
                    Ext.Array.each(group.items, function (menuitem) {
                        submenu.push({
                            mainmenu: 'true',
                            moduleName: menuitem.module,
                            text: menuitem.text,
                            icon: menuitem.icon,
                            glyph: menuitem.glyph,
                            handler: 'onMainMenuClick'
                        })
                    });
                    var item = {
                        text: group.text,
                        menu: submenu,
                        icon: group.icon,
                        glyph: group.glyph
                    };
                    items.push(item);
                });
                return items;
            }
        });
        return items;
    }
});