// functions

function reverseWordOrder (value) {
    return value.split(' ').reverse().join(' ');
}

function logEvent (eventName, occurredOn) {
    return 'Event: ' + eventName + ' occurred on ' + occurredOn.toDateString();
}
