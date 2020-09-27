import { AhladiniprojectPage } from './app.po';

describe('ahladiniproject App', function() {
  let page: AhladiniprojectPage;

  beforeEach(() => {
    page = new AhladiniprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
