import {
  defer,
  iif
} from "./chunk-YQRCPNFJ.js";
import {
  asyncScheduler,
  concatMap,
  expand,
  mapTo,
  of,
  retryWhen,
  tap,
  throwError,
  timer
} from "./chunk-XRWXGKPY.js";
import "./chunk-5K356HEJ.js";

// node_modules/.pnpm/backoff-rxjs@7.0.0_rxjs@7.8.2/node_modules/backoff-rxjs/dist/esm5/utils.js
function getDelay(backoffDelay, maxInterval) {
  return Math.min(backoffDelay, maxInterval);
}
function exponentialBackoffDelay(iteration, initialInterval) {
  return Math.pow(2, iteration) * initialInterval;
}

// node_modules/.pnpm/backoff-rxjs@7.0.0_rxjs@7.8.2/node_modules/backoff-rxjs/dist/esm5/operators/retryBackoff.js
function retryBackoff(config) {
  var _a = typeof config === "number" ? {
    initialInterval: config
  } : config, initialInterval = _a.initialInterval, _b = _a.maxRetries, maxRetries = _b === void 0 ? Infinity : _b, _c = _a.maxInterval, maxInterval = _c === void 0 ? Infinity : _c, _d = _a.shouldRetry, shouldRetry = _d === void 0 ? function() {
    return true;
  } : _d, _e = _a.resetOnSuccess, resetOnSuccess = _e === void 0 ? false : _e, _f = _a.backoffDelay, backoffDelay = _f === void 0 ? exponentialBackoffDelay : _f;
  return function(source) {
    return defer(function() {
      var index = 0;
      return source.pipe(retryWhen(function(errors) {
        return errors.pipe(concatMap(function(error) {
          var attempt = index++;
          return iif(function() {
            return attempt < maxRetries && shouldRetry(error);
          }, timer(getDelay(backoffDelay(attempt, initialInterval), maxInterval)), throwError(error));
        }));
      }), tap(function() {
        if (resetOnSuccess) {
          index = 0;
        }
      }));
    });
  };
}

// node_modules/.pnpm/backoff-rxjs@7.0.0_rxjs@7.8.2/node_modules/backoff-rxjs/dist/esm5/observable/intervalBackoff.js
function intervalBackoff(config, scheduler) {
  if (scheduler === void 0) {
    scheduler = asyncScheduler;
  }
  var _a = typeof config === "number" ? {
    initialInterval: config
  } : config, initialInterval = _a.initialInterval, _b = _a.maxInterval, maxInterval = _b === void 0 ? Infinity : _b, _c = _a.backoffDelay, backoffDelay = _c === void 0 ? exponentialBackoffDelay : _c;
  initialInterval = initialInterval < 0 ? 0 : initialInterval;
  return of(0, scheduler).pipe(expand(function(iteration) {
    return timer(getDelay(backoffDelay(iteration, initialInterval), maxInterval)).pipe(mapTo(iteration + 1));
  }));
}
export {
  intervalBackoff,
  retryBackoff
};
//# sourceMappingURL=backoff-rxjs.js.map
