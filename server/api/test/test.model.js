'use strict';

import mongoose from 'mongoose';
let ObjectId = mongoose.Schema.Types.ObjectId;

let TestSchema = new mongoose.Schema({
  experiment: {
    date_finish: { type: Date },
    date_start: { type: Date, default: Date.now },
    date_update: { type: Date }
  },
  test: {
    authorization: {
      consent: { type: Boolean, default: false },
      introduction: { type: Boolean, default: false },
      test: { type: Boolean, default: false },
      training: { type: Boolean, default: false }
    },
    group: { type: ObjectId, default: null, index: true },
    panas: {
      finish: [
        {
          internal_key: { type: String, index: true },
          value: { type: Number }
        }
      ],
      start: [
        {
          internal_key: { type: String, index: true },
          value: { type: Number }
        }
      ]
    },
    steps: {
      test: {
        date_finish: { type: Date },
        date_start: { type: Date },
        questions: [
          {
            coherence_cardiac: { type: Number, default: null },
            correct: { type: Boolean, default: false },
            id: { type: ObjectId, index: true },
            order: { type: Number, default: null },
            value: { type: String, default: null }
          }
        ],
        score: {
          correct: { type: Number, default: null },
          execute: { type: Boolean, default: false },
          total: { type: Number }
        }
      },
      training: {
        date_finish: { type: Date },
        date_start: { type: Date },
        questions: [
          {
            coherence_cardiac: { type: Number, default: null },
            correct: { type: Boolean, default: false },
            id: { type: ObjectId, index: true },
            order: { type: Number, default: null },
            value: { type: String, default: null }
          }
        ],
        score: {
          correct: { type: Number, default: null },
          execute: { type: Boolean, default: false },
          total: { type: Number }
        }
      }
    }
  },
  user: {
    birthday: { type: Date },
    email: { type: String },
    gender: { type: String },
    internal_key: { type: String, index: true },
    send_results: { type: Boolean, default: false },
    university: {
      career: { type: String },
      level: { type: Number },
      name: { type: String }
    }
  }
});

export default mongoose.model('Test', TestSchema);
