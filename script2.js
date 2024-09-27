(function() {
    // Function to remove unwanted elements
    function removeElements(selector) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    }

    // Remove the unwanted elements immediately
    removeElements('#ad-header-mobile-contener');
    removeElements('h2.page-title');
    removeElements('div.video-metadata');
    removeElements('div.related-content');
    removeElements('div#tabComments_bottom_page');
    removeElements('div#footer');
    removeElements('div.buttons-bar');
    removeElements('div#video-tabs');

    // Now we can safely manipulate the article
    var article = document.querySelector('div#page');
    if (article) {
        // Clear the body and append the article
        document.body.innerHTML = ''; // Clear the body
        document.body.appendChild(article); // Append the article to the body
        
        // Set background color to transparent
        article.style.backgroundColor = 'transparent'; // Remove background color
    } else {
        console.log('No article found');
    }

    // Show the body after modifications
    document.body.style.display = 'block';
})();
