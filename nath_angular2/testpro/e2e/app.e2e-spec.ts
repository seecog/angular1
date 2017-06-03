import { TestproPage } from './app.po';

describe('testpro App', function() {
  let page: TestproPage;

  beforeEach(() => {
    page = new TestproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
