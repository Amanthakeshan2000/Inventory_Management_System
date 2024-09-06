package com.nsbm.Inventory_Management_System;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

/**
 * The entry point for the Inventory Management System application.
 *
 * This class is responsible for bootstrapping the Spring Boot application.
 * It contains the main method which launches the application and the configuration
 * for the {@link ModelMapper} bean used for mapping DTOs to entities and vice versa.
 */
@SpringBootApplication
public class InventoryManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryManagementSystemApplication.class, args);
	}

	/**
	 * Provides a {@link ModelMapper} bean for mapping between DTOs and entities.
	 *
	 * This method creates and returns an instance of {@link ModelMapper}, which is
	 * used throughout the application to convert between data transfer objects (DTOs)
	 * and entity classes.
	 *
	 * @return A {@link ModelMapper} instance.
	 */
	@Bean
		public ModelMapper modelMapper () {
			return new ModelMapper();
		}

}


