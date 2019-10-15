Ext.define("app.view.main.region.ButtonMainMenu", {
    extend: "app.ux.ButtonTransparent",
    alias: "widget.buttonmainmenu",
    viewModel: 'main',
    text: "菜单",
    glyph: 0xf0c9,
    initComponent: function () {
        console.log("ButtonMainMenu initComponent");
        this.menu = this.getMenus();
        this.callParent(arguments);
    },
    getMenus: function () {
        console.log("ButtonMainMenu getMenus...");
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