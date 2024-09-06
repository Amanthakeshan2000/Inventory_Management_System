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
@Table(name = "ApprovalLevel")

public class ApprovalLevel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true)
    private int Approval_Level_Id;

    @Column(nullable = true)
    private String Approval_Title;

    @Column(nullable = true)
    private LocalDateTime Create_Date;

    @Column(nullable = true)
    private LocalDateTime Modified_Date;

    @Column(nullable = true)
    private String Status;

    @Column(nullable = true)
    private int User_Id;

    @Column(nullable = true)
    private int Approval_Id;
}
