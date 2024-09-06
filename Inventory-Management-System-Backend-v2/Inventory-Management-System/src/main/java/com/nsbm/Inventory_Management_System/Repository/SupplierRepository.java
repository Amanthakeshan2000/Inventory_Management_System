package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Dto.SuppliersDTO;
import com.nsbm.Inventory_Management_System.Model.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Repository interface for performing CRUD operations on {@link Supplier} entities.
 *
 * This interface extends {@link JpaRepository}, which provides methods for common data access operations
 * such as saving, finding, deleting, and updating {@link Supplier} entities.
 *
 * The repository automatically inherits these methods from JpaRepository:
 * - save
 * - findById
 * - findAll
 * - deleteById
 * and others.
 */
public interface SupplierRepository extends JpaRepository<Supplier, Integer> {

    /**
     * @param status the status of the suppliers to retrieve.
     * @return a list of {@link Supplier} objects with the specified status.
     */
    @Query("SELECT s FROM Supplier s WHERE s.status = :status")
    List<Supplier> findSuppliersByStatus(@Param("status") String status);
}
