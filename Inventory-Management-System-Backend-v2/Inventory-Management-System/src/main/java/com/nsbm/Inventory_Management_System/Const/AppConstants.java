package com.nsbm.Inventory_Management_System.Const;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * This class contains application-wide constant values used for hard-coded messages
 * and default values in the system.
 */
public class AppConstants {

    /**
     * Success message when an approval is successfully updated.
     */
    public static final String successfullUpdate = "Approval updated successfully";

    /**
     * Error message when an approval update fails.
     */
    public static final String unsuccessfullUpdate = "Approval update failed";

    /**
     * Message displayed when an approval is successfully deleted.
     */
    public static final String deleteApproval = "Approval deleted successfully.";

    /**
     * Default name used in the system.
     */
    public static final String defaultName = "Kaveesha Madhushani";

    /**
     * Constant representing the status "APPROVED".
     */
    public static final String APPROVED = "APPROVED";

    /**
     * Error message when an approval is not found by the provided ID.
     */
    public static final String ApprovalNotFound = "Approval not found with id: ";
}
