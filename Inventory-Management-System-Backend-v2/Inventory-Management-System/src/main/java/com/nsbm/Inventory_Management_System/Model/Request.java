package com.nsbm.Inventory_Management_System.Model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor       // Generates a constructor with all fields as parameters
@NoArgsConstructor        // Generates a no-argument constructor
@Entity                   // Marks this class as an entity to be mapped to a database table
@Table(name = "requests") // Specifies the name of the table to map the entity

public class Request {

    @Id // Marks the field as the primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Automatically generates unique IDs for the primary key
    private Long id; // Unique identifier for each request

    // Item involved in the request
    private String item;

    // Location related to the request
    private String location;

    // Repair details for the item (if any)
    private String repair;

    // Return status of the item (whether returned or not)
    private String returnStatus;


    // Getters and setters for the 'item', 'location', 'repair', and 'returnStatus' fields

    /**
     * Gets the item for the request.
     *
     * @return the item involved in the request
     */
    public String getItem() {
        return item;
    }

    /**
     * Sets the item for the request.
     *
     * @param item the item to set
     */
    public void setItem(String item) {
        this.item = item;
    }

    /**
     * Gets the location for the request.
     *
     * @return the location of the request
     */
    public String getLocation() {
        return location;
    }

    /**
     * Sets the location for the request.
     *
     * @param location the location to set
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * Gets the repair status of the item.
     *
     * @return the repair status of the item
     */
    public String getRepair() {
        return repair;
    }

    /**
     * Sets the repair status of the item.
     *
     * @param repair the repair status to set
     */
    public void setRepair(String repair) {
        this.repair = repair;
    }

    /**
     * Gets the return status of the item.
     *
     * @return the return status of the item
     */
    public String getReturnStatus() {
        return returnStatus;
    }

    /**
     * Sets the return status of the item.
     *
     * @param returnStatus the return status to set
     */
    public void setReturnStatus(String returnStatus) {
        this.returnStatus = returnStatus;
    }
}
