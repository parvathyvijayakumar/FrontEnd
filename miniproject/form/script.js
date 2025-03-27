// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const form = document.querySelector("form");

    // Add event listener to form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            species: document.getElementById("species").value,
            promoter_methylation: parseFloat(document.getElementById("promoter_methylation").value),
            te_methylation: parseFloat(document.getElementById("te_methylation").value),
            ch: parseFloat(document.getElementById("ch").value),
            chg: parseFloat(document.getElementById("chg").value),
            ch4: parseFloat(document.getElementById("ch4").value)
        };

        // Validate if species is selected
        if (formData.species === "") {
            alert("Please select a species before submitting.");
            return;
        }

        // Send data to the backend using fetch API
        fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error in submission");
            }
            return response.json();
        })
        .then(data => {
            alert(`Prediction Result: ${data.result}`);
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error submitting the form. Please try again.");
        });
    });
});
