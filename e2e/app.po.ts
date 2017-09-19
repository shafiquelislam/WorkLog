import { browser, by, element, $, $$ } from 'protractor';

const data = require("./app.data.json");

export class PortalWorklogPage {

  constructor() {
    this.go();
  }

  go() {
    browser.ignoreSynchronization = true;
    return browser.get(data.baseUrl);
  }

  waitForVisibility() {
    return browser.sleep(data.waitTime);
  }

  setEmailIdAndPassword() {
    return $('#email').sendKeys(data.email).then(() => {
      return this.waitForVisibility().then(() => {
        return $('#password').sendKeys(data.password).then(() => {
          return true;
        });
      });
    });
  }

  submitForm() {
    return $('#admin-login-form button[type="submit"]').click().then(() => {
      return $('#WorkLogs').isPresent().then((result) => {
        return result;
      });
    });
  }

  viewWorkLogList() {
    return $('#WorkLogs').click().then(() => {
      return $('#content .panel-heading a[href^="/work-logs/add"]').isPresent().then((result) => {
        return result;
      });
    });
  }

  openWorkLogForm() {
    return $('#content .panel-heading a[href^="/work-logs/add"]').click().then(() => {
      return $('#work-logs-form').isPresent().then((result) => {
        return result;
      });
    });
  }

  setWorkLog() {
    return $('#work-logs-form .note-editable').sendKeys(data.workLog).then(() => {
      return true;
    });  
  }



}
