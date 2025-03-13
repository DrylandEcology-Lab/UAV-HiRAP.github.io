document.addEventListener('DOMContentLoaded', function() {
    // Function to get query parameter by name
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the year from the URL query parameters
    var year = getQueryParam('year');
    console.log(year)
    if (!year) {
        const currentDate = new Date();
        year = currentDate.getFullYear();
    }

    if (year) {
        // Find the button with the corresponding year and change its class
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button.href.includes(`year=${year}`)) {
                button.classList.remove('btn-secondary');
                button.classList.add('btn-warning');
            }
        });
    }


    const targetElementId = 'newsContainer';
    const externalFileUrl = `news${year}.html`; // Construct the file name dynamically

    fetch(externalFileUrl)
        .then(response => response.text())
        .then(data => {
            // Find the target element by its ID and insert the fetched content
            document.getElementById(targetElementId).innerHTML = data;
        })
        .catch(error => console.error('Error fetching the HTML file:', error));
});