package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.ApprovalDTO;
import com.nsbm.Inventory_Management_System.Model.Approval;
import com.nsbm.Inventory_Management_System.Repository.ApprovalRepository;
import com.nsbm.Inventory_Management_System.Services.ApprovalServices;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import static com.nsbm.Inventory_Management_System.Const.AppConstants.ApprovalNotFound;

/**
 * Service implementation for managing Approval-related operations.
 */
@Service
public class ApprovalServiceImpl implements ApprovalServices {

    @Autowired
    private ApprovalRepository approvalRepository;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Retrieves a list of all approvals from the database.
     *
     * @return a list of all approvals.
     */
    @Override
    public List<Approval> getAllApprovals() {
        return approvalRepository.findAll();
    }

    /**
     * Saves a new approval to the database.
     *
     * @param approvalDTO the data transfer object containing approval details.
     * @return the saved approvalDTO.
     */
    @Override
    public ApprovalDTO saveApproval(ApprovalDTO approvalDTO){
        approvalRepository.save(modelMapper.map(approvalDTO, Approval.class));
        return approvalDTO;
    }

    /**
     * Deletes an approval by its ID.
     *
     * @param id the ID of the approval to be deleted.
     */
    @Override
    public void deleteApproval(Long id){
        approvalRepository.deleteById(id);
    }

    /**
     * Updates an existing approval by its ID.
     *
     * @param id           the ID of the approval to be updated.
     * @param approvalDTO  the data transfer object containing updated approval details.
     * @return the updated approvalDTO.
     * @throws EntityNotFoundException if no approval is found with the provided ID.
     */
    @Override
    public ApprovalDTO updateApproval(long id, ApprovalDTO approvalDTO) {
        Optional<Approval> RequestOptional = approvalRepository.findById(id);
        if (RequestOptional.isPresent()) {
            Approval approval = RequestOptional.get();

            // Updating fields based on the DTO input
            approval.setApproval_id(approvalDTO.getApproval_Id().intValue());
            approval.setApproval_name(approvalDTO.getApproval_Name());
            approval.setCreate_date(approvalDTO.getCreate_Date());
            approval.setStatus(approvalDTO.getStatus());

            // Saving the updated entity
            approvalRepository.save(approval);

            // Returning the updated object mapped to DTO
            return modelMapper.map(approval, ApprovalDTO.class);
        } else {
            throw new EntityNotFoundException(ApprovalNotFound + id);
        }
    }

    /**
     * Retrieves an approval by its ID.
     *
     * @param id the ID of the approval to retrieve.
     * @return the approvalDTO for the corresponding approval.
     * @throws EntityNotFoundException if no approval is found with the provided ID.
     */
    @Override
    public ApprovalDTO getApprovalById(long id) {
        Optional<Approval> approvalOptional = approvalRepository.findById(id);
        if (approvalOptional.isPresent()) {
            // Map Approval entity to DTO
            return modelMapper.map(approvalOptional.get(), ApprovalDTO.class);
        } else {
            throw new EntityNotFoundException(ApprovalNotFound + id);
        }
    }

    /**
     * Retrieves an approval entity by its approval ID.
     *
     * @param id the approval ID to look up.
     * @return the corresponding approval entity.
     * @throws EntityNotFoundException if no approval is found with the provided approval ID.
     */
    @Override
    public Approval getApprovalByAId(long id) {
        Optional<Approval> approvalOptional = approvalRepository.getApprovalByAId(id);
        if (approvalOptional.isPresent()) {
            return approvalOptional.get();
        } else {
            throw new EntityNotFoundException(ApprovalNotFound + id);
        }
    }

    /**
     * Retrieves a list of approvals by the given approval ID.
     *
     * @param approvalId the approval ID to filter approvals.
     * @return a list of approvals that match the provided approval ID.
     */
    @Override
    public List<Approval> getApprovalByApprovalId(int approvalId) {
        return approvalRepository.getApprovalByApprovalId(approvalId);
    }

    /**
     * Retrieves a list of approvals by the given status.
     *
     * @param status the status to filter approvals.
     * @return a list of approvals that match the provided status.
     */
    @Override
    public List<Approval> getApprovalByStatus(String status) {
        return approvalRepository.getApprovalByStatus(status);
    }

    /**
     * Updates the status of an approval based on the provided approval ID.
     *
     * @param status      the new status to be set.
     * @param approvalId  the approval ID to identify which approval's status needs to be updated.
     * @return the number of records updated.
     */
   @Transactional
    public int updateApprovalByApprovalId(String status, int approvalId) {
        return approvalRepository.updateApprovalByApprovalId(status,approvalId);
    }
}
