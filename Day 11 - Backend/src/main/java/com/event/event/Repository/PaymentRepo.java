package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.Payment;



public interface PaymentRepo extends JpaRepository<Payment,Integer> {

    
}
