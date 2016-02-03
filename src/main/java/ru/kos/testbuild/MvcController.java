package ru.kos.testbuild;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by brjazgin on 03.02.2016.
 */
@Controller
public class MvcController {
    @RequestMapping("/")
    public String greeting() {
        return "greeting";
    }
}
