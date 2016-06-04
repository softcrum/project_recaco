/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/newsletter              ->  index
 * POST    /api/newsletter              ->  create
 * GET     /api/newsletter/:id          ->  show
 * PUT     /api/newsletter/:id          ->  update
 * DELETE  /api/newsletter/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Newsletter from './newsletter.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Newsletters
export function index(req, res) {
  return Newsletter.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Newsletter from the DB
export function show(req, res) {
  return Newsletter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Newsletter in the DB
export function create(req, res) {
  return Newsletter.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Newsletter in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Newsletter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Newsletter from the DB
export function destroy(req, res) {
  return Newsletter.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}




export function findEmail(req, res) {
  return Newsletter.find({ 'email': req.params.email }).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
