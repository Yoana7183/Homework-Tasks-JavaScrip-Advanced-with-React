
function makeEmployeeObject(employeFirsteName, employeeSecondName, salary, password) {

    var _password = password;

    this.employeFirsteName = employeFirsteName
    this.employeeSecondName = employeeSecondName;
    this.salary = salary;
    var baseSalary = salary;

    this.increaseSalary = function increaseSalary(incrValue, passwordToCheck) {

        if (passwordToCheck == _password) {

            salary = salary + incrValue;

            document.getElementById('employeeInfo').innerHTML = " Employee First Name : " + this.employeFirsteName + " Employee Second Name : " + this.employeeSecondName;
            document.getElementById('result').innerHTML = " Base salary: " + baseSalary + '/ ' + ' Salary balance after increase : ' + salary;
            document.getElementById('result').style.border="0.5px solid black"
            document.getElementById('result').style.borderRadius="20px";
            document.getElementById('result').style.marginTop="50px";

        } else {
            document.getElementById('result').innerHTML = 'Wrong password! ' + employeFirsteName + ' salary will not be increased!';
        }
    }
}

var employee_Pesho = new makeEmployeeObject('Pesho', 'Petrov', 1000, 'alabala');
var employee_Petkan = new makeEmployeeObject('Petkan', 'Petkanov', 1000, 'alabalanica');
var employee_Maria = new makeEmployeeObject('Maria', 'Manolova', 1000, 'alabalanica123');


var employeeArr = []
employeeArr.push(employee_Pesho, employee_Petkan, employee_Maria)

function ConfirmInputValues() {

    var isEmployeeFound = false;

    for (i = 0; i < employeeArr.length; i++) {
        var currenEmployee = employeeArr[i];

        if (inputEmployeeName.value == currenEmployee.employeFirsteName) {
            var payRaise = inputEmployeeSum.value;
            payRaise = parseFloat(payRaise);
            var employeePassword = inputEmployeePass.value;

            currenEmployee.increaseSalary(payRaise, employeePassword)
            isEmployeeFound = true
        }
    }

    if (isEmployeeFound == false) {
        document.getElementById('result').innerHTML = 'Wrong employee name';
    }

}

var inputEmployeeName = document.getElementById('employeeName');
var inputEmployeePass = document.getElementById('employeePass');
var inputEmployeeSum = document.getElementById('employeeIncrease');
