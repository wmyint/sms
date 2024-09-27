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

        // disable progressbar
        var targetDiv = document.querySelector('.progress-bar-container'); // Replace with your div's ID or selector
        if (targetDiv) {
            targetDiv.style.pointerEvents = 'none'; // Disable clicks on the div
            targetDiv.style.opacity = '0.5'; // Optionally, change opacity to indicate it's disabled
        }
    } else {
        console.log('No article found');
    }

    // Show the body after modifications
    document.body.style.display = 'block';
})();
