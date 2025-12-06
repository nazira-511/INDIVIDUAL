// Toggle menu item details (for menu table)
const toggleRows = (tableId, itemClass = 'menu-item', detailsClass = 'menu-item-details') => {
    const items = document.querySelectorAll(`#${tableId} .${itemClass}`);
    items.forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.item || item.dataset.staff;
            const detailsRow = document.getElementById('details-' + name);
            if (!detailsRow) return;
            detailsRow.style.display = (detailsRow.style.display === 'table-row') ? 'none' : 'table-row';
        });
    });
};

// Apply toggle
toggleRows('menu-table', 'menu-item', 'menu-item-details');
toggleRows('staff-table', 'staff-item', 'staff-item-details');

// Generic search filter
function filterTable(tableType, value) {
    const filter = value.toLowerCase();
    const table = document.getElementById(tableType + '-table');
    let rows;
    if(tableType === 'menu') {
        rows = table.querySelectorAll('tbody tr.menu-item');
    } else if(tableType === 'staff') {
        rows = table.querySelectorAll('tbody tr.staff-item');
    } else if(tableType === 'customers') {
        rows = table.querySelectorAll('tbody tr');
    }
    
    rows.forEach(row => {
        const text = row.cells[0].textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
        // hide details row too
        const detailsRow = document.getElementById('details-' + (row.dataset.item || row.dataset.staff));
        if (!text.includes(filter) && detailsRow) detailsRow.style.display = 'none';
    });
}
