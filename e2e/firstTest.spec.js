describe('Example', () => {
  it('should have TopChart screen', async () => {
    await expect(element(by.id('TOP_CHART_SCREEN'))).toBeVisible();
  });

  it('should tap on favorite button of top chart.', async () => {
    await element(by.id('favBtn_1')).tap();
  });

  it('should tap on favorite button to remove favorite', async () => {
    await element(by.id('favBtn_1')).tap();
  });

});
