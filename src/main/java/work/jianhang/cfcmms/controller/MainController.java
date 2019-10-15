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