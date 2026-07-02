
    const chatButton =
    document.getElementById("chat-button");

    const chatBox =
    document.getElementById("chat-box");

    chatButton.onclick = function(){
        if(chatBox.style.display==="block"){
            chatBox.style.display="none";
        }
        else{
            chatBox.style.display="block";
        }
    }

    function sendMessage(){

        let input =
        document.getElementById("user-input");

        let message =
        input.value.toLowerCase();

        let response="";

        if(message.includes("price") || message.includes("room price") || message.includes("cost")){
    response =
    "Our room prices are:\nDeluxe Room - ₹3500/night\nFamily Room - ₹4500/night\nLuxury Suite - ₹6000/night.";
}

else if(message.includes("discount") || message.includes("offer")){
    response =
    "We regularly provide seasonal discounts and special offers for early bookings and extended stays. Please contact our reception for current offers.";
}

else if(message.includes("package") || message.includes("honeymoon") || message.includes("vacation")){
    response =
    "We offer family packages, honeymoon packages, wellness retreats and holiday packages. Please contact our team for personalized recommendations.";
}

else if(message.includes("cancel") || message.includes("cancellation")){
    response =
    "Bookings can be cancelled through the Manage Booking page. Free cancellation is available up to 24 hours before check-in.";
}

else if(message.includes("modify") || message.includes("change booking") || message.includes("reschedule")){
    response =
    "You can modify your reservation using the Manage Booking page or contact our reception team for assistance.";
}

else if(message.includes("check in") || message.includes("check-in")){
    response =
    "Check-in starts at 2:00 PM and check-out is at 11:00 AM.";
}

else if(message.includes("facilities") || message.includes("amenities")){
    response =
    "We offer a swimming pool, spa, fitness centre, restaurant, room service, free WiFi and complimentary parking.";
}

else if(message.includes("spa")){
    response =
    "Our wellness spa offers massage therapy, aromatherapy sessions and rejuvenating treatments for guests.";
}

else if(message.includes("pool") || message.includes("swimming")){
    response =
    "Our outdoor swimming pool is open daily from 7:00 AM to 9:00 PM.";
}

else if(message.includes("wifi") || message.includes("internet")){
    response =
    "Complimentary high-speed WiFi is available throughout the hotel.";
}

else if(message.includes("contact") || message.includes("phone") || message.includes("email")){
    response =
    "You can reach us at +91 9876543210 or email us at contact@themantrahotels.com.";
}

else if(message.includes("location") || message.includes("address")){
    response =
    "The Mantra Hotels is conveniently located in Nellore with easy access to major attractions and transportation hubs.";
}

else if(message.includes("hello") || message.includes("hi") || message.includes("hey")){
    response =
    "Welcome to The Mantra Hotels! How may I assist you today?";
}

else if(
    message.includes("cancel process") ||
    message.includes("how to cancel") ||
    message.includes("cancel booking process") ||
    message.includes("steps to cancel")
){
    response =
    "To cancel your booking, please visit the Manage Booking page, enter your Booking ID and registered email address, select your reservation and click 'Cancel Booking'. Free cancellation is available up to 24 hours before check-in.";
}
else if(
    message.includes("thank") ||
    message.includes("thanks") ||
    message.includes("thank you")
){
    response =
    "You're most welcome! We hope I was able to assist you today. Thank you for choosing The Mantra Hotels and we look forward to welcoming you soon. Have a wonderful day!";
}
else if(
    message.includes("bye") ||
    message.includes("goodbye") ||
    message.includes("see you")||
    message.includes("nothing")
){
    response =
    "Thank you for visiting The Mantra Hotels. We hope to welcome you again for a memorable stay. Safe travels and have a wonderful day!";
}
else if(
    message.includes("booking confirmed") ||
    message.includes("confirmation")
){
    response =
    "After completing your reservation, you will receive a booking confirmation email containing your Booking ID and reservation details.";
}
else if(
    message.includes("refund") ||
    message.includes("money back")
){
    response =
    "Eligible refunds are processed within 5-7 business days after cancellation, depending on your payment method and cancellation policy.";
}
else{
    response =
    "I can assist you with room prices, discounts, packages, booking modifications, cancellations, refunds, facilities, check-in timings and contact information. How may I assist you today?";
}
    document.getElementById("user-input").addEventListener("keypress", function(event) 
    {

        if(event.key === "Enter"){
            event.preventDefault();
            sendMessage();
        }

    });

        document.getElementById("chat-messages")
        .innerHTML +=
        "<p><strong>You:</strong> "
        + input.value +
        "</p>";

        document.getElementById("chat-messages")
        .innerHTML +=
        "<p><strong>Bot:</strong> "
        + response +
        "</p>";

        input.value="";
    }
