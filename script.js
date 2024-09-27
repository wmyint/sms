(function() {
    // Create and append the style element to hide unwanted elements immediately
    var style = document.createElement('style');
    style.innerHTML = `
        #ad-header-mobile-contener,
        h2.page-title,
        div.video-metadata,
        div.related-content,
        div#tabComments_bottom_page,
        div#footer,
        div.buttons-bar,
        div#video-tabs { 
            display: none !important; 
        }
    `;
    document.head.appendChild(style);
    
    // Now we can safely manipulate the article
    var article = document.querySelector('div#page');
    if (article) {
        // Hide everything
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
