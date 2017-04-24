import { VotingAppFrontendPage } from './app.po';

describe('voting-app-frontend App', () => {
  let page: VotingAppFrontendPage;

  beforeEach(() => {
    page = new VotingAppFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
