Ext.define("app.view.main.widget.MenuChangeToolbar", {
    extend: "Ext.Component",
    alias: "widget.menuchangetoolbar",
    html: '<span id="menu_buttonmenu" class="fa fa-caret-up menuchange"></span>'
        + '<span id="menu_treemenu" class="fa fa-caret-down menuchange"></span>',
    listeners: {
        render: function () {
            Ext.get('menu_treemenu').on('click', function () {
                this.up('app-main').getController().showLeftMenuRegion();
            }, this);
            Ext.create('Ext.tip.ToolTip', {
                target: 'menu_buttonmenu',
                html: 'aaaa'
            })
        }
    }
});