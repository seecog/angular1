import { FirstPage } from './app.po';

describe('first App', function() {
  let page: FirstPage;

  beforeEach(() => {
    page = new FirstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
