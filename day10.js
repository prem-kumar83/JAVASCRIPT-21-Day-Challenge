// Function to get the current date and time in a human-readable format
function getCurrentDateTime() {

    const currentDate = new Date();

    const formattedDateTime = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) + ' ' + currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
    console.log(formattedDateTime);
}
getCurrentDateTime();
