package com.example.services.implementation;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.ToDoModel;
import com.example.repository.ToDoRepository;
import com.example.services.ToDoService;

@Service
public class ToDoServiceImpl implements ToDoService {

    @Autowired
    private ToDoRepository todoRepository ;
    @Override
    public Iterable<ToDoModel> getAll() {

        return todoRepository.findAll();

    }

    @Override
    public ToDoModel getToDoById(String id) {
        ToDoModel todo = null;
        Optional<ToDoModel> todoOpt = todoRepository.findById(id);

        if(todoOpt.isPresent()) {
            todo = todoOpt.get();
        }
        return todo;
    }

    @Override
    public ToDoModel saveToDo(ToDoModel toDo) {

        return todoRepository.save(toDo);
    }

    @Override
    public ToDoModel updateToDo(String id, ToDoModel toDo) {
        
        ToDoModel todoData = todoRepository.findById(id).get();
        todoData.setTitle(toDo.getTitle()); 
        todoData.setDescription(toDo.getDescription());
        todoData.setCompleted(toDo.isCompleted());
        return todoRepository.save(todoData);
    }

    @Override
    public void deleteToDo(String id) {
        todoRepository.deleteById(id);
    }
}
