import { browser } from 'protractor';
import { PortalWorklogPage } from './app.po';

const data = require("./app.data.json");

describe('portal-worklog App', () => {
  let page: PortalWorklogPage;
  
  beforeAll(() => {
     page = new PortalWorklogPage();
     browser.sleep(data.waitTime);
  });

  afterAll(() => {
    browser.sleep(data.waitTime);
  });

  afterEach(() => {
    browser.sleep(data.waitTime);
  });

  it('should set email id and password', done => {
    expect(page.setEmailIdAndPassword()).toBe(true);
    done();
  });

  it('should submit login form', done => {
    expect(page.submitForm()).toBe(true);
    done();
  });

  it('should view work log list', done => {
    expect(page.viewWorkLogList()).toBe(true);
    done();
  });

  it('should open work log form', done => {
    expect(page.openWorkLogForm()).toBe(true);
    done();
  });

  it('should set work log', done => {
    expect(page.setWorkLog()).toBe(true);
    done();
  });

});
