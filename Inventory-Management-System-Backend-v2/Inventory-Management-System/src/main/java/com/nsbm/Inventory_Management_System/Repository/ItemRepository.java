package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Model.ItemModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;


/**
 * Repository interface for performing CRUD operations on the ItemModel.
 * Extends JpaRepository to leverage Spring Data JPA functionality.
 */
public interface ItemRepository extends JpaRepository<ItemModel,Integer> {

    /**
     * Retrieves an item by its itemId.
     *
     * @param id the ID of the item to retrieve
     * @return an Optional containing the ItemModel if found, or an empty Optional if not
     */
    @Query("SELECT i FROM ItemModel i WHERE i.itemId = :id")
    Optional<ItemModel> getItemById(@Param("id") int id);

    /**
     * Retrieves a list of items based on their item name.
     *
     * @param item_Name the name of the item to filter by
     * @return a list of ItemModel objects that match the specified item name
     */
    @Query("SELECT i FROM ItemModel i WHERE i.item_name = :item_Name")
    List<ItemModel> itemName(@Param("name") String item_Name);
}
