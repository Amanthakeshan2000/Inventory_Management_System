package com.nsbm.Inventory_Management_System.Controller;
import org.springframework.format.annotation.DateTimeFormat;
import com.nsbm.Inventory_Management_System.Dto.ApprovalDTO;
import com.nsbm.Inventory_Management_System.Model.Approval;
import com.nsbm.Inventory_Management_System.Services.Implement.ApprovalServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import static com.nsbm.Inventory_Management_System.Const.AppConstants.*;
/**
 * Controller for handling Approval-related API requests.
 * This class provides endpoints to create, retrieve,update and delete approvals.
 */
@RestController
@RequestMapping(value = "api/v1/approval")
@CrossOrigin

public class ApprovalController {

    @Autowired
    private ApprovalServiceImpl approvalServiceImpl;

    /**
     * Endpoint to retrieve all approval records.
     * @return ResponseEntity containing the list of all approvals.
     */
    @GetMapping("/getApproval")
    public ResponseEntity<List<Approval>> getAllApprovel() {
        List<Approval> approval = approvalServiceImpl.getAllApprovals();
        return ResponseEntity.ok(approval);
    }

    /**
     * Endpoint to add a new approval record.
     * @param approvalDTO The approval data transfer object.
     * @return The saved ApprovalDTO object.
     */
    @PostMapping("/saveApproval")
    public ApprovalDTO saveApproval(@RequestBody ApprovalDTO approvalDTO) {
        return approvalServiceImpl.saveApproval(approvalDTO);
    }

    /**
     * Endpoint to delete an approval record by ID.
     * @param id The ID of the approval to delete.
     * @return A success message.
     */
    @DeleteMapping("/deleteApproval/{id}")
    public String deleteSuplier(@PathVariable Long id) {
        approvalServiceImpl.deleteApproval(id);
        return deleteApproval;
    }

    /**
     * Endpoint to update an approval record by ID.
     * @param id The ID of the approval to update.
     * @param approvalDTO The updated approval data.
     * @return ResponseEntity containing the updated ApprovalDTO or an error message.
     */
    @PutMapping("/updateApproval/{id}")
    public ResponseEntity<ApprovalDTO> updateApproval(@PathVariable long id, @RequestBody ApprovalDTO approvalDTO) {
        try {
            ApprovalDTO updatedApproval = approvalServiceImpl.updateApproval(id, approvalDTO);
            return ResponseEntity.ok(updatedApproval);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    /**
     * Endpoint to retrieve an approval record by its database ID.
     * @param id The ID of the approval.
     * @return ResponseEntity containing the ApprovalDTO or an error message.
     */
    @GetMapping("/{id}")
    public ResponseEntity<ApprovalDTO> getApprovalById(@PathVariable long id) {
        try {
            ApprovalDTO approvalDTO = approvalServiceImpl.getApprovalById(id);
            return ResponseEntity.ok(approvalDTO);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    /**
     * Endpoint to retrieve an approval by the approval-specific ID.
     * @param id The ID of the approval to retrieve.
     * @return ResponseEntity containing the Approval object or an error message.
     */
    @GetMapping("/approval/{id}")
    public ResponseEntity<Approval> getApprovalByAId(@PathVariable("id") long id) {
        try {
            Approval approval = approvalServiceImpl.getApprovalByAId(id);
            return new ResponseEntity<>(approval, HttpStatus.OK);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    /**
     * Endpoint to retrieve approvals by approval_id.
     * @param approvalId The approval-specific ID.
     * @return ResponseEntity containing the list of Approval objects.
     */
    @GetMapping("/byApprovalId/{approvalId}")
    public ResponseEntity<List<Approval>> getApprovalByApprovalId(@PathVariable int approvalId) {
        List<Approval> approvals = approvalServiceImpl.getApprovalByApprovalId(approvalId);
        if (approvals.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return new ResponseEntity<>(approvals, HttpStatus.OK);
    }

    /**
     * Endpoint to retrieve approvals by status.
     * @param status The status of the approvals to retrieve.
     * @return ResponseEntity containing the list of Approval objects.
     */

    @GetMapping("/byStatus/{status}")
    public ResponseEntity<List<Approval>> getApprovalByStatus(@PathVariable String status) {
        List<Approval> approvals = approvalServiceImpl.getApprovalByStatus(status);
        if (approvals.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return new ResponseEntity<>(approvals, HttpStatus.OK);
    }

    /**
     * Endpoint to update the status of an approval by approval_id.
     * @param approvalId The ID of the approval to update.
     * @param status The new status (default is APPROVED).
     * @return ResponseEntity containing a success or error message.
     */
    @PutMapping("/update/{approvalId}")
    public ResponseEntity<String> updateApproval(
            @PathVariable int approvalId,
            @RequestParam(defaultValue = APPROVED) String status) {

        int result = approvalServiceImpl.updateApprovalByApprovalId(status, approvalId);

        if (result > 0) {
            return new ResponseEntity<>(successfullUpdate, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(unsuccessfullUpdate, HttpStatus.BAD_REQUEST);
        }
    }

}
