Ext.define("app.view.module.region.Grid",{
    id: "modulegrid",
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