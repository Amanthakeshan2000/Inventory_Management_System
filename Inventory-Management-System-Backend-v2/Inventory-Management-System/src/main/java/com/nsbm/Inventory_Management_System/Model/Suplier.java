package com.nsbm.Inventory_Management_System.Model;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Suplier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable = false)
    private int supid;

    @Column(nullable = true)
    private String description;

    @Column(nullable = true)
    private Date createdate;

    @Column(nullable = true)
    private Date modifydate;

    @Column(nullable = true)
    private String createby;

    @Column(nullable = true)
    private String modify_by;

    @Column(nullable = true)
    private float price;

    @Column(nullable = true)
    private String message;

    @Column(nullable = true)
    private String status;
}