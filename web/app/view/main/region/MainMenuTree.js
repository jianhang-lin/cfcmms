Ext.define('app.view.main.region.MainMenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mainmenutree',
    title: '导航菜单',
    glyph: 0xf0c9,
    rootVisible: false,
    lines: true,
    viewModel: 'main',
    users: [
        'app.view.module.Module'
    ],
    tools: [
        {
            id: 'down',
            itemId: 'down',
            type: 'down',
            tooltip: '显示折叠菜单',
            hidden: false,
            handler: function () {
                console.log("显示折叠菜单");
                Ext.getCmp("mainmenutree").hide();
                Ext.getCmp("mainmenuaccordion").show();
            }
        }, {
            type: 'toggle',
            tooltip: '切换到标准菜单',
            hidden: false,
            handler: function () {
                console.log("切换到标准菜单");
                Ext.getCmp("mainmenutree").hide();
                Ext.getCmp("mainmenuaccordion").hide();
                Ext.getCmp("buttonmainmenu").show();
            }
        }, {
            type: 'collapse',
            tooltip: '折叠所有菜单项',
            hidden: true,
            handler: function () {
                console.log("折叠所有菜单项");
            }
        }, {
            type: 'pin',
            tooltip: '层叠方式显示菜单',
            hidden: true,
            handler: function () {
                console.log("层叠方式显示菜单");
            }
        }
    ],
    listeners: {
        itemclick: 'onMainMenuClick'
    },
    initComponent: function () {
        console.log("MainMenuTree initComponent...");
        this.store = Ext.create('Ext.data.TreeStore', {
            root: {
                text: '导航菜单',
                leaf: false,
                expanded: true,
                children: []
            }
        });
        var menus = this.getMenus();
        var root = this.store.getRootNode();
        for (var i in menus) {
            var menugroup = menus[i];
            var menuitem = root.appendChild({
                text: menugroup.text,
                expanded: menugroup.expanded,
                icon: menugroup.icon,
                glyph: menugroup.glyph
            });
            for (var j in menugroup.menu) {
                var menumodule = menugroup.menu[j];
                var childnode = {
                    moduleId: menumodule.text,
                    moduleName: menumodule.module,
                    text: menumodule.text,
                    leaf: true
                };
                menuitem.appendChild(childnode);
            }
        }
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
                            handler: this.onMainMenuClick
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
    },
    onMainMenuClick: function (s, r) {
        console.log("tree onMainMenuClick");
        var maincenter = Ext.getCmp("maincenter");
        var moduleTab = Ext.create('app.view.module.Module', {
            closable: true,
            title: r.raw.text
        });
        maincenter.setActiveTab(maincenter.add(moduleTab));
    }
});