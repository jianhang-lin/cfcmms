Ext.define("app.store.MainStore", {
    extend: "Ext.data.Store",
    model: "app.model.MainModel",
    autoLoad: false,
    proxy: {
        type: "rest",
        url: "http://localhost:8080/main",
        reader: {
            type: "json",
            root: "main"
        }
    }
});