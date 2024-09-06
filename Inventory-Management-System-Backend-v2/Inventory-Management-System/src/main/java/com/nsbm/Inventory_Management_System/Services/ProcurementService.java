package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.ProcurementDTO;

import java.util.List;

/**
 * Service interface for managing procurement requests.
 *
 * This interface defines methods for performing CRUD operations on procurement requests,
 * including adding, updating, retrieving, deleting, approving, and associating suppliers.
 */
public interface ProcurementService {

    /**
     * Adds a new procurement request.
     *
     * @param procurement The {@link ProcurementDTO} object containing procurement details.
     * @return The saved {@link ProcurementDTO} object.
     */
    ProcurementDTO saveProcurement(ProcurementDTO procurement);


    /**
     * Retrieves all procurement requests.
     *
     * @return A list of {@link ProcurementDTO} objects representing all procurement requests.
     */
    List<ProcurementDTO> getAllProcurements();


    /**
     * Updates an existing procurement request.
     *
     * @param id The ID of the procurement request to be updated.
     * @param updatedProcurement The {@link ProcurementDTO} object containing updated procurement details.
     * @return The updated {@link ProcurementDTO} object.
     * @throws RuntimeException if no procurement request is found with the specified ID.
     */
    ProcurementDTO updateProcurement(int id, ProcurementDTO updatedProcurement);


    /**
     * Deletes a procurement request.
     *
     * @param id The ID of the procurement request to be deleted.
     * @return A message indicating the result of the deletion.
     * @throws RuntimeException if no procurement request is found with the specified ID.
     */
    String deleteProcurement(int id);


    /**
     * Approves a procurement request.
     *
     * @param id The ID of the procurement request to be approved.
     * @param updatedProcurement The {@link ProcurementDTO} object containing updated details, including approval information.
     * @return The approved {@link ProcurementDTO} object.
     * @throws RuntimeException if no procurement request is found with the specified ID.
     */
    ProcurementDTO approveProcurement(int id, ProcurementDTO updatedProcurement);


    /**
     * Associates a supplier with a procurement request.
     *
     * @param id The ID of the procurement request to be updated.
     * @param updatedProcurement The {@link ProcurementDTO} object containing the supplier details to be associated.
     * @return The updated {@link ProcurementDTO} object with the associated supplier.
     * @throws RuntimeException if no procurement request is found with the specified ID.
     */
    ProcurementDTO updateSupplierForProcurement(int id, ProcurementDTO updatedProcurement);

}
