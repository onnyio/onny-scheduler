/**
 * Copyright (C) 2015-2016 Onny LLC - All Rights Reserved
 */

const schedule = require('node-schedule');

module.exports = {

  /**
   * @param {RecurrenceRule} recurrenceRule
   * @param {function} callback
   * @return {SchedulerJob}
   */
  recurrenceByTime(recurrenceRule, callback) {
    const rule = new schedule.RecurrenceRule();

    rule.second = recurrenceRule.second === undefined ? 0 : recurrenceRule.second;
    if (recurrenceRule.minute !== undefined) { rule.minute = recurrenceRule.minute; }
    if (recurrenceRule.hour !== undefined) { rule.hour = recurrenceRule.hour; }
    if (recurrenceRule.date !== undefined) { rule.date = recurrenceRule.date; }
    if (recurrenceRule.month !== undefined) { rule.month = recurrenceRule.month; }
    if (recurrenceRule.year !== undefined) { rule.year = recurrenceRule.year; }
    if (recurrenceRule.dayOfWeek !== undefined) { rule.dayOfWeek = recurrenceRule.dayOfWeek; }

    return schedule.scheduleJob(rule, callback);
  }
};

/**
 * @typedef RecurrenceRule
 * @property {?number|number[]} [ruleObj.second = 0] - 0-59 null makes it tick every second
 * @property {?number|number[]} [ruleObj.minute] - 0-59 must be explicitly set to 0 if hour is set
 *                                              otherwise will assume every minute
 * @property {?number|number[]} [ruleObj.hour] 0-23
 * @property {?number|number[]} [ruleObj.date] 1-31
 * @property {?number|number[]} [ruleObj.month] 0-11
 * @property {?number|number[]} [ruleObj.year]
 * @property {?number|number[]} [ruleObj.dayOfWeek] (0-6) Starting with Sunday
 */


/**
 * @typedef SchedulerJob
 *
 */

/**
 * All planned invocations will be canceled.When you set the parameter reschedule to
 * true then the Job is newly scheduled afterwards.
 * @function cancel
 * @memberOf SchedulerJob#
 * @see [node-schedule/cancel]{@link https://github.com/node-schedule/node-schedule#jobcancelreschedule}
 */

/**
 * This method invalidates the next planned invocation or the job. When you set the parameter
 * reschedule to true then the Job is newly scheduled afterwards.
 * @callback cancelNext
 * @memberOf SchedulerJob#
 * @see [node-schedule/cancelNext]{@link https://github.com/node-schedule/node-schedule#jobcancelnextreschedule}
 * @param reschedule
 */


/**
 * This method cancels all pending invocation and registers the Job completely new again using
 * the given specification. Return true/false on success/failure.
 * @function reschedule
 * @memberOf SchedulerJob#
 * @see [node-schedule/reschedule]{@link https://github.com/node-schedule/node-schedule#jobreschedulespec}
 * @param spec
 */

/**
 * This method returns a Date object for the planned next Invocation for this Job.
 * If no invocation is planned the method returns null.
 * @function nextInvocation
 * @memberOf SchedulerJob#
 * @see [node-schedule/nextInvocation]{@link https://github.com/node-schedule/node-schedule#jobnextinvocation}
 */
