Ext.define('app.view.module.region.Detail', {
    extend: 'Ext.grid.property.Grid',
    alias: 'widget.recorddetail',

    title: '记录明细',
    initComponent: function () {
        this.source = {
            '工程项目名称': 'title',
            '投资总额': '2929292'
        };
        this.callParent(arguments);
    }
});