package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.SuppliersDTO;

import java.util.List;

/**
 * Service interface for managing suppliers.
 *
 * This interface defines methods for performing CRUD operations on suppliers,
 * including adding, updating, retrieving, and deleting supplier records.
 */
public interface SupplierService {

    /**
     * Adds a new supplier.
     *
     * @param supplier The {@link SuppliersDTO} object containing supplier details.
     * @return The saved {@link SuppliersDTO} object.
     */
    SuppliersDTO saveSupplier(SuppliersDTO supplier);


    /**
     * Retrieves all suppliers.
     *
     * @return A list of {@link SuppliersDTO} objects representing all suppliers.
     */
    List<SuppliersDTO> getAllSuppliers();


    /**
     * Updates an existing supplier.
     *
     * @param id The ID of the supplier to be updated.
     * @param updatedSupplier The {@link SuppliersDTO} object containing updated supplier details.
     * @return The updated {@link SuppliersDTO} object.
     * @throws RuntimeException if no supplier is found with the specified ID.
     */
    SuppliersDTO updateSupplier(int id, SuppliersDTO updatedSupplier);


    /**
     * Deletes a supplier.
     *
     * @param id The ID of the supplier to be deleted.
     * @return A message indicating the result of the deletion.
     * @throws RuntimeException if no supplier is found with the specified ID.
     */
    String deleteSupplier(int id);


}
