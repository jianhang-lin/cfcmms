Ext.define('app.view.main.region.AccordionMainMenu', {
   extend: 'Ext.panel.Panel',
   alias: 'widget.mainmenuaccordion',
   title: '系统菜单',
   glyph: 0xf0c9,
   layout: {
       type: 'accordion',
       animate: true
   },
   viewModel: 'main',
   initComponent: function () {
       console.log("AccordionMainMenu initComponent...");
       this.items = [];
       var menus = this.getMenus();
       for (var i in menus) {
           var menugroup = menus[i];
           var accpanel = {
               menuAccordion: true,
               xtype: 'panel',
               title: menugroup.text,
               bodyStyle: {
                   padding: '10px'
               },
               layout: 'fit',
               dockedItems: [{
                   dock: 'left',
                   xtype: 'toolbar',
                   items: []
               }],
               glyph: menugroup.glyph
           };
           for (var j in menugroup.menu) {
               var menumodule = menugroup.menu[j];
               accpanel.dockedItems[0].items.push({
                   xtype: 'buttontransparent',
                   text: menumodule.text,
                   glyph: menumodule.glyph,
                   handler: this.onMainMenuClick
               });
           }
           this.items.push(accpanel);
       };
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
                            text: menuitem.text, // this.addSpace(menuitem.text, 12),
                            icon: menuitem.icon,
                            glyph: menuitem.glyph
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
    addSpace: function (text, len) {
        console.log(text.length);
        var result = text;
        for (var i = text.length; i < len; i++) {
            result += " ";
        }
        return result;
    },
    onMainMenuClick: function () {
        console.log('AccordionMainMenu onMainMenuClick...');
    }
});