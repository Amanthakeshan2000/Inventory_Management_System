package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.SuplierDTO;
import com.nsbm.Inventory_Management_System.Services.Implement.SuplierServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// This is the REST controller that handles incoming HTTP requests related to suppliers.
// The @RestController annotation marks this class as a Spring REST controller.
@RestController
@CrossOrigin
@RequestMapping(value = "/api/v1")
public class SuplierController {

    // Injecting the SuplierServiceImpl to handle business logic.
    @Autowired
    private SuplierServiceImpl suplierService;

    // HTTP GET method to fetch all suppliers. This method is mapped to "/getsuplier".
    @GetMapping("/getsuplier")
    public List<SuplierDTO> getsuplier() {
        return suplierService.getAllSupliers();// Call service to get the list of suppliers.
    }

    // HTTP POST method to add a new supplier price. This method is mapped to "/addprice".
    @PostMapping("/addprice")
    public SuplierDTO addSuplierPrice(@RequestBody SuplierDTO suplierDTO) {
        return suplierService.addSuplierPrice(suplierDTO);// Call service to add a supplier price.
    }

    // HTTP PUT method to update supplier details. This method is mapped to "/updateSuplier".
    @PutMapping("/updateSuplier")
    public SuplierDTO updateSuplier(@RequestBody SuplierDTO suplierDTO) {
        return suplierService.updateSuplier(suplierDTO);// Call service to update supplier information.
    }

    // HTTP DELETE method to delete a supplier by its ID. This method is mapped to "/deleteSuplier/{id}".
    @DeleteMapping("/deleteSuplier/{id}")
    public String deleteSuplier(@PathVariable Long id) {
        suplierService.deleteSuplier(id);  // Call service to delete supplier.
        return "Suplier deleted successfully."; // Return success message.
    }
}