Ext.define('app.controller.Root', {
    extend: 'Ext.app.Controller',
    xtype: "root",
    views: [
        'Main'
    ],
    init: function () {
        console.log("controller/Root.js init...");
        this.control({
            "#onClickButton": {
                click: this.onClickButton
            }
        });
    },

    onClickButton: function () {
        console.log("onClickButton.....");
        Ext.Msg.confirm('Confirm', 'Are you sure?', function (choice) {
            console.log(choice);
            if (choice === 'yes') {
                Ext.getCmp("west").setTitle("修改后的title");
            }
        }, this);
    }
});