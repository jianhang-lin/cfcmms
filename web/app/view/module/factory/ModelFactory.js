Ext.define("app.view.module.factory.ModelFactory", {
    statics: {
        getModelByModule: function (moduleModel) {
            console.log("ModelFactory getModelByModule moduleModel...");
            console.log(moduleModel);
            debugger;
            var model  = Ext.define("app.model." + moduleModel.moduleName, {
                extend: 'Ext.data.Model',
                idProperty: moduleModel.primaryKey,
                fields: this.getFields(moduleModel),
            });
            return model;
        },

        getFields: function (module) {
            debugger;
            var fields = [];
            for (var i in module.fields) {
                var fd = module.fields[i];
                var field = {
                    name: fd.fieldName,
                    title: fd.title,
                    type: this.getTypeByStr(fd.fieldType)
                };
                if (field.type == 'string') {
                    field.useNull = true;
                    field.serialize = this.convertToNull();
                }
                if (field.type == 'date') {
                    field.dateWriteFormat = 'Y-m-d';
                    field.dateReadFormat = 'Y-m-d';
                }
                if (field.type == 'datetime') {
                    field.dateReadFormat = 'Y-m-d H:i:s';
                }
                fields.push(field);
            }
            return fields;
        },
        getTypeByStr: function (str) {
            switch (str) {
                case 'String':
                    return 'string';
                case 'Boolean':
                    return 'boolean';
                case 'Integer':
                    return 'int';
                case 'Date':
                    return 'date';
                case 'Datetime':
                    return 'date';
                case 'Double':
                case 'Float':
                case 'Percent':
                    return 'float';
                default:
                    return 'string';
            }
        },

        convertToNull: function (v) {
            return v? v:null;
        }
    }
});