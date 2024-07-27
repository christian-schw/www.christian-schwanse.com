<?php
/*
    This index.php serves as a placeholder. 
    Is only used for a redirect on the server side. 

    If I select the directory on Strato (domain hoster) where the index.html is located (directory: /en/), 
    then the paths of the CSS and JS files are no longer correct. 
    Loading the files therefore fails.

    The desired index.html is located in the /de/ directory, 
    as this is a multilingual site and the language of the individual pages +
    is determined on the basis of the directories.

    Example:
    All German pages are in the /de/ directory.
    All English pages are in the /en/ directory.

    German is the main language of this website, hence /de/.index.html as default.
*/
header("Location: /de/index.html", true, 301);
die();
