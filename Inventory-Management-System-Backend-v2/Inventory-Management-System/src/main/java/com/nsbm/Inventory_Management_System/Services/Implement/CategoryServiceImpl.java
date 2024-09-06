package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.CategoryDTO;
import com.nsbm.Inventory_Management_System.Model.CategoryModel;
import com.nsbm.Inventory_Management_System.Repository.CategoryRepository;
import com.nsbm.Inventory_Management_System.Services.CategoryService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service implementation for handling category-related operations.
 * Provides methods to get all categories, save a new category, and delete an existing category.
 */
@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Retrieves all categories from the inventory.
     *
     * @return A list of {@link CategoryDTO} objects representing all categories.
     */
    public List<CategoryDTO> getAllCategories() {
        List<CategoryModel> categoryList = categoryRepository.findAll();
        return modelMapper.map(categoryList, new TypeToken<List<CategoryDTO>>() {}.getType());
    }

    /**
     * Saves a new category to the inventory.
     *
     * @param category The {@link CategoryDTO} object representing the category to save.
     * @return The saved {@link CategoryDTO} object.
     */
    public CategoryDTO saveCategory(CategoryDTO category) {
        categoryRepository.save(modelMapper.map(category, CategoryModel.class));
        return category;
    }

    /**
     * Deletes a category from the inventory based on its ID.
     * If the category does not exist, throws a {@link EntityNotFoundException}.
     *
     * @param id The ID of the category to be deleted.
     * @throws EntityNotFoundException if the category with the specified ID is not found.
     */
    public void deleteCategory(int id) {
        Optional<CategoryModel> optionalCategory = categoryRepository.findById(id);

        if (optionalCategory.isPresent()) {
            CategoryModel category = optionalCategory.get();
            categoryRepository.delete(category);
        } else {
            throw new EntityNotFoundException("Item not found with id: " + id);
        }
    }
}
