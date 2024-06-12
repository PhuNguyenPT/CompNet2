package com.example.jpa.author;

import com.example.jpa.models.BaseEntity;
import com.example.jpa.models.Course;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Author {
    @Id
    @GeneratedValue
    private Integer id;
    @Embedded
    private BaseEntity baseEntity;
    private String firstName;
    private String lastName;
    @Column(
            unique = true
    )
    private String email;
    private int age;
    @ManyToMany(
            mappedBy = "authors"
    )
    private List<Course> courses;
}
