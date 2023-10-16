/**
 * Agora - Close the loop
 * © 2021-2023 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause
 */

// dependencies

// services

exports.callOpenAI = async ( req, res ) => {

};

// helper logic
function parseResourceContentHtml ( content ) {

    // getting all paragraphs by spliting by <p> tag
    const paragraphs = content.split( '<p>' );

    // removing all html tags in individual strings
    for ( var i = 0; i < paragraphs.length; i++ ) {
        paragraphs[i] = paragraphs[i].replace( /<[^>]*>/g, '' ).trim();
    }

    // shifting array to ignore first empty string
    paragraphs.shift();

    // TODO: pick out first paragraph that meets length requirement
}