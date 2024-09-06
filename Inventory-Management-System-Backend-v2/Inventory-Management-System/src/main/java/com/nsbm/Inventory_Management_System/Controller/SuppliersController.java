package com.nsbm.Inventory_Management_System.Controller;


import com.nsbm.Inventory_Management_System.Dto.SuppliersDTO;
import com.nsbm.Inventory_Management_System.Exception.SupplierNotFoundException;
import com.nsbm.Inventory_Management_System.Services.SupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Controller for managing supplier records.
 * This class provides endpoints to create, retrieve, update, and delete supplier records.
 */
@RestController
@RequestMapping(value = "api/v1/suppliers")
public class SuppliersController {

    @Autowired
    private SupplierService supplierService;


    /**
     * Adds a new supplier.
     *
     * @param supplier the supplier data to be added.
     * @return the added supplier.
     */
    @PostMapping("/supplier")
    SuppliersDTO insertSupplier(@RequestBody SuppliersDTO supplier) {

        return supplierService.saveSupplier(supplier);
    }


    /**
     * Retrieves all suppliers.
     *
     * @return a list of all suppliers.
     */
    @GetMapping("/suppliers")
    public List<SuppliersDTO> getAllSuppliers() {

        return supplierService.getAllSuppliers();
    }


    /**
     * Updates an existing supplier.
     *
     * @param id the ID of the supplier to be updated.
     * @param updatedSupplier the updated supplier data.
     * @return the updated supplier, or a 404 status if not found.
     */
    @PutMapping("/supplier/{id}")
    public ResponseEntity<SuppliersDTO> updateSupplier(@PathVariable int id, @RequestBody SuppliersDTO updatedSupplier) {
        try {
            SuppliersDTO updated = supplierService.updateSupplier(id, updatedSupplier);
            return ResponseEntity.ok(updated);
        } catch (SupplierNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


    /**
     * Deletes a supplier by ID.
     *
     * @param id the ID of the supplier to be deleted.
     * @return a success message if deletion is successful, or a 404 status if not found.
     */
    @DeleteMapping("supplier/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable int id) {
        try {
            String message = supplierService.deleteSupplier(id);
            return ResponseEntity.ok(message); // Status 200 OK with the message
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Status 404 Not Found
        }
    }
}
