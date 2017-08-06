import { IndiaPage } from './app.po';

describe('india App', function() {
  let page: IndiaPage;

  beforeEach(() => {
    page = new IndiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
