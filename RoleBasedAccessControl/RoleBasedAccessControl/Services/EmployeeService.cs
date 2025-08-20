using RoleBasedAccessControl.Context;
using RoleBasedAccessControl.Interfaces;
using RoleBasedAccessControl.Models;

namespace RoleBasedAccessControl.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly RoleBasedAccessControlContext _context;
        public EmployeeService(RoleBasedAccessControlContext context)
        {
            _context = context;
        }
        public Employee AddEmployee(Employee employee)
        {
            var emp = _context.Employees.Add(employee);
            _context.SaveChanges();
            return emp.Entity;
        }

        public List<Employee> GetEmployeeDetails()
        {
            var employees = _context.Employees.ToList();
            return employees;
        }
    }
}
