Ext.define("app.view.module.region.Grid",{
    extend: 'Ext.grid.Panel',
    alias: 'widget.modulegrid',
    uses: [
        'app.view.module.region.GridToolbar',
        'app.view.module.factory.ColumnsFactory'
    ],
    dockedItems: [
        {
            xtype: 'gridtoolbar',
            dock: 'top'
        }
    ],
    columnLines: true,
    columns: [
        {
            dataIndex: 'name',
            text: '工程项目名称',
            width: 250
        }, {
            dataIndex: 'budget',
            text: '投资总额'
        }
    ],
    store: new Ext.data.Store({
        fields: ['name', {
            name: 'budget',
            type: 'float'
        }],
        data: [{
            name: '安居房建设工程',
            budget: 1230000
        }, {
            name: '道路建设工程',
            budget: 453092
        }]
    }),
    viewConfig: {
        stripeRows: true,
        enableTextSelection: true
    },
    initComponent: function () {
        console.log("Grid initComponent...");
        var moduleData = this.getModuleData();
        this.title = moduleData.title;

        this.columns = app.view.module.factory.ColumnsFactory.getColumns(moduleData, 10);

        this.callParent(arguments);
    },
    getModuleData: function () {
        console.log("Grid getModule...");
        var data = null;
        Ext.Ajax.request({
            url: 'http://localhost:8080/module',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
            async: false,
            success: function (response, options) {
                var moduleData = Ext.decode(response.responseText).module;
                data = moduleData[0];
                return data;
            }
        });
        return data;
    },
});