using Microsoft.EntityFrameworkCore;
using RoleBasedAccessControl.Models;

namespace RoleBasedAccessControl.Context
{
    public class RoleBasedAccessControlContext : DbContext
    {
        public RoleBasedAccessControlContext(DbContextOptions<RoleBasedAccessControlContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<Employee> Employees { get; set; }
    }
}
