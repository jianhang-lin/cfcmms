Ext.define("app.view.module.region.Grid",{
    extend: 'Ext.grid.Panel',
    alias: 'widget.modulegrid',
    uses: [
        'app.view.module.region.GridToolbar'
    ],
    dockedItems: [
        {
            xtype: 'gridtoolbar',
            dock: 'top'
        }
    ],
    columns: [
        {
            dataIndex: 'tf_name',
            text: '工程项目名称',
            width: 250
        }, {
            dataIndex: 'tf_budget',
            text: '投资总额'
        }
    ],
    store: new Ext.data.Store({
        fields: ['tf_name', {
            name: 'tf_budget',
            type: 'float'
        }],
        data: [{
            tf_name: '安居房建设工程',
            tf_budget: 1230000
        }, {
            tf_name: '道路建设工程',
            tf_budget: 453092
        }]
    })
});