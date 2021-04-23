/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

/* eslint-disable import/no-extraneous-dependencies */
const chai = require('chai');
const scheduler = require('../index');

const expect = chai.expect;

describe(__filename, () => {
  describe('schedule', () => {
    it('Runs job once at some date, calls callback when done', function testSchedule(done) {
      this.timeout(4000);

      let counter = 0;

      const job = scheduler.recurrenceByTime({ second: null }, () => {
        counter += 1;
      });

      setTimeout(() => {
        job.cancel();
        expect(counter).to.be.greaterThan(1);
        done();
      }, 2250);
    });
  });
});
