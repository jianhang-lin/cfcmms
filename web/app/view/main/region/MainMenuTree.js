Ext.define('app.view.main.region.MainMenuTree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.mainmenutree',
    title: '系统菜单',
    glyph: 0xf0c9,
    rootVisible: false,
    lines: true,
    viewModel: 'main',
    initComponent: function () {
        console.log("MainMenuTree initComponent...");
        this.store = Ext.create('Ext.data.TreeStore', {
            root: {
                text: '系统菜单',
                leaf: false,
                expanded: true
            }
        });
        var menus = null;
        this.callParent(arguments);
    }
});