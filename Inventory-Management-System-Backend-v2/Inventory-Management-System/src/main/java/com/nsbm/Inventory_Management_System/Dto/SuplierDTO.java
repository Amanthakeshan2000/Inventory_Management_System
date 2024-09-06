package com.nsbm.Inventory_Management_System.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SuplierDTO {
    private int supid;
    private String description;
    private Date createdate;
    private Date modifydate;
    private String createby;
    private String modify_by;
    private float price;
    private String message;
    private String status;
}
