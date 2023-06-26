var selectedRow = null;

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["studentName"] = document.getElementById("studentName").value;
    formData["collegeName"] = document.getElementById("collegeName").value;
    formData["College"] = document.getElementById("College").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Contact"] = document.getElementById("Contact").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document
        .getElementById("storeList")
        .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.studentName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.collegeName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.College;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Email;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Contact;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> 
                    <button onClick="onDelete(this)">Delete</button>;`
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("studentName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("collegeName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("College").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Contact").value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.studentName;
    selectedRow.cells[1].innerHTML = formData.collegeName;
    selectedRow.cells[2].innerHTML = formData.College;
    selectedRow.cells[3].innerHTML = formData.Email;
    selectedRow.cells[4].innerHTML = formData.Skills;

}

function onDelete(td) {
    if (confirm("Do you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("collegeName").value = "";
    document.getElementById("College").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Contact").value = "";

    selectedRow = null;
}