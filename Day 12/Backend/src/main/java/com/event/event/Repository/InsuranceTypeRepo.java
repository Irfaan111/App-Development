package com.event.event.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.event.event.Model.InsuranceType;


public interface InsuranceTypeRepo extends JpaRepository<InsuranceType,Integer> {

    
}
