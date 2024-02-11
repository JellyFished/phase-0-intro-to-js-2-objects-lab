// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };

    newEmployee[key] = value;

    return newEmployee;
}
//employee.object;

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}
 
employee.streetAddress = "12 Broadway";


function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };

    newEmployee['name'] = key;

    delete newEmployee.name;

    return newEmployee;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee['name'] = key;

    delete employee.name;

    return employee;

}


