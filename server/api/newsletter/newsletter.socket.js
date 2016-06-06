'use strict';

import NewsletterEvents from './newsletter.events';

const events = [
  'remove',
  'save'
];

export function register(socket) {
  for (let i = 0, eventsLength = events.length; i < eventsLength; i++) {
    const event = events[i];
    const listener = createListener('newsletter:' + event, socket);
    NewsletterEvents.on(event, listener);
    socket.on('disconnect', removeListener(event, listener));
  }
}

function createListener(event, socket) {
  return function(doc) {
    socket.emit(event, doc);
  };
}

function removeListener(event, listener) {
  return function() {
    NewsletterEvents.removeListener(event, listener);
  };
}
