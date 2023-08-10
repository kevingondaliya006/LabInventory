document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#userDetailForm form');
  const tableBody = document.querySelector('.table tbody');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const newRow = document.createElement('tr');

    // Populate the table row with form data
    formData.forEach((value, key) => {
      const cell = document.createElement('td');
      cell.textContent = value;
      newRow.appendChild(cell);
    });

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Clear the form inputs
    form.reset();
  });
});
