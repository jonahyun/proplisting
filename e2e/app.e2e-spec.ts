import { Proplistings3Page } from './app.po';

describe('proplistings3 App', function() {
  let page: Proplistings3Page;

  beforeEach(() => {
    page = new Proplistings3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
