package com.nsbm.Inventory_Management_System.Controller;

import com.nsbm.Inventory_Management_System.Dto.UserDTO;
import com.nsbm.Inventory_Management_System.Services.Implement.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller for managing user-related operations in the Inventory Management System.
 */
@RestController
@RequestMapping(value = "api/v1/user")
@CrossOrigin
public class UserController {

    private UserServiceImpl userService;

    /**
     * Retrieves a list of all users.
     *
     * @return a list of {@link UserDTO} containing user details.
     */
    @GetMapping("/getUsers")
    public List<UserDTO> getUser() {
        return userService.getAllUsers();
    }

    /**
     * Saves a new user.
     *
     * @param userDTO the {@link UserDTO} containing user data to save.
     * @return the saved {@link UserDTO}.
     */
    @PostMapping("/saveUser")
    public UserDTO saveUser(@RequestBody UserDTO userDTO) {
        return userService.saveUser(userDTO);
    }

    /**
     * Updates an existing user's information.
     *
     * @param userDTO the {@link UserDTO} containing updated user data.
     * @return the updated {@link UserDTO}.
     */
    @PutMapping("/updateUser")
    public UserDTO updateUser(@RequestBody UserDTO userDTO) {
        return userService.updateUser(userDTO);
    }

    /**
     * Deletes a user.
     *
     * @param userDTO the {@link UserDTO} containing user data to delete.
     * @return true if the user is successfully deleted, false otherwise.
     */
    @DeleteMapping("/deleteUser")
    public boolean deleteUser(@RequestBody UserDTO userDTO) {
        return userService.deleteUser(userDTO);
    }

    /**
     * Retrieves a user by their user ID.
     *
     * @param userID the ID of the user to retrieve.
     * @return the {@link UserDTO} of the user with the given ID.
     */
    @GetMapping("/getUserByUserId/{userID}")
    public UserDTO getUserByUserID(@PathVariable String userID) {
        return userService.getUserByUserID(userID);
    }

    /**
     * Retrieves a user by their user ID and address.
     *
     * @param userID  the ID of the user.
     * @param address the address of the user.
     * @return the {@link UserDTO} of the user matching the given ID and address.
     */
    @GetMapping("/getUserByUserIDAndAddress/{userID}/{address}")
    public UserDTO getUserByUserIDAndAddress(@PathVariable String userID, @PathVariable String address) {
        System.out.println("User ID: " + userID + " User address: " + address);
        return userService.getUserByUserIDAndAddress(userID, address);
    }
}
