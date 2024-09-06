package com.nsbm.Inventory_Management_System.Model;

import com.nsbm.Inventory_Management_System.Util.ProcurementEnums;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * Entity class representing a procurement request in the system.
 * This class maps to the "procurements" table in the database.
 */
@Entity
@Table(name="procurements")

public class Procurement {

    @Id
    @GeneratedValue
    private int id;

    @Column(nullable = false)
    private int itemId;

    @Column(nullable = false)
    private String itemName;

    @Column(nullable = false)
    private int quantity;
    /**
     * The ID of the person who requested the procurement.
     */
    @Column(nullable = false)
    private int requestedBy;
    /**
     * The date and time when the procurement request was made.
     */
    @Column(nullable = false)
    private LocalDateTime requestDate;

    @Column(nullable = false)
    private LocalDateTime requiredByDate;
    /**
     * The priority of the procurement request.
     */
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProcurementEnums.Priority priority;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ProcurementEnums.Status status;
    /**
     * The date and time when the procurement request was approved.
     * This field may be null if the request has not been approved.
     */
    @Column(nullable = true)
    private LocalDateTime approvalDate;
    /**
     * The ID of the person who approved the procurement request.
     * This field may be null if the request has not been approved.
     */
    @Column(nullable = true)
    private String approvedBy;
    /**
     * The ID of the supplier associated with the procurement request.
     * This field may be null if the supplier has not been assigned yet.
     */
    @Column(nullable = true)
    private Integer supplierId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getItemId() {
        return itemId;
    }

    public void setItemId(int itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getRequestedBy() {
        return requestedBy;
    }

    public void setRequestedBy(int requestedBy) {
        this.requestedBy = requestedBy;
    }

    public LocalDateTime getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(LocalDateTime requestDate) {
        this.requestDate = requestDate;
    }

    public LocalDateTime getRequiredByDate() {
        return requiredByDate;
    }

    public void setRequiredByDate(LocalDateTime requiredByDate) {
        this.requiredByDate = requiredByDate;
    }

    public ProcurementEnums.Priority getPriority() {
        return priority;
    }

    public void setPriority(ProcurementEnums.Priority priority) {
        this.priority = priority;
    }

    public ProcurementEnums.Status getStatus() {
        return status;
    }

    public void setStatus(ProcurementEnums.Status status) {
        this.status = status;
    }

    public LocalDateTime getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(LocalDateTime approvalDate) {
        this.approvalDate = approvalDate;
    }

    public String getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(String approvedBy) {
        this.approvedBy = approvedBy;
    }

    public Integer getSupplierId() {
        return supplierId;
    }

    public void setSupplierId(Integer supplierId) {
        this.supplierId = supplierId;
    }
}