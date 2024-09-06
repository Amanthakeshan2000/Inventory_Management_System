package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.CategoryDTO;
import com.nsbm.Inventory_Management_System.Services.Implement.CategoryServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controller class for managing category-related operations in the inventory management system.
 * Provides endpoints for retrieving, adding, and deleting categories.
 */
@RestController
@RequestMapping("/api/v1/categories")
public class CategoryController {

    @Autowired
    private CategoryServiceImpl categoryService;

    /**
     * Endpoint to retrieve all categories.
     *
     * @return a response entity containing the list of categories or an empty status if no categories are found
     */
    @GetMapping("/getCategories")
    public ResponseEntity<List<CategoryDTO>> getAllCategories() {
        List<CategoryDTO> categories = categoryService.getAllCategories();
        if (categories.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }

    /**
     * Endpoint to add a new category.
     *
     * @param category the category data to be added
     * @return a response entity containing the created category or an error status
     */
    @PostMapping("/addCategory")
    public ResponseEntity<CategoryDTO> createCategory(@RequestBody CategoryDTO category) {
        try {
            CategoryDTO savedCategory = categoryService.saveCategory(category);
            return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Endpoint to delete a category by its ID.
     *
     * @param id the ID of the category to be deleted
     * @return a response entity indicating the result of the deletion operation
     */
    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable int id) {
        try {
            categoryService.deleteCategory(id);
            return new ResponseEntity<>( "Category Deleted", HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
