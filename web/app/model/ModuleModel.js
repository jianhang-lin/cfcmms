Ext.define("app.model.ModuleModel", {
    extend: "Ext.data.Model",
    fields: [
        "moduledId",
        "moduleGroup",
        "moduleName",
        "title",
        "glyph",
        "shortName",
        "englishName",
        "englishShortName",
        "description",
        "remark"
    ]
});