/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const schedule = require('node-schedule');

module.exports = {

  /**
   * @param {object} ruleObj
   * @param {?number|number[]} [ruleObj.second = 0] - 0-59 null makes it tick every second
   * @param {?number|number[]} [ruleObj.minute] - 0-59 must be explicitly set to 0 if hour is set
   *                                              otherwise will assume every minute
   * @param {?number|number[]} [ruleObj.hour] 0-23
   * @param {?number|number[]} [ruleObj.date] 1-31
   * @param {?number|number[]} [ruleObj.month] 0-11
   * @param {?number|number[]} [ruleObj.year]
   * @param {?number|number[]} [ruleObj.dayOfWeek] (0-6) Starting with Sunday
   * @param {function} callback
   * @return {Job|*}
   */
  recurrenceByTime(ruleObj, callback) {
    const rule = new schedule.RecurrenceRule();

    rule.second = ruleObj.second === undefined ? 0 : ruleObj.second;
    if (ruleObj.minute !== undefined) { rule.minute = ruleObj.minute; }
    if (ruleObj.hour !== undefined) { rule.hour = ruleObj.hour; }
    if (ruleObj.date !== undefined) { rule.date = ruleObj.date; }
    if (ruleObj.month !== undefined) { rule.month = ruleObj.month; }
    if (ruleObj.year !== undefined) { rule.year = ruleObj.year; }
    if (ruleObj.dayOfWeek !== undefined) { rule.dayOfWeek = ruleObj.dayOfWeek; }

    return schedule.scheduleJob(rule, callback);
  }
};
