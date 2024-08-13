package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.PaidCustomer;


public interface PaidCustomerRepo extends JpaRepository<PaidCustomer,Integer> {

    
}
