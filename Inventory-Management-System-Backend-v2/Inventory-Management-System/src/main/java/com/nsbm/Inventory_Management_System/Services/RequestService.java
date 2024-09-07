package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.RequestDTO;
import com.nsbm.Inventory_Management_System.Model.Request;
import java.util.List;


/**
 * Service interface for managing 'Request' entities.
 * Provides methods for CRUD operations and custom actions on requests.
 */


public interface RequestService {
    /**
     * Retrieves all the requests.
     *
     * @return a list of all 'Request' entities
     */
    List<Request> getAllRequests();

    /**
     * Retrieves a specific request by its ID.
     *
     * @param id the unique identifier of the request
     * @return the 'Request' entity with the given ID
     */
    Request getRequestById(Long id);

    /**
     * Creates a new request.
     *
     * @param request the 'Request' entity to be created
     * @return the created 'Request' entity
     */
    Request createRequest(Request request);

    /**
     * Updates an existing request by its ID.
     *
     * @param id      the unique identifier of the request to update
     * @param request the new data for the request
     * @return a 'RequestDTO' with updated details of the request
     */
    RequestDTO updateRequest(Long id, RequestDTO request);

    /**
     * Deletes a specific request by its ID.
     *
     * @param id the unique identifier of the request to delete
     */
    void deleteRequest(Long id);

    /**
     * Approves or disapproves a request based on a boolean flag.
     *
     * @param id      the unique identifier of the request to approve
     * @param approve the boolean flag indicating approval (true for approve, false for disapprove)
     * @return the updated 'Request' entity after approval status change
     */
    Request approveRequest(Long id, boolean approve);
}
