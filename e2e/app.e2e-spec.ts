import { CsFrontendPage } from './app.po';

describe('cs-frontend App', () => {
  let page: CsFrontendPage;

  beforeEach(() => {
    page = new CsFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
