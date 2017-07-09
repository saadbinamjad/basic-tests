import { BasicTestsPage } from './app.po';

describe('basic-tests App', () => {
  let page: BasicTestsPage;

  beforeEach(() => {
    page = new BasicTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
