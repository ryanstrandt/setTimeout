import { GoPage } from './app.po';

describe('go App', () => {
  let page: GoPage;

  beforeEach(() => {
    page = new GoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
