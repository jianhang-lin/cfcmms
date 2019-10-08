Ext.define('app.Application', {
    name: 'app',
    extend: 'Ext.app.Application',
    views: [

    ],
    controllers: [
        "Root"
    ],

    stores: [

    ],
    launch: function() {
        console.log("Application launch..");
    },
    init: function () {
        console.log("Application init..");
        this.callParent(arguments);
    }
});