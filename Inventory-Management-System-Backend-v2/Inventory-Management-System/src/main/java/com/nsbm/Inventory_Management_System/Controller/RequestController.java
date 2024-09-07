package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.RequestDTO;
import com.nsbm.Inventory_Management_System.Model.Request;
import com.nsbm.Inventory_Management_System.Services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller class for managing request-related operations.
 * Provides endpoints for creating, retrieving, updating, and deleting requests.
 */
@RestController
@RequestMapping("/requests")

public class RequestController {

    @Autowired
    private RequestService requestService;  // Service layer to handle business logic

    /**
     * Endpoint to retrieve a list of all requests.
     *
     * @return a list of all Request objects
     */
    @GetMapping
    public List<Request> getAllRequests() {
        return requestService.getAllRequests();  // Fetches all requests from the service
    }

    /**
     * Endpoint to retrieve a specific request by its ID.
     *
     * @param id the ID of the request to retrieve
     * @return the Request object corresponding to the given ID
     */
    @GetMapping("/{id}")
    public Request getRequestById(@PathVariable Long id) {
        return requestService.getRequestById(id);  // Fetches a request by its ID
    }

    /**
     * Endpoint to create a new request.
     *
     * @param request the request data to be saved
     * @return the saved Request object
     */
    @PostMapping
    public Request createRequest(@RequestBody Request request) {
        return requestService.createRequest(request);  // Saves the new request
    }

    /**
     * Endpoint to update an existing request by its ID.
     *
     * @param id the ID of the request to update
     * @param request the new request data
     * @return the updated RequestDTO object
     */
    @PutMapping("/{id}")
    public RequestDTO updateRequest(@PathVariable Long id, @RequestBody RequestDTO request) {
        return requestService.updateRequest(id, request);  // Updates the request with the given ID
    }

    /**
     * Endpoint to delete a request by its ID.
     *
     * @param id the ID of the request to delete
     */
    @DeleteMapping("/{id}")
    public void deleteRequest(@PathVariable Long id) {
        requestService.deleteRequest(id);  // Deletes the request with the given ID
    }

    /**
     * Endpoint to approve or disapprove a request by its ID.
     *
     * @param id the ID of the request to approve
     * @param approve the approval status (true or false)
     * @return the updated Request object with the approval status
     */
    @PutMapping("/{id}/approve")
    public Request approveRequest(@PathVariable Long id, @RequestParam boolean approve) {
        return requestService.approveRequest(id, approve);  // Approves or disapproves the request
    }
}