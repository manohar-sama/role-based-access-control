using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RoleBasedAccessControl.Interfaces;
using RoleBasedAccessControl.Models;

namespace RoleBasedAccessControl.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;
        public EmployeesController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        // GET: api/<EmployeesController>
        [HttpGet]
        [Authorize(Roles = "Admin,Editor,Viewer")]
        public List<Employee> GetEmployees()
        {
            return _employeeService.GetEmployeeDetails();
        }



        // POST api/<EmployeesController>
        [HttpPost]
        [Authorize]
        [Authorize(Roles = "Admin,Editor")]
        public Employee AddEmployee([FromBody] Employee emp)
        {
            var employee = _employeeService.AddEmployee(emp);
            return employee;
        }
    }
}
