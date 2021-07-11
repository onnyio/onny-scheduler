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
    const rule = Object.assign(new schedule.RecurrenceRule(), recurrenceRule);

    // must be set to 0 for familiarity with cron
    // https://www.npmjs.com/package/node-schedule
    rule.second = recurrenceRule.second === undefined ? 0 : recurrenceRule.second;

    return schedule.scheduleJob(rule, callback);
  }
};

/**
 * It's worth noting that the default value of a component of a recurrence rule is null (except for second, which is 0 for familiarity with cron). If we did not explicitly set minute to 0 above, the message would have instead been logged at 5:00pm, 5:01pm, 5:02pm, ..., 5:59pm. Probably not what you want.
 *
 *
 * @typedef RecurrenceRule
 * @property {?number|number[]|null} [ruleObj.second = 0] - 0-59 null makes it tick every second
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
