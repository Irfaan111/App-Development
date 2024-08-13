package com.event.event.Controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.event.event.Model.Feedback;
import com.event.event.Service.FeedbackService;
@RestController
@CrossOrigin("*")
public class FeedbackController {
 
     @Autowired
     FeedbackService feedbackService;
     @PostMapping("/Feedback/insert")
     public Feedback postMethodName(@RequestBody Feedback entity)
     {
        return feedbackService.feedback(entity);
    }
      @GetMapping("/GetAllFeedback")
      public List<Feedback> getAllFeedbacks()
      {
          return feedbackService.getall();
      }
}
