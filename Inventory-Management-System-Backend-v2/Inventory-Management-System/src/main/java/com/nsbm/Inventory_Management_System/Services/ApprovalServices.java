package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.ApprovalDTO;
import com.nsbm.Inventory_Management_System.Model.Approval;

import java.time.LocalDateTime;
import java.util.List;
/**
 * Service interface for managing Approval-related operations.
 * Defines methods for CRUD operations and custom queries on Approval entities.
 */
public interface ApprovalServices {

    /**
     * Retrieves an ApprovalDTO by its unique ID.
     *
     * @param id the ID of the Approval to be retrieved.
     * @return an ApprovalDTO containing the approval details.
     */
    ApprovalDTO getApprovalById(long id);

    /**
     * Updates an existing Approval based on its ID.
     *
     * @param id the ID of the Approval to be updated.
     * @param approvalDTO the updated approval details to be applied.
     * @return the updated ApprovalDTO after saving the changes.
     */
    ApprovalDTO updateApproval(long id, ApprovalDTO approvalDTO);

    /**
     * Saves a new Approval to the system.
     *
     * @param approvalDTO the details of the approval to be saved.
     * @return the saved ApprovalDTO.
     */
    ApprovalDTO saveApproval(ApprovalDTO approvalDTO);

    /**
     * Retrieves a list of all Approval entities.
     *
     * @return a list of all approvals in the system.
     */
    List<Approval> getAllApprovals();

    /**
     * Deletes an Approval by its unique ID.
     *
     * @param id the ID of the Approval to be deleted.
     */
    void deleteApproval(Long id);

    /**
     * Retrieves an Approval entity by its unique ID.
     *
     * @param id the ID of the Approval to be retrieved.
     * @return the Approval entity.
     */
    Approval getApprovalByAId(long id);

    /**
     * Retrieves a list of Approval entities filtered by their approval_id.
     *
     * @param approvalId the approval_id used to filter the approvals.
     * @return a list of Approval entities with the specified approval_id.
     */
    List<Approval> getApprovalByApprovalId(int approvalId);

    /**
     * Retrieves a list of Approval entities filtered by their approval_id.
     *
     * @param status the approval_id used to filter the approvals.
     * @return a list of Approval entities with the specified approval_id.
     */
    List<Approval> getApprovalByStatus(String status);

    /**
     * Updates the status of an Approval entity by its approval_id.
     *
     * @param status the new status to be set (e.g., pending, approved, rejected).
     * @param approvalId the approval_id of the approval to be updated.
     * @return the number of records updated.
     */
    int updateApprovalByApprovalId(String status, int approvalId);

}
