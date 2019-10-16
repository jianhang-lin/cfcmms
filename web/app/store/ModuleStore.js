Ext.define("app.store.ModuleStore", {
    extend: "Ext.data.Store",
    model: "app.model.ModuleModel",
    autoLoad: false,
    proxy: {
        type: "rest",
        url: "http://localhost:8080/module",
        reader: {
            type: "json",
            root: "module"
        }
    }
});