package com.nsbm.Inventory_Management_System.Dto;
import com.nsbm.Inventory_Management_System.Util.ProcurementEnums;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
/**
 * Data Transfer Object (DTO) representing a procurement request.
 * This class is used to transfer procurement data between layers in the application.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProcurementDTO {
    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private int itemId;

    @Column(nullable = false)
    private String itemName;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private int requestedBy;

    @Column(nullable = false)
    private LocalDateTime requestDate;

    @Column(nullable = false)
    private LocalDateTime requiredByDate;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProcurementEnums.Priority priority;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProcurementEnums.Status status;

    /**
     * The date and time when the procurement request was approved.
     * This field is optional and may be null if the request has not been approved.
     */
    @Column(nullable = true)
    private LocalDateTime approvalDate;

    /**
     * The identifier of the person who approved the procurement request.
     * This field is optional and may be null if the request has not been approved.
     */
    @Column(nullable = true)
    private String approvedBy;

    /**
     * The identifier of the supplier associated with the procurement request.
     * This field is optional and may be null if the supplier has not been assigned.
     */
    @Column(nullable = true)
    private Integer supplierId;

}
