Ext.define("app.view.main.MainMenuToolbar", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.mainmenutoolbar",
    defaults: {
        xtype: "buttontransparent"
    },
    requires: [
        "app.view.main.widget.MenuChangeToolbar"
    ],
    items: [
        {
            xtype: 'menuchangetoolbar'
        }, ''
    ],
    initComponent: function () {
        console.log("MainMenuToolbar initComponent");
        this.items = this.items.concat(this.up("app-main").getViewModel().getMenus());
        this.callParent();
    }
});