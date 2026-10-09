document.addEventListener('DOMContentLoaded', () => {
    initInventory();
    updateHUD();
});

function initInventory() {
    if (!localStorage.getItem('player_inventory')) {
        localStorage.setItem('player_inventory', JSON.stringify([]));
    }
}

function addItem(itemName) {
    const inventory = JSON.parse(localStorage.getItem('player_inventory')) || [];
    if (!inventory.includes(itemName)) {
        inventory.push(itemName);
        localStorage.setItem('player_inventory', JSON.stringify(inventory));
    }
}

function hasItem(itemName) {
    const inventory = JSON.parse(localStorage.getItem('player_inventory')) || [];
    return inventory.includes(itemName);
}

function resetGame() {
    localStorage.removeItem('player_inventory');
}

function updateHUD() {
    const inventoryElement = document.getElementById('hud-inventory');
    if (inventoryElement) {
        const inventory = JSON.parse(localStorage.getItem('player_inventory')) || [];
        inventoryElement.textContent = inventory.length > 0 ? inventory.join(', ') : 'Aucun';
    }
}
