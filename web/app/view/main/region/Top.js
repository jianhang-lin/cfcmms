Ext.define("app.view.main.region.Top", {
    extend: "Ext.toolbar.Toolbar",
    alias: "widget.maintop",
    uses: [
        'app.ux.ButtonTransparent',
        'app.view.main.region.ButtonMainMenu'
    ],
    defaults: {
        xtype: 'buttontransparent'
    },
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
            xtype: 'buttonmainmenu'
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
            glyph: 0xf013,
        }, {
            id: 'hiddenTopBottom',
            tooltip: '隐藏顶部和底部区域',
            glyph: 0xf102
        }];
        this.listeners = {
            afterrender: function () {
                console.log("Top afterrender..");
                // 设置成透明
                this.setTransparent(document.getElementById("maintop-innerCt"));
            }
        };
        this.callParent(arguments);
    },

    setTransparent: function (b) {
        b.style.backgroundImage = '#FFF';
        b.style.backgroundColor = '#FFF';
        b.style.borderColor = '#FFF';
    }
});