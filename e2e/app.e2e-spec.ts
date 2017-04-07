import { AngularTourOfHeroesOnePage } from './app.po';

describe('angular-tour-of-heroes-one App', () => {
  let page: AngularTourOfHeroesOnePage;

  beforeEach(() => {
    page = new AngularTourOfHeroesOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
