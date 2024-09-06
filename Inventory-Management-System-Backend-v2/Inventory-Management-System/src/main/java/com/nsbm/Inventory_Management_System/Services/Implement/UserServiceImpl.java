package com.nsbm.Inventory_Management_System.Services.Implement;

import com.nsbm.Inventory_Management_System.Dto.UserDTO;
import com.nsbm.Inventory_Management_System.Exception.ExceptionHandle;
import com.nsbm.Inventory_Management_System.Model.User;
import com.nsbm.Inventory_Management_System.Repository.UserRepo;
import org.modelmapper.TypeToken;
import org.modelmapper.ModelMapper;

import java.util.List;

/**
 * Implementation of user-related services for managing {@link User} entities.
 * Provides methods for saving, updating, retrieving, and deleting users.
 */
public class UserServiceImpl {

    /** Repository for performing database operations on {@link User} entities. */
    private UserRepo userRepo;

    /** ModelMapper for converting between {@link User} and {@link UserDTO} objects. */
    private ModelMapper modelMapper;

    /** Custom exception handler for handling user-related exceptions. */
    private ExceptionHandle e;

    /**
     * Saves a new user to the database.
     *
     * @param userDTO the data transfer object containing user details.
     * @return the saved user details.
     */
    public UserDTO saveUser(UserDTO userDTO) {
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    /**
     * Retrieves a list of all users from the database.
     *
     * @return a list of {@link UserDTO} objects containing user details.
     */
    public List<UserDTO> getAllUsers() {
        List<User> userList = userRepo.findAll();
        return modelMapper.map(userList, new TypeToken<List<UserDTO>>() {}.getType());
    }

    /**
     * Updates an existing user in the database.
     *
     * @param userDTO the data transfer object containing updated user details.
     * @return the updated user details.
     */
    public UserDTO updateUser(UserDTO userDTO) {
        userRepo.save(modelMapper.map(userDTO, User.class));
        return userDTO;
    }

    /**
     * Deletes a user from the database.
     *
     * @param userDTO the data transfer object containing user details to be deleted.
     * @return {@code true} if the user was deleted successfully.
     */
    public boolean deleteUser(UserDTO userDTO) {
        userRepo.delete(modelMapper.map(userDTO, User.class));
        return true;
    }

    /**
     * Retrieves a user by their user ID.
     *
     * @param userID the ID of the user.
     * @return the {@link UserDTO} containing user details.
     */
    public UserDTO getUserByUserID(String userID) {
        User user = userRepo.getUserByUserID(userID);
        return modelMapper.map(user, UserDTO.class);
    }

    /**
     * Retrieves a user by their user ID and address.
     *
     * @param userId the ID of the user.
     * @param address the address of the user.
     * @return the {@link UserDTO} containing user details.
     */
    public UserDTO getUserByUserIDAndAddress(String userId, String address) {
        User user = userRepo.getUserByUserIDAndAddress(userId, address);
        return modelMapper.map(user, UserDTO.class);
    }
}
