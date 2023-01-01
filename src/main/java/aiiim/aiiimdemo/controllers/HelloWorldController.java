package aiiim.aiiimdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HelloWorldController {
    @GetMapping("hello")
    public List<String> hello() {
        return Arrays.asList("Hello React, 3000", "Hello Spring, 8080");
    }
}
