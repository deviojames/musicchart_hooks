describe('Example', () => {
  it('should have welcome screen', async () => {
    await expect(element(by.id('TOP_CHART_SCREEN'))).toBeVisible();
  });
});
