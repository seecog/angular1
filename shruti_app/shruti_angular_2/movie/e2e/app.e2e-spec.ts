import { MoviePage } from './app.po';

describe('movie App', function() {
  let page: MoviePage;

  beforeEach(() => {
    page = new MoviePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
