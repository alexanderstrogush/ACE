package com.astrogush.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ExampleController {

  @GetMapping("/example/form")
  public String getExampleForm() {
    return "form";
  }

  @GetMapping("/example/table")
  public String getExampleTable() {
    return "table";
  }
}
