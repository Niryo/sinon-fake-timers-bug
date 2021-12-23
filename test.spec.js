describe('sinon with jest', () => {
  it('should not fail to uninstall clock even when using jest.useFakeTimers', async () => {
    const FakeTimers = require('@sinonjs/fake-timers');
    let clock = FakeTimers.install({
      shouldAdvanceTime: true,
    });
    jest.useFakeTimers();
    clock.uninstall();
   
    expect(true).toEqual(true)
  });
})