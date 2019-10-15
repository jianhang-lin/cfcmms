Ext.define('app.controller.Root', {
    extend: 'Ext.app.Controller',
    xtype: "root",
    models: [
        'MainModel', 'SystemMenuModel'
    ],
    stores: [
        'MainStore', 'SystemMenuStore'
    ],
    views: [
        'Main'
    ],
    init: function () {
        console.log("controller/Root.js init...");
        var store = Ext.getStore("MainStore");
        store.load({
            params: {},
            callback: function () {
                console.log("MainStore callback...");

                // set Top
                Ext.getCmp("system.name").setText(store.getAt(0).get("system").name);
                if (store.getAt(0).get("system").iconUrl === "") {
                    Ext.getCmp("system.iconUrl").hide();
                } else {
                    Ext.getCmp("system.iconUrl").show();
                    Ext.getCmp("system.iconUrl").setSrc(store.getAt(0).get("system").iconUrl);
                }
                Ext.getCmp("system.version").setText(store.getAt(0).get("system").version);

                // set bottom
                Ext.getCmp("bottom.company").setText(Ext.getCmp("bottom.company").getText() + store.getAt(0).get("user").name);
                Ext.getCmp("bottom.user").setText(Ext.getCmp("bottom.user").getText() + store.getAt(0).get("user").name);
                Ext.getCmp("service.company").setText(Ext.getCmp("service.company").getText() + store.getAt(0).get("service").company);
                Ext.getCmp("service.name").setText(Ext.getCmp("service.name").getText() + store.getAt(0).get("service").name);
                Ext.getCmp("service.phonenumber").setText(Ext.getCmp("service.phonenumber").getText() + store.getAt(0).get("service").phonenumber);
                if (store.getAt(0).get("service").email === "") {
                    Ext.getCmp("service.email").hide();
                } else {
                    Ext.getCmp("service.email").show();
                    Ext.getCmp("service.email").setText(Ext.getCmp("service.email").getText() + store.getAt(0).get("service").email);
                }
                Ext.getCmp("service.copyright").setText(Ext.getCmp("service.copyright").getText() + store.getAt(0).get("service").copyright);
            }
        });

        this.control({
            "#onClickButton": {
                click: this.onClickButton
            },
            "#hiddenTopBottom": {
                click: this.hiddenTopBottom
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
    },

    hiddenTopBottom: function () {
        console.log("hiddenTopBottom...");
        Ext.getCmp("maintop").hide();
        Ext.getCmp("mainbottom").hide();
        if (!this.showButton) {
            this.showButton = Ext.widget('component', {
                glyph: 0xf103,
                //view: this.getView(),
                floating: true,
                x : document.body.clientWidth -32,
                y: 0,
                height: 4,
                width: 26,
                style: 'background-color:#cde6c7',
                listeners: {
                    el: {
                        click: function (el) {
                            var c = Ext.getCmp(el.target.id);
                            Ext.getCmp("maintop").show();
                            Ext.getCmp("mainbottom").show();
                            c.hide();
                        }
                    }
                }
            })
        };
        this.showButton.show();
    }
});