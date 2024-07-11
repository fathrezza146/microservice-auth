package com.example.services;

import com.example.model.ToDoModel;

public interface ToDoService {
    
    Iterable<ToDoModel> getAll();
    
    ToDoModel getToDoById(String id);
    
    ToDoModel saveToDo(ToDoModel toDo);

    ToDoModel updateToDo(String id, ToDoModel toDo);
    
    void deleteToDo(String id);
}
