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

        //remove fastforward parts
        document.querySelector('div.fastforward-left').remove();
        document.querySelector('div.fastforward-right').remove();

        // overlay transparent widget over progressbar
        var progressBar = document.querySelector('div.progress-bar-container');
        if (progressBar) {
            var overlay = document.createElement('div');
            overlay.style.position = 'absolute';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '50%';
            overlay.style.zIndex = '1000'; // Ensure it’s on top
            document.body.appendChild(overlay);
        }
    } else {
        console.log('No article found');
    }

    // Show the body after modifications
    document.body.style.display = 'block';
})();
