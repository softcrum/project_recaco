'use strict';

import {EventEmitter} from 'events';
import Newsletter from './newsletter.model';
const NewsletterEvents = new EventEmitter();

NewsletterEvents.setMaxListeners(0);

var events = {
  'remove': 'remove',
  'save': 'save'
};

for (const e in events) {
  const event = events[e];
  Newsletter.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    NewsletterEvents.emit(event + ':' + doc._id, doc);
    NewsletterEvents.emit(event, doc);
  }
}

export default NewsletterEvents;
