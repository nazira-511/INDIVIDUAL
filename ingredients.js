// Mock data
const ingredients = [
    { name: "Espresso Beans", category: "Coffee", stock: 2, min: 5 },
    { name: "Milk", category: "Dairy", stock: 3, min: 4 },
    { name: "Vanilla Syrup", category: "Syrup", stock: 1, min: 3 },
    { name: "Butter", category: "Pastry", stock: 6, min: 5 },
    { name: "Sugar", category: "Other", stock: 10, min: 8 }
];

// Function to determine status
function getStatus(stock, min) {
    if(stock <= min / 2) return "critical";
    else if(stock < min) return "low";
    else return "ok";
}

// Function to handle restock button click
function restock(name) {
    alert(name + " has been restocked!");
}

// Generate table rows
const tableBody = document.getElementById("ingredient-table");

ingredients.forEach(item => {
    const status = getStatus(item.stock, item.min);
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.stock}</td>
        <td>${item.min}</td>
        <td><span class="status-${status}">${status.toUpperCase()}</span></td>
        <td><button onclick="restock('${item.name}')">Restock</button></td>
    `;

    tableBody.appendChild(row);
});
