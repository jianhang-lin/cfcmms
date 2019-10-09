Ext.define('app.view.main.region.Bottom', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainbottom',
    uses: [
        'app.ux.ButtonTransparent'
    ],
    defaults: {
        xtype: 'buttontransparent'
    },
    initComponent: function () {
        console.log("Bottom initComponent...");
        this.items = [{
            id: "bottom.company",
            text: '使用单位：',
            glyph: 0xf0f7
        }, {
            id: "bottom.user",
            text: '用户：',
            glyph: 0xf007
        }, '->', {
            id: "service.company",
            text: '服务单位：',
            glyph: 0xf059
        }, {
            id: "service.name",
            text: '服务人员：'
        }, {
            id: "service.phonenumber",
            text: 'tel：',
            glyph: 0xf095
        }, {
            id: "service.email",
            text: 'eMail：',
            glyph: 0xf003
        }, {
            id: "service.copyright",
            text: '©'
        }];
        this.listeners = {
            afterrender: function () {
                console.log("Top afterrender..");
                // 设置成透明
                this.setTransparent(document.getElementById("mainbottom-innerCt"));
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