package com.nsbm.Inventory_Management_System.Services;


import com.nsbm.Inventory_Management_System.Dto.SuplierDTO;

import java.util.List;


// This interface defines the contract for supplier-related business logic.
// The implementing class will provide the actual functionality.

public interface SuplierService {

    // Method to get all suppliers, it will return a list of SuplierDTO objects.
    List<SuplierDTO> getAllSupliers();

    // Method to add a supplier price, it accepts a SuplierDTO object and returns the updated DTO.
    SuplierDTO addSuplierPrice(SuplierDTO suplierDTO);

    // Method to update a supplier's information.
    SuplierDTO updateSuplier(SuplierDTO suplierDTO);

    // Method to delete a supplier by their ID.
    void deleteSuplier(Long id);

    // New method to get suppliers by status
    List<SuplierDTO> getSuppliersByStatus(String status);

}