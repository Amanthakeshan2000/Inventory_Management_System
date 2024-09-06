package com.nsbm.Inventory_Management_System.Model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
/**
 * This is representing the Approval model.
 */
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "Approval")
public class Approval {
    /**
     * Unique identifier for each approval.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private int approval_id;

    @Column(nullable = true)
    private String approval_name;

    @Column(nullable = true)
    private LocalDateTime create_date;
    /**
     * Status of the approval (e.g., pending, approved, rejected).
     */
    @Column(nullable = true)
    private String status;
}

