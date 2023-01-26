const process = require('process');
const { describe, it } = require('@jest/globals');

describe('tests for working vending machine', () => {
  it('negative balance', () => {
    const originalExit = process.exit;
    process.exit = jest.fn();
    process.argv = ['node', 'index.js', '--item-cost', '10', '--payment', '5'];
    require('./index.js');

    expect(process.exit).toHaveBeenCalledWith(1);

    process.exit = originalExit;
  });
});
