/* Create dropdown option in javascript */

(function rooms() {
    var element = document.getElementById('rooms'),
        docFragment = document.createDocumentFragment();
    for (var i = 1; i <= 50; i++) {
        var dropdown = document.createElement('option');
        dropdown.value = i;
        dropdown.appendChild(document.createTextNode(i));
        docFragment.appendChild(dropdown);
    }
    element.appendChild(docFragment);
}());

/* Booking function - Demo only */

document.getElementById("book").addEventListener("click", book);

function book() {
    let place = document.getElementById("place").value;
    let date_selected = document.getElementById("datepicker").value;
    let rooms = document.getElementById("rooms").value;
    /* Data validation - Can only submit if data is entered into form */
    if (place === '' || date_selected === '') {
        alert('Please ensure that you have filled in all available fields');

        // Returns to if statement, rather than continue with the program
        return;
    } else {
        alert("You have booked " + rooms + " rooms in " + place + " on the " +
            date_selected);
        return;
    }
}

/* Submit contact form - Demo only */

document.getElementById("submit").addEventListener("click", contact);

function contact() {
    let contact = document.getElementById("textAreaContact").value;
    if (contact === '') {
        alert('Please enter text into the submission box above')
        return;
    } else {
        alert('Thank you for contacting Awesome Hotels.  We will reply within 3 working days')
        return;
    }
}

/* Carousel controls in jQuery */
$(document).ready(function() {
    $('#carousel').carousel({
            interval: 2000
        })
        // Activate Carousel
    $("#carousel").carousel();
    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#carousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#carousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#carousel").carousel(2);
    });
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function() {
        $("#carousel").carousel("prev");
    });
    $(".carousel-control-next").click(function() {
        $("#carousel").carousel("next");
    });
});

/* Datepicker UI from jQuery */

$(function() {
    $("#datepicker").datepicker();
});