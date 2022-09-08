let myContent = document.getElementById('app');
console.log('this file is loaded');
// let message = {
//     paragraph: '<p>this is the new paragraph</p>',
//     div: '<div class="flex-container">flex container is here</div>',
//     neilsFunction: function () {
//         return 10 + 20;
//     }
// };

let message = [
    false,
    '<div class="flex-item">flex container is here</div>',
    '<div class="flex">flex container is here</div>',
    '<div>flex container is here</div>',
    '<section class="flex-container">flex container is here</section>',
];
for (let html of message) {
    if (html === false) {
        console.warn(html);
    } else {
       console.log(html);
    }
}

// myContent.innerHTML = message.neilsFunction();
