package com.nsbm.Inventory_Management_System.Dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ApprovalCreateDTO {
    private Long id;
    private int Form_Id;
    private String FormTitle;
    private String FormName;
    private LocalDateTime Create_Date;
    private LocalDateTime Modified_Date;
    private String Status;
}
