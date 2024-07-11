package com.example.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "todo")
public class ToDoModel {
    @Id
    private String id;
    private String title;
    private String description;
    private boolean completed;
}
