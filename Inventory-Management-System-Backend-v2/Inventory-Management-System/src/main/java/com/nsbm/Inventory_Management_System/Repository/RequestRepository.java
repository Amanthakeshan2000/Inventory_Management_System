package com.nsbm.Inventory_Management_System.Repository;

import com.nsbm.Inventory_Management_System.Model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for managing 'Request' entities.
 *
 * Extends JpaRepository to provide CRUD operations and more for the 'Request' entity.
 *
 * JpaRepository<Request, Long>:
 * - Request: the type of the entity to manage.
 * - Long: the type of the primary key (ID) of the entity.
 */

public interface RequestRepository extends JpaRepository<Request, Long> {
}