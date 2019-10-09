Ext.define('app.view.main.region.Bottom', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainbottom',
    items: [
        {
            id: "bottom.company",
            text: '使用单位：'
        }, {
            id: "bottom.user",
            text: '用户：'
        }, '->', {
            id: "service.company",
            text: '服务单位：'
        }, {
            id: "service.name",
            text: '服务人员：'
        }, {
            id: "service.phonenumber",
            text: 'tel：'
        }, {
            id: "service.email",
            text: 'eMail：'
        }, {
            id: "service.copyright",
            text: '©'
        }
    ]
});