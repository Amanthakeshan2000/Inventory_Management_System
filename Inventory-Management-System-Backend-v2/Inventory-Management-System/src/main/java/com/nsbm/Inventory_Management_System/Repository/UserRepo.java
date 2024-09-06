package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * Repository interface for accessing and managing {@link User} entities in the database.
 * Extends {@link JpaRepository} to provide basic CRUD operations.
 */
public interface UserRepo extends JpaRepository<User, Integer> {

    /**
     * Retrieves a {@link User} based on the user ID.
     *
     * @param userId the ID of the user.
     * @return the {@link User} with the specified user ID.
     */
    @Query(value = "SELECT * FROM User WHERE id = ?1", nativeQuery = true)
    User getUserByUserID(String userId);

    /**
     * Retrieves a {@link User} based on the user ID and address.
     *
     * @param userId  the ID of the user.
     * @param address the address of the user.
     * @return the {@link User} with the specified user ID and address.
     */
    @Query(value = "SELECT * FROM User WHERE id =?1 AND address =?2", nativeQuery = true)
    User getUserByUserIDAndAddress(String userId, String address);
}
