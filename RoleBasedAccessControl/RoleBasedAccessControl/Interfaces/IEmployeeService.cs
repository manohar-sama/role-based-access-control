using RoleBasedAccessControl.Models;

namespace RoleBasedAccessControl.Interfaces
{
    public interface IEmployeeService
    {
        public List<Employee> GetEmployeeDetails();
        public Employee AddEmployee(Employee employee);
    }
}
