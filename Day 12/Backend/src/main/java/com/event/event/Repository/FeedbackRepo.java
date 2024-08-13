package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.Feedback;


public interface FeedbackRepo extends JpaRepository<Feedback,Integer> {

    
}
