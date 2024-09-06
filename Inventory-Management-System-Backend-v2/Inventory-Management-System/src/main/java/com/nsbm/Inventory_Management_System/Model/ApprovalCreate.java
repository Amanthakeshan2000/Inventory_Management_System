package com.nsbm.Inventory_Management_System.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "ApprovalCreate")
public class ApprovalCreate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private int Form_Id;

    @Column(nullable = true)
    private String FormTitle;

    @Column(nullable = true)
    private String FormName;

    @Column(nullable = true)
    private LocalDateTime Create_Date;

    @Column(nullable = true)
    private LocalDateTime Modified_Date;

    @Column(nullable = true)
    private String Status;
}
