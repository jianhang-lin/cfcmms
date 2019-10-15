Ext.define("app.view.main.menu.ButtonMainMenu", {
    extend: "app.ux.ButtonTransparent",
    alias: "widget.buttonmainmenu",
    viewModel: 'main',
    text: "菜单",
    glyph: 0xf0c9,
    initComponent: function () {
        console.log("ButtonMainMenu initComponent");
        this.menu = this.up("app-main").getViewModel().getMenus();
        this.callParent(arguments);
    }
});