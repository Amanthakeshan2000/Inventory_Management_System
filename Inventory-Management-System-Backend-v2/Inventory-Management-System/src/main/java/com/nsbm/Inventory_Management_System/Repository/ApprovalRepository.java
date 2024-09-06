package com.nsbm.Inventory_Management_System.Repository;
import com.nsbm.Inventory_Management_System.Model.Approval;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
/**
 * Repository interface for performing CRUD operations on the Approval entity.
 * Extends JpaRepository to leverage Spring Data JPA's features.
 */
public interface ApprovalRepository extends JpaRepository<Approval,Long> {
    /**
     * Retrieves a list of all approvals.
     *
     * @return a list of Approval entities.
     */
    List<Approval> findAll();

    /**
     * Finds an approval by its unique ID.
     *
     * @param id the ID of the approval.
     * @return an Optional containing the found Approval entity, or empty if not found.
     */
    @Query("SELECT a FROM Approval a WHERE a.id = :id")
    Optional<Approval> getApprovalByAId(@Param("id") Long id);

    /**
     * Finds approvals by their approval_id.
     *
     * @param approvalId the approval ID to search for.
     * @return a list of Approval entities with the specified approval ID.
     */
    @Query("SELECT a FROM Approval a WHERE a.approval_id = :approvalId")
    List<Approval> getApprovalByApprovalId(@Param("approvalId") int approvalId);

    /**
     * Finds approvals by their status.
     *
     * @param status the status to filter approvals by (e.g., pending, approved, rejected).
     * @return a list of Approval entities with the specified status.
     */
    @Query("SELECT a FROM Approval a WHERE a.status = :status")
    List<Approval> getApprovalByStatus(@Param("status") String status);

    /**
     * Updates the status of an approval based on the provided approval_id.
     *
     * @param status      the new status to be set.
     * @param approvalId  the approval ID used to identify which approval to update.
     * @return the number of records updated.
     */
    @Modifying
    @Transactional
    @Query("UPDATE Approval a SET  a.status = :status WHERE a.approval_id = :approvalId")
    int updateApprovalByApprovalId(
            @Param("status") String status,
            @Param("approvalId") int approvalId
    );
}
