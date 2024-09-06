package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.CategoryDTO;

import java.util.List;

/**
 * Service interface for handling category-related operations.
 * Provides methods to retrieve, save, and delete categories.
 */
public interface CategoryService {

    /**
     * Retrieves all categories from the inventory.
     *
     * @return A list of {@link CategoryDTO} objects representing all categories.
     */
    List<CategoryDTO> getAllCategories();

    /**
     * Saves a new category to the inventory.
     *
     * @param category The {@link CategoryDTO} object representing the category to save.
     * @return The saved {@link CategoryDTO} object.
     */
    CategoryDTO saveCategory(CategoryDTO category);

    /**
     * Deletes a category from the inventory by its ID.
     *
     * @param id The ID of the category to delete.
     */
    void deleteCategory(int id);
}
