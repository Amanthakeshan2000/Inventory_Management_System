package com.nsbm.Inventory_Management_System.Const;

import com.nsbm.Inventory_Management_System.Dto.UserDTO;
import com.nsbm.Inventory_Management_System.Services.Implement.UserServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class holds constant strings used for various messages and statuses
 * related to approval processes and user information.
 */
public class ConstHandle {

    /** Message indicating a successful User update. */
    public static final String successfullUpdate = "User updated successfully";

    /** Message indicating a failed User update. */
    public static final String unsuccessfullUpdate = "User update failed";

    /** Message indicating a successful User deletion. */
    public static final String deleteUser = "User deleted successfully.";

    /** Default name used in the system when no specific name is provided. */
    public static final String defaultName = "Amantha Keshan";

    /** Status representing that the User has been granted. */
    public static final String APPROVED = "APPROVED";
}

