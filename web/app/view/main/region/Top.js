Ext.define("app.view.main.region.Top", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.maintop",
    initComponent: function () {
        console.log("Top init..");
        this.items = [{
            id: 'system.iconUrl',
            xtype: 'image',
            hidden: true,
            src: ''
        }, {
            id: "system.name",
            xtype: 'label',
            text: "",
            style: 'font-size:20px;color:blue;'
        }, {
            id: "system.version",
            xtype: 'label',
            text: ""
        }, '->', {
            text: '菜单',
            glyph: 0xf0c9,
            menu: [
                {
                    text: '工程管理',
                    menu: [
                        {
                            text: '工程项目'
                        }, {
                            text: '工程标段'
                        }
                    ]
                }
            ]
        }, ' ', ' ', {
            text: '主页',
            glyph: 0xf015
        }, {
            text: '帮助',
            glyph: 0xf059
        }, {
            text: '关于',
            glyph: 0xf06a
        }, {
            text: '注销',
            glyph: 0xf011
        }, '->', '->', {
            text: '搜索',
            glyph: 0xf002
        }, {
            text: '设置',
            glyph: 0xf013
        }];
        this.callParent(arguments);
    }
});