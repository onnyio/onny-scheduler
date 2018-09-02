/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var chai = require('chai');
var scheduler = require('../index');

var expect = chai.expect;

describe(__filename, function () {

  describe('schedule',function () {
    it('Runs job once at some date, calls callback when done', function (done) {
      this.timeout(4000)

      var counter = 0;

      var job = scheduler.recurrenceByTime({second: null}, function () {
        counter += 1;
      });

      setTimeout(function() {
        job.cancel();
        expect(counter).to.be.greaterThan(1);
        done();
      }, 2250);

    })
  })
});