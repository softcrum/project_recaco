'use strict';

import mongoose from 'mongoose';

const NewsletterSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  notification: { type: Boolean, default: false },
  register: { type: Date, default: Date.now() }
});

export default mongoose.model('Newsletter', NewsletterSchema);
