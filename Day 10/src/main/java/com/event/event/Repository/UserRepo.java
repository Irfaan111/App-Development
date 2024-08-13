package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.User;
import java.util.Optional;


public interface UserRepo extends JpaRepository<User,Integer> {

    Optional<User> findByEmailAndPassword(String email, String password);
}
