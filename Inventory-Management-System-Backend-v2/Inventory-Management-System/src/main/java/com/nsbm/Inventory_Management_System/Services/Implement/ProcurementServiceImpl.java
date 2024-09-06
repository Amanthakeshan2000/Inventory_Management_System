package com.nsbm.Inventory_Management_System.Services.Implement;


import com.nsbm.Inventory_Management_System.Dto.ProcurementDTO;
import com.nsbm.Inventory_Management_System.Model.Procurement;
import com.nsbm.Inventory_Management_System.Repository.ProcurementRepository;
import com.nsbm.Inventory_Management_System.Repository.SupplierRepository;
import com.nsbm.Inventory_Management_System.Services.ProcurementService;
import com.nsbm.Inventory_Management_System.Util.ProcurementEnums;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation of the {@link ProcurementService} interface.
 *
 * This service handles CRUD operations for procurement requests, including saving, updating, retrieving, and deleting
 * procurement records. It uses {@link ProcurementRepository} for data access and {@link ModelMapper} for mapping between
 * DTOs and entities.
 */
@Service
public class ProcurementServiceImpl implements ProcurementService {

    @Autowired
    ProcurementRepository procurementRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private ModelMapper modelMapper;


    /**
     * Saves a new procurement request.
     *
     * @param procurement The {@link ProcurementDTO} object containing the procurement details.
     * @return The saved {@link ProcurementDTO} object.
     */
    @Override
    public ProcurementDTO saveProcurement(ProcurementDTO procurement) {

        procurementRepository.save(modelMapper.map(procurement, Procurement.class));
        return procurement;
    }

    /**
     * Retrieves all procurement requests.
     *
     * @return A list of {@link ProcurementDTO} objects representing all procurements.
     */
    @Override
    public List<ProcurementDTO> getAllProcurements() {

        List<Procurement> procuments = procurementRepository.findAll();
        return modelMapper.map(procuments, new TypeToken<List<ProcurementDTO>>() {}.getType());
    }

    /**
     * Updates an existing procurement request.
     *
     * @param id The ID of the procurement to be updated.
     * @param updatedProcurement The {@link ProcurementDTO} object containing updated details.
     * @return The updated {@link ProcurementDTO} object.
     * @throws RuntimeException if no procurement is found with the specified ID.
     */
    @Override
    public ProcurementDTO updateProcurement(int id, ProcurementDTO updatedProcurement) {
        // Fetch the existing procurement by ID
        Procurement existingProcurement = procurementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Procurement not found with id " + id));

        // Update the fields of the existing procurement with values from the updated procurement
        // Update fields
        existingProcurement.setItemId(updatedProcurement.getItemId());
        existingProcurement.setItemName(updatedProcurement.getItemName());
        existingProcurement.setQuantity(updatedProcurement.getQuantity());
        existingProcurement.setRequestedBy(updatedProcurement.getRequestedBy());
        existingProcurement.setRequestDate(updatedProcurement.getRequestDate());
        existingProcurement.setRequiredByDate(updatedProcurement.getRequiredByDate());
        existingProcurement.setPriority(updatedProcurement.getPriority());
        existingProcurement.setStatus(updatedProcurement.getStatus());
        existingProcurement.setApprovalDate(updatedProcurement.getApprovalDate());
        existingProcurement.setApprovedBy(updatedProcurement.getApprovedBy());
        existingProcurement.setSupplierId(updatedProcurement.getSupplierId());
        // Save the updated procurement back to the repository
        procurementRepository.save(existingProcurement);
        return modelMapper.map(existingProcurement, ProcurementDTO.class);
    }

    /**
     * Deletes a procurement request.
     *
     * @param id The ID of the procurement to be deleted.
     * @return A message indicating the result of the deletion.
     * @throws RuntimeException if no procurement is found with the specified ID.
     */
    @Override
    public String deleteProcurement(int id) {
        if (!procurementRepository.existsById(id)) {
            throw new RuntimeException("Procurement not found with id " + id);
        }
        procurementRepository.deleteById(id);
        return "Procurement with id " + id + " deleted successfully";
    }

    /**
     * Selects a supplier for a procurement request.
     *
     * @param id The ID of the procurement to be updated.
     * @param updatedProcurement The {@link ProcurementDTO} object containing the new supplier ID.
     * @return The updated {@link ProcurementDTO} object.
     * @throws RuntimeException if no procurement is found with the specified ID.
     */
    @Override
    public ProcurementDTO updateSupplierForProcurement(int id, ProcurementDTO updatedProcurement) {
        // Fetch the existing procurement by ID
        Procurement existingProcurement = procurementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Procurement not found with id " + id));


        existingProcurement.setSupplierId(updatedProcurement.getSupplierId());

        // Save the updated procurement back to the repository
        procurementRepository.save(existingProcurement);
        return modelMapper.map(id, ProcurementDTO.class);
    }




    /**
     * Approves a procurement request.
     *
     * @param id The ID of the procurement to be approved.
     * @param updatedProcurement The {@link ProcurementDTO} object containing approval details.
     * @return The updated {@link ProcurementDTO} object.
     * @throws RuntimeException if no procurement is found with the specified ID.
     */
    @Override
    public ProcurementDTO approveProcurement(int id, ProcurementDTO updatedProcurement) {
        // Fetch the existing procurement by ID
        Procurement existingProcurement = procurementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Procurement not found with id " + id));


        existingProcurement.setApprovalDate(updatedProcurement.getApprovalDate());
        updatedProcurement.setApprovedBy(existingProcurement.getApprovedBy());
        existingProcurement.setStatus(ProcurementEnums.Status.valueOf("APPROVED")); // Set status to APPROVED
        // Save the updated procurement back to the repository
        procurementRepository.save(existingProcurement);
        return modelMapper.map(id, ProcurementDTO.class);
    }

}
