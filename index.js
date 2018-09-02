/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

var schedule = require('node-schedule');
var onnyUtils = require('onny-utils');

module.exports = {

  /**
   * @param {object} ruleObj
   * @param {?number|number[]} [ruleObj.second = 0] - 0-59 null makes it tick every second
   * @param {?number|number[]} [ruleObj.minute] - 0-59
   * @param {?number|number[]} [ruleObj.hour] 0-23
   * @param {?number|number[]} [ruleObj.date] 1-31
   * @param {?number|number[]} [ruleObj.month] 0-11
   * @param {?number|number[]} [ruleObj.year]
   * @param {?number|number[]} [ruleObj.dayOfWeek] (0-6) Starting with Sunday
   * @param {function} callback
   * @return {Job|*}
   */
  recurrenceByTime: function (ruleObj, callback) {
    var rule = new schedule.RecurrenceRule();

    rule.second = ruleObj.second === undefined ? 0 : ruleObj.second;
    if (ruleObj.minute) { rule.minute = ruleObj.minute;}
    if (ruleObj.hour) { rule.hour = ruleObj.hour;}
    if (ruleObj.date) { rule.date = ruleObj.date;}
    if (ruleObj.month) { rule.month = ruleObj.month;}
    if (ruleObj.year) { rule.year = ruleObj.year;}
    if (ruleObj.dayOfWeek) { rule.dayOfWeek = ruleObj.dayOfWeek;}

    return schedule.scheduleJob(rule, callback);
  }
};