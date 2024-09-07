package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.RequestDTO;
import com.nsbm.Inventory_Management_System.Exception.CustomException;
import com.nsbm.Inventory_Management_System.Model.Request;
import com.nsbm.Inventory_Management_System.Repository.RequestRepository;
import com.nsbm.Inventory_Management_System.Services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.modelmapper.ModelMapper;

import java.util.List;
import java.util.Optional;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Retrieves all requests from the repository.
     *
     * @return a list of all requests.
     */
    @Override
    public List<Request> getAllRequests() {
        return requestRepository.findAll();
    }

    /**
     * Retrieves a request by its ID.
     *
     * @param id the ID of the request to retrieve.
     * @return the request with the specified ID.
     * @throws CustomException if the request with the specified ID is not found.
     */
    @Override
    public Request getRequestById(Long id) {
        return requestRepository.findById(id).orElseThrow(() ->
                new CustomException("Request with ID " + id + " not found.")
        );
    }

    /**
     * Creates a new request and saves it to the repository.
     *
     * @param request the request to be created.
     * @return the created request.
     */
    @Override
    public Request createRequest(Request request) {
        return requestRepository.save(request);
    }

    /**
     * Updates an existing request with new data.
     *
     * @param id the ID of the request to update.
     * @param requestDTO the new data for the request.
     * @return the updated request as a RequestDTO.
     * @throws CustomException if the request with the specified ID is not found.
     */
    @Override
    public RequestDTO updateRequest(Long id, RequestDTO requestDTO) {
        Optional<Request> requestOptional = requestRepository.findById(id);
        if (requestOptional.isPresent()) {
            Request existingRequest = requestOptional.get();
            existingRequest.setItem(requestDTO.getItem());
            existingRequest.setLocation(requestDTO.getLocation());
            existingRequest.setRepair(requestDTO.getRepair());
            existingRequest.setReturnStatus(requestDTO.getReturnStatus());
            requestRepository.save(existingRequest);
            return modelMapper.map(existingRequest, RequestDTO.class);
        } else {
            throw new CustomException("Request with ID " + id + " not found.");
        }
    }

    /**
     * Deletes a request by its ID.
     *
     * @param id the ID of the request to delete.
     * @throws CustomException if the request with the specified ID is not found.
     */
    @Override
    public void deleteRequest(Long id) {
        if (!requestRepository.existsById(id)) {
            throw new CustomException("Cannot delete. Request with ID " + id + " not found.");
        }
        requestRepository.deleteById(id);
    }

    /**
     * Approves or rejects a request based on the provided approval status.
     *
     * @param id the ID of the request to approve or reject.
     * @param approve true if the request is to be approved, false otherwise.
     * @return the updated request.
     * @throws CustomException if the request with the specified ID is not found.
     */
    @Override
    public Request approveRequest(Long id, boolean approve) {
        Request existingRequest = requestRepository.findById(id).orElseThrow(() ->
                new CustomException("Request with ID " + id + " not found.")
        );
        // Uncomment and set the return status based on approval
        // existingRequest.setReturnStatus(approve ? "Approved" : "Rejected");
        return requestRepository.save(existingRequest);
    }
}
