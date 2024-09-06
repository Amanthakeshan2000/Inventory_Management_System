package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Model.Procurement;
import com.nsbm.Inventory_Management_System.Model.Supplier;
import com.nsbm.Inventory_Management_System.Util.ProcurementEnums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for performing CRUD operations on {@link Procurement} entities.
 *
 * This interface extends {@link JpaRepository}, which provides methods for common data access operations
 * such as saving, finding, deleting, and updating {@link Procurement} entities.
 *
 * The repository automatically inherits these methods from JpaRepository:
 * - save
 * - findById
 * - findAll
 * - deleteById
 * and others.
 */
public interface ProcurementRepository extends JpaRepository<Procurement,Integer> {

    /**
     * @param status the status of the procurements to retrieve (e.g., "PENDING", "APPROVED").
     * @return a list of {@link Procurement} objects with the specified status.
     */
    @Query("SELECT p FROM Procurement p WHERE p.status = :status")
    List<Procurement> findProcurementsByStatus(@Param("status") ProcurementEnums.Status status);
}
