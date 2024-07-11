package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.ToDoModel;
import com.example.services.ToDoService;

@RestController
@RequestMapping("/todo")
public class ToDoController {

    @Autowired
    private ToDoService toDoService;

    @GetMapping
    public Iterable<ToDoModel> getAll() {
        return toDoService.getAll();
    }

    @GetMapping("/{id}")
    public ToDoModel getToDoById(@PathVariable String id) {
        return toDoService.getToDoById(id);
    }

    @PostMapping
    public ToDoModel saveToDo(@RequestBody ToDoModel toDo) {
        return toDoService.saveToDo(toDo);
    }

    @PostMapping("/update/{id}")
    public ToDoModel updaToDo(@RequestBody ToDoModel todo, @PathVariable String id) {
        return toDoService.updateToDo(id, todo);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteToDo(@PathVariable String id) {
        toDoService.deleteToDo(id);
    }
}
