function fillParagraph() {
    let input = document.getElementById('text-input');
    let defaultItem = document.getElementById('default-item');

    let list = document.querySelector('div > ol');

    const newListItem = document.createElement('li');
    const newTextItem = document.createTextNode(input.value);

    newListItem.appendChild(newTextItem);

    if (defaultItem !== null) {
        list.removeChild(defaultItem);
    }

    list.insertBefore(newListItem, null);

    list.style.color = 'green';
}

