Ext.define("app.store.SystemMenuStore", {
    extend: "Ext.data.Store",
    model: "app.model.SystemMenuModel",
    autoLoad: false,
    proxy: {
        type: "rest",
        url: "http://localhost:8080/system_menu",
        reader: {
            type: "json",
            root: "systemMenu"
        }
    }
});