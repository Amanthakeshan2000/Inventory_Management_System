package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.ItemDTO;
import com.nsbm.Inventory_Management_System.Model.ItemModel;
import com.nsbm.Inventory_Management_System.Repository.ItemRepository;
import com.nsbm.Inventory_Management_System.Services.ItemService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service implementation for handling item-related operations.
 * Provides methods to save, retrieve, update, and delete items.
 */
@Service
@Transactional
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepo;

    @Autowired
    private ModelMapper modelMapper;

    /**
     * Saves a new item to the inventory.
     *
     * @param itemDTO The {@link ItemDTO} object representing the item to save.
     * @return The saved {@link ItemDTO} object.
     */
    public ItemDTO saveItems(ItemDTO itemDTO) {
        itemRepo.save(modelMapper.map(itemDTO, ItemModel.class));
        return itemDTO;
    }

    /**
     * Retrieves all items from the inventory.
     *
     * @return A list of {@link ItemDTO} objects representing all items.
     */
    public List<ItemDTO> getItems() {
        List<ItemModel> itemList = itemRepo.findAll();
        return modelMapper.map(itemList, new TypeToken<List<ItemDTO>>() {}.getType());
    }

    /**
     * Retrieves a specific item by its ID.
     *
     * @param id The ID of the item to retrieve.
     * @return The {@link ItemDTO} object representing the item.
     * @throws RuntimeException if the item is not found.
     */
    public ItemDTO getItemById(int id) {
        Optional<ItemModel> ItemOptional = itemRepo.findById(id);
        if (ItemOptional.isPresent()) {
            return modelMapper.map(ItemOptional.get(), ItemDTO.class);
        } else {
            throw new RuntimeException("Category not found");
        }
    }

    /**
     * Deletes an item from the inventory by its ID.
     *
     * @param itemId The ID of the item to delete.
     * @return The {@link ItemDTO} object representing the deleted item.
     * @throws EntityNotFoundException if the item is not found.
     */
    public ItemDTO deleteItem(int itemId) {
        Optional<ItemModel> optionalItem = itemRepo.findById(itemId);
        if (optionalItem.isPresent()) {
            ItemModel item = optionalItem.get();
            itemRepo.delete(item);
            return modelMapper.map(item, ItemDTO.class);
        } else {
            throw new EntityNotFoundException("Item not found with id: " + itemId);
        }
    }

    /**
     * Updates an existing item in the inventory by its ID.
     *
     * @param id The ID of the item to update.
     * @param itemDTO The {@link ItemDTO} object containing the updated item details.
     * @return The updated {@link ItemDTO} object.
     * @throws EntityNotFoundException if the item is not found.
     */
    public ItemDTO updateItem(int id, ItemDTO itemDTO) {
        Optional<ItemModel> itemOptional = itemRepo.findById(id);
        if (itemOptional.isPresent()) {
            ItemModel item = itemOptional.get();
            item.setItemId(itemDTO.getItemId());
            item.setItem_name(itemDTO.getItem_name());
            itemRepo.save(item);
            return modelMapper.map(item, ItemDTO.class);
        } else {
            throw new EntityNotFoundException("Item not found with id: " + id);
        }
    }
}
