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
            text: '主页'
        }, {
            text: '帮助'
        }, {
            text: '关于'
        }, {
            text: '注销'
        }, '->', '->', {
            text: '设置'
        }];
        this.callParent(arguments);
    }
});