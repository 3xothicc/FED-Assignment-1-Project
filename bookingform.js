function showPayment() {
    document.getElementById('personalForm').classList.add('hidden');
    document.getElementById('payment-form').classList.remove('hidden');

    // Show or hide credit card details and PayPal button based on the selected payment option
    const paymentOption = document.getElementById('paymentOption').value;
    document.getElementById('creditCardDetails').classList.toggle('hidden', paymentOption !== 'mastercard' && paymentOption !== 'visa');
    document.getElementById('paypalButton').classList.toggle('hidden', paymentOption !== 'paypal');
}

function submitPaymentForm() {
    

    // Submission of payment form (in real life scenario would probably connect to server based payment)
    document.getElementById('payment-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
}