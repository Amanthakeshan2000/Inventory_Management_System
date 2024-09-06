package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Model.CategoryModel;
import com.nsbm.Inventory_Management_System.Model.ItemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

/**
 * Repository interface for performing CRUD operations on the CategoryModel.
 * Extends JpaRepository to leverage Spring Data JPA functionality.
 */
public interface CategoryRepository extends JpaRepository<CategoryModel,Integer> {


    /**
     * Retrieves a category by its category ID.
     *
     * @param id the ID of the category to retrieve
     * @return an Optional containing the CategoryModel if found, or an empty Optional if not
     */
    @Query("SELECT c FROM CategoryModel c WHERE c.category_id = :id")
    Optional<CategoryModel> getCategoryById(@Param("id") int id);


    /**
     * Retrieves a list of categories that match a specific description.
     *
     * @param description the description of the categories to filter by
     * @return a list of CategoryModel objects that match the specified description
     */
    @Query("SELECT c FROM CategoryModel c WHERE c.description = :description")
    List<CategoryModel> categoryDescription(@Param("description") String description);
}
