package com.nsbm.Inventory_Management_System.Repository;




import com.nsbm.Inventory_Management_System.Model.Suplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

// This interface extends JpaRepository to provide basic CRUD (Create, Read, Update, Delete) operations for the Suplier entity.
// By extending JpaRepository, we get access to common data persistence operations.

@Repository
public interface SuplierRepository extends JpaRepository<Suplier, Long> {


    // Custom method to find suppliers by status
    List<Suplier> findByStatus(String status);

}
