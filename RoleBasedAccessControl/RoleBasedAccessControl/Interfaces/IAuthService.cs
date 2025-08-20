﻿using RoleBasedAccessControl.Models;

namespace RoleBasedAccessControl.Interfaces
{
    public interface IAuthService
    {
        User AddUser(User user);
        string Login(LoginRequest loginRequest);
        Role AddRole(Role role);
        bool AssignRoleToUser(AddUserRole obj);

    }
}
