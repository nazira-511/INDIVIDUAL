// Toggle menu rows
const toggleMenuRows = () => {
    const items = document.querySelectorAll('#menu-table .menu-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.item;
            const detailsRow = document.getElementById('details-' + name);
            if (!detailsRow) return;
            detailsRow.style.display = (detailsRow.style.display === 'table-row') ? 'none' : 'table-row';
        });
    });
};

// Toggle staff rows
const toggleStaffRows = () => {
    const items = document.querySelectorAll('#staff-table .staff-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.staff;
            const detailsRow = document.getElementById('details-' + name);
            if (!detailsRow) return;
            detailsRow.style.display = (detailsRow.style.display === 'table-row') ? 'none' : 'table-row';
        });
    });
};

// Run toggle functions
toggleMenuRows();
toggleStaffRows();

// Generic search filter
function filterTable(tableType, value) {
    const filter = value.toLowerCase();
    const table = document.getElementById(tableType + '-table');
    let rows;

    if(tableType === 'menu') rows = table.querySelectorAll('tbody tr.menu-item');
    else if(tableType === 'staff') rows = table.querySelectorAll('tbody tr.staff-item');
    else rows = table.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const text = row.cells[0].textContent.toLowerCase();
        const match = text.includes(filter);
        row.style.display = match ? '' : 'none';

        const detailsRow = document.getElementById('details-' + (row.dataset.item || row.dataset.staff));
        if(detailsRow) detailsRow.style.display = match ? detailsRow.style.display : 'none';
    });
}
