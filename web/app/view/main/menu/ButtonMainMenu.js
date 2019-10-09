Ext.define("app.view.main.menu.ButtonMainMenu", {
    extend: "app.ux.ButtonTransparent",
    alias: "widget.buttonmainmenu",
    text: "菜单",
    iconCls: "fa fa-list",
    initComponent: function () {
        console.log("ButtonMainMenu initComponent");
        this.menu = this.up("app-main").getViewModel().getMenus();
        this.callParent(arguments);
    }
});