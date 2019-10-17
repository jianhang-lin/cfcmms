Ext.onReady(function () {
   Ext.monetaryText = '万';
   Ext.monetaryUnit = 10000;
   
   if (Ext.util && Ext.util.Format) {
       Ext.apply(Ext.util.Format, {
           monetaryRenderer: function (val) {
               if (val) {
                   if (Ext.monetaryUnit && Ext.monetaryUnit != 1) {
                       val = val / Ext.monetaryUnit;
                   } 
                   return '<span style="color:' + (val > 0?'blue':'red') + ';float:right;">' + Ext.util.Format.number(val, '0,000.00') + Ext.monetaryText + '</span>'
               } else {
                   return '';
               }
           },
           dateRenderer: function (val) {
               return '<span style="color: #a40;">' + Ext.util.Format.date(val, 'Y-m-d') + '</span>';
           },
           
           floatRenderer: function (val, rd, model, row, col, store, gridview) {
               return '<span style="color: '+(val > 0?'blue':'red')+';float: right;">' +(val==0?'':val) +'</span>';
           },

           intRenderer: function (val, rd, model, row, col, store, gridview) {
               return '<span style="color: '+(val > 0?'blue':'red')+';float: right;">' +(val==0?'':val) +'</span>';
           },

           percentRenderer: function (v, rd, model) {
               v = v * 100;
               var v1 = v> 100?100:v;
               v1 = v1<0?0:v1;
               var v2 = parseInt(v1*2.55).toString(16);
               if (v2.length ==1) {
                   v2 = '0'+ v2;
               } 
               return Ext.String.format('<div>' 
                   + '<div style="float: left;border: 1px solid #008000;height: 15px;width: 100%;">'
                   + '<div style="float: left;text-align: center;width: 100%;color: blue;">{0}%</div>'
                   + '<div style="background: #FAB2{2};width: {1}%;height: 13px;"></div>'
                   
                   + '</div></div>', v, v1, v2);
           },

           nameFieldRenderer: function (val, rd, model, row, col, store, gridview) {
               return ('<strong>' + val + '</strong>');
           }
       })
   } 
});