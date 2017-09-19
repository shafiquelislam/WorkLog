import { PortalWorklogPage } from './app.po';

describe('portal-worklog App', () => {
  let page: PortalWorklogPage;

  beforeEach(() => {
    page = new PortalWorklogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
