package work.jianhang.cfcmms.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class MainController {

    @ResponseBody
    @GetMapping("/main")
    public Map<String, Object> getAllMain() {
        Map<String, Object> map = new HashMap<>();
        List<Main> mains = new ArrayList<>();
        Main m = new Main();
        m.setName("app");
        m.setSystem(new System("管理系统", "1.1.0", ""));
        m.setUser(new User("用户公司", "市场部", "销售员"));
        m.setService(new Service("IT公司", "IT人员", "157110009911", "67111192", "abc@qq.com", "IT公司"));
        mains.add(m);
        map.put("main", mains);
        return map;
    }

    @ResponseBody
    @GetMapping("/system_menu")
    public Map<String, Object> getSystemMenu() {
        Map<String, Object> map = new HashMap<>();
        List<Map<String, Object>> systemMenus = new ArrayList<>();
        Map<String, Object> m1 = new HashMap<>();
        m1.put("text", "工程管理");
        m1.put("icon", "");
        m1.put("glyph", 0);
        m1.put("expanded", true);
        m1.put("description", "");
        List<SubItems> m1Items = new ArrayList<>();
        m1Items.add(new SubItems("工程项目", "Global", "", 0xf0f7));
        m1Items.add(new SubItems("工程标段", "Project", "", 0xf02e));
        m1.put("items", m1Items);

        Map<String, Object> m2 = new HashMap<>();
        m2.put("text", "合同管理");
        m2.put("expanded", true);
        List<SubItems> m2Items = new ArrayList<>();
        m2Items.add(new SubItems("项目合同", "Agreement", "", 0xf02d));
        m2Items.add(new SubItems("合同付款计划", "AgreementPlan", "", 0xf03a));
        m2Items.add(new SubItems("合同请款单", "Payment", "", 0xf022));
        m2Items.add(new SubItems("合同付款单", "Payout", "", 0xf0d6));
        m2Items.add(new SubItems("合同发票", "Invoice", "", 0xf0a0));
        m2.put("items", m2Items);

        Map<String, Object> m3 = new HashMap<>();
        m3.put("text", "综合查询");
        m3.put("glyph", 0xf0ce);
        m3.put("expanded", true);
        List<SubItems> m3Items = new ArrayList<>();
        m3Items.add(new SubItems("项目合同台账", "Agreement", "", 0xf02d));
        m3Items.add(new SubItems("合同付款计划台账", "AgreementPlan", "", 0xf03a));
        m3Items.add(new SubItems("合同请款单台账", "Payment", "", 0xf022));
        m3Items.add(new SubItems("合同付款单台账", "Payout", "", 0xf0d6));
        m3Items.add(new SubItems("合同发票台账", "Invoice", "", 0xf0a0));
        m3.put("items", m3Items);

        systemMenus.add(m1);
        systemMenus.add(m2);
        systemMenus.add(m3);
        map.put("systemMenu", systemMenus);
        return map;
    }

    @ResponseBody
    @GetMapping("/module")
    public Map<String, Object> getModule() {
        Map<String, Object> map = new HashMap<>();
        List<Module> module = new ArrayList<>();
        Module m = new Module();
        m.setModuledId("1010");
        m.setModuleGroup("工程管理");
        m.setModuleName("Global");
        m.setTitle("工程项目");
        m.setGlyph(0xf0f7);

        m.setPrimaryKey("id");
        m.setNameFields("name");

        List<Field> fields = new ArrayList<>();
        Field f1 = new Field();
        f1.setFieldId(10100010L);
        f1.setFieldName("id");
        f1.setTitle("序号");
        f1.setFieldType("Integer");
        f1.setHidden(true);
        f1.setFieldGroup("工程基本信息");

        Field f2 = new Field();
        f2.setFieldId(10100020L);
        f2.setFieldName("name");
        f2.setTitle("工程项目名称");
        f2.setFieldType("String");
        f2.setFieldLen(50);
        f2.setRequired(true);
        f2.setFieldGroup("工程基本信息");

        Field f3 = new Field();
        f3.setFieldId(10100030L);
        f3.setFieldName("code");
        f3.setTitle("工程项目编码");
        f3.setFieldType("String");
        f3.setFieldLen(20);
        f3.setRequired(true);
        f3.setFieldGroup("工程基本信息");

        Field f4 = new Field();
        f4.setFieldId(10100040L);
        f4.setFieldName("squaremeter");
        f4.setTitle("建筑面积");
        f4.setFieldType("Integer");
        f4.setUnitText("平米");
        f4.setFieldGroup("工程附加信息");
        f4.setAllowSummary(true);

        Field f5 = new Field();
        f5.setFieldId(10100050L);
        f5.setFieldName("budget");
        f5.setTitle("投资总额");
        f5.setFieldType("Double");
        f5.setMoney(true);
        f5.setFieldGroup("工程附加信息");
        f5.setAllowSummary(true);

        Field f6 = new Field();
        f6.setFieldId(10100060L);
        f6.setFieldName("rjl");
        f6.setTitle("容积率");
        f6.setFieldType("Percent");
        f6.setFieldGroup("工程附加信息");

        Field f7 = new Field();
        f7.setFieldId(10100070L);
        f7.setFieldName("startDate");
        f7.setTitle("计划开工时间");
        f7.setFieldType("Date");
        f7.setFieldGroup("工程附加信息");

        Field f8 = new Field();
        f8.setFieldId(10100080L);
        f8.setFieldName("endDate");
        f8.setTitle("计划竣工时间");
        f8.setFieldType("Date");
        f8.setFieldGroup("工程附加信息");

        Field f9 = new Field();
        f9.setFieldId(10100090L);
        f9.setFieldName("isValid");
        f9.setTitle("是否通过验收");
        f9.setFieldType("Boolean");
        f9.setFieldGroup("工程附加信息");

        Field f10 = new Field();
        f10.setFieldId(10100100L);
        f10.setFieldName("m3");
        f10.setTitle("工程方量");
        f10.setFieldType("Double");
        f10.setFieldGroup("工程附加信息");

        fields.add(f1);
        fields.add(f2);
        fields.add(f3);
        fields.add(f4);
        fields.add(f5);
        fields.add(f6);
        fields.add(f7);
        fields.add(f8);
        fields.add(f9);
        fields.add(f10);
        m.setFields(fields);
        module.add(m);
        map.put("module", module);
        return map;
    }
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class Main {
    private String name;
    private System system;
    private User user;
    private Service service;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class System {
    private String name;
    private String version;
    private String iconUrl;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class User {
    private String company;
    private String department;
    private String name;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class Service {
    private String company;
    private String name;
    private String phonenumber;
    private String qq;
    private String email;
    private String copyright;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class SystemMenu {
    private String text;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class SubItems {
    private String text;
    private String module;
    private String icon;
    private int glyph;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class Module {
    private String moduledId;
    private String moduleGroup;
    private String moduleName;
    private String title;
    private int glyph;
    private String shortName;
    private String englishName;
    private String englishShortName;
    private String description;
    private String remark;

    private String primaryKey;
    private String nameFields;
    private List<Field> fields;
    private String gridSchemes;
}
@Data
@AllArgsConstructor
@NoArgsConstructor
class Field {
    private Long fieldId;
    private String fieldName;
    private String title;
    private String fieldType;
    private boolean money;
    private String unitText;
    private int fieldLen;
    private boolean isRequired;
    private boolean hidden;
    private String fieldGroup;
    private boolean allowSummary;
}