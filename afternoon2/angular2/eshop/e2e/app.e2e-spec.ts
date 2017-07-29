import { EshopPage } from './app.po';

describe('eshop App', function() {
  let page: EshopPage;

  beforeEach(() => {
    page = new EshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
