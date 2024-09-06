package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.SuppliersDTO;
import com.nsbm.Inventory_Management_System.Model.Supplier;
import com.nsbm.Inventory_Management_System.Repository.SupplierRepository;
import com.nsbm.Inventory_Management_System.Services.SupplierService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Implementation of the {@link SupplierService} interface.
 *
 * This service manages CRUD operations for supplier records, including adding, updating, retrieving, and deleting
 * supplier information. It utilizes {@link SupplierRepository} for data access and {@link ModelMapper} for mapping
 * between DTOs and entities.
 */
@Service
public class SupplierServiceImpl implements SupplierService {

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Adds a new supplier to the system.
     *
     * @param supplierDTO The {@link SuppliersDTO} object containing supplier details.
     * @return The saved {@link SuppliersDTO} object.
     */
    @Override
    public SuppliersDTO saveSupplier(SuppliersDTO supplierDTO) {
        Supplier supplier = modelMapper.map(supplierDTO, Supplier.class);
        supplierRepository.save(supplier);
        return supplierDTO;
    }

    /**
     * Retrieves all suppliers from the system.
     *
     * @return A list of {@link SuppliersDTO} objects representing all suppliers.
     */
    @Override
    public List<SuppliersDTO> getAllSuppliers() {
        List<Supplier> supplierList = supplierRepository.findAll();
        return modelMapper.map(supplierList, new TypeToken<List<SuppliersDTO>>() {}.getType());
    }

    /**
     * Updates the details of an existing supplier.
     *
     * @param id The ID of the supplier to be updated.
     * @param updatedSupplierDTO The {@link SuppliersDTO} object containing updated supplier details.
     * @return The updated {@link SuppliersDTO} object.
     * @throws RuntimeException if no supplier is found with the specified ID.
     */
    @Override
    public SuppliersDTO updateSupplier(int id, SuppliersDTO updatedSupplierDTO) {
        Supplier existingSupplier = supplierRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Supplier not found with id " + id));

        // Updating fields of existingSupplier with values from updatedSupplierDTO
        existingSupplier.setName(updatedSupplierDTO.getName());
        existingSupplier.setContactEmail(updatedSupplierDTO.getContactEmail());
        existingSupplier.setContactPhone(updatedSupplierDTO.getContactPhone());
        existingSupplier.setAddress(updatedSupplierDTO.getAddress());
        existingSupplier.setCity(updatedSupplierDTO.getCity());
        existingSupplier.setState(updatedSupplierDTO.getState());
        existingSupplier.setPostalCode(updatedSupplierDTO.getPostalCode());
        existingSupplier.setCountry(updatedSupplierDTO.getCountry());
        existingSupplier.setStatus(updatedSupplierDTO.getStatus());

        supplierRepository.save(existingSupplier);
        // Save the updated supplier back to the repository
        return modelMapper.map(existingSupplier, SuppliersDTO.class);
    }


    /**
     * Deletes a supplier from the system.
     *
     * @param id The ID of the supplier to be deleted.
     * @return A message indicating the result of the deletion.
     * @throws RuntimeException if no supplier is found with the specified ID.
     */
    @Override
    public String deleteSupplier(int id) {
        if (!supplierRepository.existsById(id)) {
            throw new RuntimeException("Supplier not found with id " + id);
        }
        supplierRepository.deleteById(id);
        return "Supplier with id " + id + " deleted successfully";
    }
}
