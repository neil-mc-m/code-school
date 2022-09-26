const anchor = document.createElement('a');
const paragraph = document.createElement('p');

anchor.href = 'https://www.google.ie?q=javascript';
anchor.innerText = 'Google';

document.body.appendChild(paragraph); // Add the paragraph as a child to the body
paragraph.appendChild(anchor); // Add the anchor as a child to the paragraph

document.body.replaceChild(anchor, paragraph);