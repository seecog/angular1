import { SecondAppPage } from './app.po';

describe('second-app App', function() {
  let page: SecondAppPage;

  beforeEach(() => {
    page = new SecondAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
