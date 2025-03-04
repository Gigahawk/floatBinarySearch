document.addEventListener('DOMContentLoaded', function() {
    // Get references to form elements
    const minInput = document.getElementById('search_min');
    const midInput = document.getElementById('search_mid');
    const maxInput = document.getElementById('search_max');
    const higherBtn = document.getElementById('higher_btn');
    const lowerBtn = document.getElementById('lower_btn');

    function setMidPoint() {
        let min = parseFloat(minInput.value);
        let max = parseFloat(maxInput.value);


        midInput.value = min + (max - min)/2
    }

    // Add event listeners for buttons
    higherBtn.addEventListener('click', function() {
        minInput.value = midInput.value;
        setMidPoint()
    });

    lowerBtn.addEventListener('click', function() {
        maxInput.value = midInput.value;
        setMidPoint()
    });

});
