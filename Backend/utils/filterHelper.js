// utils.js

// Function to validate if a given year is valid
exports.isValidYear = (year) => {
    // Assuming a valid year range (e.g., from 1900 to current year)
    const currentYear = new Date().getFullYear();
    const parsedYear = parseInt(year);
    return !isNaN(parsedYear) && parsedYear >= 1900 && parsedYear <= currentYear;
};

// Function to validate if a URL is valid
// exports.isValidURL = (url) => {
//     // Basic URL validation regex
//     const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
//     return urlRegex.test(url);
// };
exports.isValidURL=(str)=>{
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}
// Function to validate if a given value is a positive integer
exports.isPositiveInteger = (value) => {
    const parsedValue = parseInt(value);
    return !isNaN(parsedValue) && parsedValue > 0;
};

// Function to format a date string to a specific format
exports.formatDate = (dateString, format = 'yyyy-mm-dd') => {
    // Assuming dateString is in a valid format
    const date = new Date(dateString);
    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    if (format === 'dd/mm/yyyy') {
        return `${day}/${month}/${year}`;
    } else if (format === 'mm/dd/yyyy') {
        return `${month}/${day}/${year}`;
    } else {
        // Default format: yyyy-mm-dd
        return `${year}-${month}-${day}`;
    }
};
