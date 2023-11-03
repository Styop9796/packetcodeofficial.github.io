const selectedServices = {};

function toggleService(div) {
    const serviceName = div.dataset.serviceName;
    const price = parseFloat(div.dataset.price);
    const serviceId = serviceName + price;

    if (selectedServices[serviceId]) {
        // Service is already selected, deselect it
        document.getElementById(serviceId).remove();
        delete selectedServices[serviceId];
        div.classList.remove('selected');
    } else {
        // Service is not selected, select it
        const serviceDiv = document.createElement('div');
        serviceDiv.id = serviceId;
        serviceDiv.textContent = `${serviceName}: $${price}`;
        document.getElementById('selectedServices').appendChild(serviceDiv);
        selectedServices[serviceId] = price;
        div.classList.add('selected');
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    const total = Object.values(selectedServices).reduce((sum, price) => sum + price, 0);
    document.getElementById('totalPrice').textContent = `Total Price: $${total.toFixed(2)}`;
}
