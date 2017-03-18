import { MyApplicationPage } from './app.po';

describe('my-application App', function() {
  let page: MyApplicationPage;

  beforeEach(() => {
    page = new MyApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
