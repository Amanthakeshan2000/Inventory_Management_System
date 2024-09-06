package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.ItemDTO;
import com.nsbm.Inventory_Management_System.Services.Implement.ItemServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

/**
 * Controller class for managing item-related operations in the inventory management system.
 * Provides endpoints for creating, retrieving, updating, and deleting items.
 */
@RestController
@RequestMapping("/api/v1/item")
public class ItemController {

    @Autowired
    private ItemServiceImpl ItemService;

    /**
     * Endpoint to save a new item.
     *
     * @param itemDTO the item data to be saved
     * @return the saved item data
     */
    @PostMapping("/postItem")
    public ItemDTO saveItems(@RequestBody ItemDTO itemDTO){
        return ItemService.saveItems(itemDTO);
    }

    /**
     * Endpoint to retrieve a list of all items.
     *
     * @return a list of item data
     */
    @GetMapping("/getAllItems")
    public List<ItemDTO> getItems(){
        return ItemService.getItems();
    }

    /**
     * Endpoint to delete an item by its ID.
     *
     * @param id the ID of the item to be deleted
     * @return a response entity containing the deleted item or an error message
     */
    @DeleteMapping("/deleteItem/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable int id) {
        try {
            ItemService.deleteItem(id);
            return new ResponseEntity<>("Item Id  Deleted", HttpStatus.OK);
        } catch (EntityNotFoundException ex) {
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Endpoint to retrieve an item by its ID.
     *
     * @param id the ID of the item to be retrieved
     * @return a response entity containing the item data or an error status
     */
    @GetMapping("/getById/{id}")
    public ResponseEntity<ItemDTO> getItemById(@PathVariable int id) {
        try {
            ItemDTO getItemById = ItemService.getItemById(id);
            return new ResponseEntity<>(getItemById, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    /**
     * Endpoint to update an existing item.
     *
     * @param id the ID of the item to be updated
     * @param itemDTO the new data for the item
     * @return a response entity containing the updated item data or an error status
     */
    @PutMapping("/editItem/{id}")
    public ResponseEntity<ItemDTO> updateUser(@PathVariable int id, @RequestBody ItemDTO itemDTO) {
        try {
            ItemDTO updatedItem = ItemService.updateItem(id, itemDTO);
            return ResponseEntity.ok(updatedItem);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
