const STORAGE_KEY = "payments";

function getPayments() {
    const storedPayments = localStorage.getItem(STORAGE_KEY);

    if (storedPayments === null) {
        return [];
    }

    return JSON.parse(storedPayments);
}

function savePayments(payments) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payments));
}

function savePayment(payment) {
    const payments = getPayments();

    payments.push(payment);

    savePayments(payments);
}

function setupPaymentForm() {
    const form = document.getElementById("form");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        const nameInput = document.getElementById("fullname");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const cardTypeInput = document.getElementById("card-type");
        const cardNumberInput = document.getElementById("card-number");
        const expirationDateInput = document.getElementById("exp-date");

        const payment = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value,
            cardType: cardTypeInput.value,
            cardNumber: cardNumberInput.value.trim(),
            expirationDate: expirationDateInput.value.trim()
        };

        savePayment(payment);

        alert("Pago registrado correctamente.");

        form.reset();

        window.location.href = "index.html";
    });
}

function displayPayments() {
    const paymentList = document.getElementById("paymentList");

    if (!paymentList) {
        return;
    }

    const payments = getPayments();

    paymentList.innerHTML = "";

    payments.forEach(function (payment, index) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = payment.name;

        const emailCell = document.createElement("td");
        emailCell.textContent = payment.email;

        const cardTypeCell = document.createElement("td");
        cardTypeCell.textContent = payment.cardType;

        const actionsCell = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("btn","btn-danger")

        deleteButton.addEventListener("click", function () {
            deletePayment(index);
        });

        actionsCell.appendChild(deleteButton);

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(cardTypeCell);
        row.appendChild(actionsCell);

        paymentList.appendChild(row);
    });
}

function deletePayment(index) {
    const payments = getPayments();

    payments.splice(index, 1);

    savePayments(payments);

    displayPayments();
}

document.addEventListener("DOMContentLoaded", function () {
    setupPaymentForm();
    displayPayments();
});