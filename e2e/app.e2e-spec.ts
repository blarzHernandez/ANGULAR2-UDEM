import { TESTPage } from './app.po';

describe('test App', () => {
  let page: TESTPage;

  beforeEach(() => {
    page = new TESTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
