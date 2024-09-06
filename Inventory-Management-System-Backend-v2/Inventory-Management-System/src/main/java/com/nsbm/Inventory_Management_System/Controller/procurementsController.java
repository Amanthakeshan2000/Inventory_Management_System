package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.ProcurementDTO;
import com.nsbm.Inventory_Management_System.Exception.ProcurementNotFoundException;
import com.nsbm.Inventory_Management_System.Services.ProcurementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
/**
 * Controller for managing procurement requests.
 * This class provides endpoints to create, retrieve, update, and delete procurement requests.
 */

@RestController
@RequestMapping(value = "api/v1/procurements")
public class procurementsController {

    @Autowired
    ProcurementService procurementService;


    /**
     * Adds a new procurement request.
     *
     * @param procurement the procurement request to be added.
     * @return the added procurement request.
     */
    @PostMapping("/procurement")
    ProcurementDTO insertProcurement(@RequestBody ProcurementDTO procurement) {
        return procurementService.saveProcurement(procurement);
    }


    /**
     * Retrieves all procurement requests.
     *
     * @return a list of all procurement requests.
     */
    @GetMapping("/procurements")
    public List<ProcurementDTO> getAllProcurements() {

        return procurementService.getAllProcurements();
    }


    /**
     * Updates an existing procurement request.
     *
     * @param id the ID of the procurement request to be updated.
     * @param updatedProcurement the updated procurement request data.
     * @return the updated procurement request, or a 404 status if not found.
     */
    @PutMapping("/procurement/{id}")
    public ResponseEntity<ProcurementDTO> updateProcurement(@PathVariable int id, @RequestBody ProcurementDTO updatedProcurement) {
        try {
            ProcurementDTO updated = procurementService.updateProcurement(id, updatedProcurement);
            return ResponseEntity.ok(updated);
        } catch (ProcurementNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


    /**
     * Deletes a procurement request by ID.
     *
     * @param id the ID of the procurement request to be deleted.
     * @return a success message if deletion is successful, or a 404 status if not found.
     */
    @DeleteMapping("/procurement/{id}")
    public ResponseEntity<String> deleteProcurement(@PathVariable int id) {
        try {
            String message = procurementService.deleteProcurement(id);
            return ResponseEntity.ok(message); // Status 200 OK with the message
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build(); // Status 404 Not Found
        }
    }


    /**
     * Selects a supplier for a procurement request.
     *
     * @param id the ID of the procurement request to be updated.
     * @param updatedProcurement the updated procurement request data with the selected supplier.
     * @return the updated procurement request, or a 404 status if not found.
     */
    @PutMapping("/suppliers/{id}/select")
    public ResponseEntity<ProcurementDTO> updateSupplierForProcurement(@PathVariable Integer id, @RequestBody ProcurementDTO updatedProcurement) {
        try {
            ProcurementDTO updated = procurementService.updateProcurement(id, updatedProcurement);
            return ResponseEntity.ok(updated);
        } catch (ProcurementNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


    /**
     * Approves a procurement request.
     *
     * @param id the ID of the procurement request to be approved.
     * @param updatedProcurement the updated procurement request data with the approval status.
     * @return the approved procurement request, or a 404 status if not found.
     */
    @PutMapping("/procurement/{id}/approve")
    public ResponseEntity<ProcurementDTO> approveProcurement(@PathVariable Integer id, @RequestBody ProcurementDTO updatedProcurement) {
        try {
            ProcurementDTO updated = procurementService.updateProcurement(id, updatedProcurement);
            return ResponseEntity.ok(updated);
        } catch (ProcurementNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}