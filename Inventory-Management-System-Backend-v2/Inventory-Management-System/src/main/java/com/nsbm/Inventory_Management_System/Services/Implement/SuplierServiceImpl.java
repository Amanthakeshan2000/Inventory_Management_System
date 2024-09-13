package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.SuplierDTO;
import com.nsbm.Inventory_Management_System.Model.Suplier;
import com.nsbm.Inventory_Management_System.Repository.SuplierRepository;
import com.nsbm.Inventory_Management_System.Services.SuplierService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


// This class implements SuplierService and provides the actual business logic.
// The @Service annotation marks this class as a Spring service, making it eligible for dependency injection.


@Service
@Transactional

public class SuplierServiceImpl implements SuplierService {

    // Injecting the SuplierRepository to handle database operations.
    @Autowired
    private SuplierRepository suplierRepository;


    // Injecting ModelMapper to map between entity objects and DTO objects.
    @Autowired
    private ModelMapper modelMapper;

    // This method fetches all suppliers from the database, converts them to DTOs, and returns the list.
    @Override
    public List<SuplierDTO> getAllSupliers() {
        return suplierRepository.findAll().stream()
                .map(suplier -> modelMapper.map(suplier, SuplierDTO.class))
                .collect(Collectors.toList());
    }

    // This method adds a supplier's price by saving the entity to the database and returning the saved DTO.
    @Override
    public SuplierDTO addSuplierPrice(SuplierDTO suplierDTO) {
        Suplier suplier = modelMapper.map(suplierDTO, Suplier.class);
        suplier = suplierRepository.save(suplier);
        return modelMapper.map(suplier, SuplierDTO.class);


    }

    // This method updates the supplier information in the database.
    @Override
    public SuplierDTO updateSuplier(SuplierDTO suplierDTO) {
        Suplier suplier = modelMapper.map(suplierDTO, Suplier.class);
        suplier = suplierRepository.save(suplier);
        return modelMapper.map(suplier, SuplierDTO.class);
    }

    // This method deletes a supplier by its ID.
    @Override
    public void deleteSuplier(Long id) {
        suplierRepository.deleteById(id);

//        if (suplierRepository.existsById(id)) {
//            suplierRepository.deleteById(id);
//        } else {
//            throw new RuntimeException("Supplier not found with ID: " + id);
//        }
    }


    // Implementation of the new method to get suppliers by status
    @Override
    public List<SuplierDTO> getSuppliersByStatus(String status) {
        return suplierRepository.findByStatus(status).stream()
                .map(suplier -> modelMapper.map(suplier, SuplierDTO.class))
                .collect(Collectors.toList());
    }

}