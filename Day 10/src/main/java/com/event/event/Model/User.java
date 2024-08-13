package com.event.event.Model;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private int id;
     private String name;
     private String email;
     private String password;
     private String confirmpassword;

     @OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
     @JsonManagedReference
     public Feedback feedack;
}
