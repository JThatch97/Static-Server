let employees = [];

$(document).ready(function(){
    $('#submit').on('click', function(){
        let employee = new Employee($('#firstName').val(), $('#lastName').val(),
         $('#employeeId').val(), $('#employeeTitle').val(), $('#annualSalary').val(), );
         employees.push(employee);
         updateEmployees();
    })
})

function updateEmployees(){
    let outputElement = $('#employeeList');
    outputElement.empty();
    let firstName =$('#firstName').val();
        let lastName =$('#lastName').val();
        let employeeId =$('#employeeId').val();
        let employeeTitle =$('#employeeTitle').val();
        let annualSalary =$('#annualSalary').val();
    for(employee of employees){
        outputElement.append(`<li> + ${firstName} + ${lastName}
         + ${employeeId} + ${employeeTitle} + ${annualSalary} + 
         </li>`)//Logs undefined
    }
}

class Employee {
    constructor(firstName, lastName, employeeId, employeeTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.employeeTitle = employeeTitle;
        this.annualSalary = annualSalary;
    }
};

