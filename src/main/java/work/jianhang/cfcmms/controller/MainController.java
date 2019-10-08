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