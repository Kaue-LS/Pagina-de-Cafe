const texts = document.querySelectorAll('#resume');

texts.forEach(element => {
    const maxLength = 65; // limite de caracteres
    const originalText = element.innerText.trim();

    if (originalText.length > maxLength) {
        const truncated = originalText.slice(0, maxLength) + '...';
        element.innerText = truncated;
    }
});