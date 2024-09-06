package com.nsbm.Inventory_Management_System.Dto;

import jakarta.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApprovalLevelDTO {
    private Long id;
    private int Approval_Level_Id;
    private String Approval_Title;
    private LocalDateTime Create_Date;
    private LocalDateTime Modified_Date;
    private String Status;
    private int User_Id;
    private int Approval_Id;
}
