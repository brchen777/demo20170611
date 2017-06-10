import { Demo0611Page } from './app.po';

describe('demo0611 App', () => {
  let page: Demo0611Page;

  beforeEach(() => {
    page = new Demo0611Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
