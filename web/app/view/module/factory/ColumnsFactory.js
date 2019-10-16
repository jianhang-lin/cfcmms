Ext.define("app.view.module.factory.ColumnsFactory", {
    statics: {
        getColumns: function (moduleData, schemeOrderId) {
            var scheme = moduleData.gridSchemes[0];
            var columns = [];
            for (var i in scheme.schemeGroups) {
                var sg = scheme.schemeGroups[i];
                var isGroup = sg.showHeaderSpans;
                var group = {
                    gridGroupId: sg.gridGroupId,
                    text: sg.gridGroupName,
                    locked: sg.locked,
                    columns:[]
                };

                for (var j in sg.groupFields) {
                    var gf = sg.groupFields[j];
                    var fd = this.getFieldDefine(gf.fieldId, moduleData.fields);
                    var field;
                    if (fd.hidden) {
                        continue;
                    }
                    field = this.getColumn(gf, fd, moduleData);
                    field.locked = sg.locked;
                    if (isGroup) {
                        this.canReduceTitle(group, field);
                        group.columns.push(field);
                    } else {
                        columns.push(field);
                    }
                }
                if (isGroup) {
                    this.canReduceTitle(group, field);
                    columns.push(group);
                }
            }
            console.log(columns);
            return columns;
        },

        canReduceTitle: function (group, field) {
            if (field.text.indexOf(group.text) == 0) {
                field.text = field.text.slice(group.text.length).replace('(', '').replace(')', '').replace(' (', '')
                    .replace(') ', '');
                if (field.text.indexOf("<br/>") == 0) {
                    field.text = field.text.slice(5);
                }
            }
        },

        getColumn: function (gf, fd, module) {
            var ft = fd.title.replace(new RegExp('--', 'gm'), '<br/>');
            if (fd.behindText) {
                ft += '<br/>(' + fd.behindText + ')';
            }
            var field = {
                filter: {},
                maxWidth: 800,
                gridFieldId: gf.gridFieldId,
                sortable: true,
                text: ft,
                dataIndex: fd.fieldName
            }

            switch (fd.fieldType) {
                case 'Date':
                    Ext.apply(field, {
                        xtype: 'datecolumn',
                        align: 'center',
                        width: 100
                    });
                    break;
                case 'Datetime':
                    Ext.apply(field, {
                        xtype: 'datecolumn',
                        align: 'center',
                        width: 130
                    });
                    break;
                case 'Boolean':
                    field.xtype = 'checkcolumn';
                    field.stopSelection = false;
                    field.processEvent = function (type) {
                        if (type == 'click') {
                            return false;
                        }
                    }
                    break;
                case 'Integer':
                    Ext.apply(field, {
                        align: 'center',
                        xtype: 'numbercolumn',
                        tdCls: 'intcolor',
                        format: '#'
                    });
                    break;
                case 'Percent':
                    Ext.apply(field, {
                        align: 'center',
                        xtype: 'numbercolumn',
                        width: 110
                    });
                    break;
                case 'String':
                    break;
                default:
                    break;
            }
            if (fd.allowSummary) {
                Ext.apply(field, {
                    hasSummary: true,
                    summaryType: 'sum'
                })
            }
            if (gf.columnWidth > 0) {
                field.width = gf.columnWidth;
            } else if (gf.columnWidth == -1) {
                field.flex = 1;
                field.minWidth = 120;
            }
            return field;
        },

        nameFieldRenderer: function (val, rd, model, row, col, store, gridview) {
            return filterTextSetBk(store, '<strong>' + val + "</strong>>");
        },

        getFieldDefine: function (fieldId, fields) {
            for (var i=0;i<fields.length;i++) {
                var field = fields[i];
                if (field.fieldId === fieldId) {
                    console.log(field);
                    return field;
                }
            }
            return null;
        }
    }
});