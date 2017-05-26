import { DemoprojectPage } from './app.po';

describe('demoproject App', () => {
  let page: DemoprojectPage;

  beforeEach(() => {
    page = new DemoprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
