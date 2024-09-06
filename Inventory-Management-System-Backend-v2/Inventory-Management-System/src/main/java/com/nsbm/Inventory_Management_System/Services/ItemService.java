package com.nsbm.Inventory_Management_System.Services;

import com.nsbm.Inventory_Management_System.Dto.ItemDTO;

import java.util.List;

/**
 * Service interface for handling item-related operations.
 * Provides methods to save, retrieve, update, and delete items in the inventory.
 */
public interface ItemService {

    /**
     * Saves a new item to the inventory.
     *
     * @param itemDTO The {@link ItemDTO} object representing the item to save.
     * @return The saved {@link ItemDTO} object.
     */
    ItemDTO saveItems(ItemDTO itemDTO);

    /**
     * Retrieves all items from the inventory.
     *
     * @return A list of {@link ItemDTO} objects representing all items.
     */
    List<ItemDTO> getItems();

    /**
     * Retrieves a specific item from the inventory by its ID.
     *
     * @param id The ID of the item to retrieve.
     * @return The {@link ItemDTO} object representing the retrieved item.
     */
    ItemDTO getItemById(int id);

    /**
     * Deletes an item from the inventory by its ID.
     *
     * @param itemId The ID of the item to delete.
     * @return The {@link ItemDTO} object representing the deleted item.
     */
    ItemDTO deleteItem(int itemId);

    /**
     * Updates an existing item in the inventory.
     *
     * @param id The ID of the item to update.
     * @param itemDTO The {@link ItemDTO} object with updated item details.
     * @return The updated {@link ItemDTO} object.
     */
    ItemDTO updateItem(int id, ItemDTO itemDTO);
}
