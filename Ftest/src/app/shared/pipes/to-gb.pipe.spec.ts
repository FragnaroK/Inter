import { ToGBPipe } from './to-gb.pipe';

describe('ToGBPipe', () => {
  it('Should transform MB to GB', () => {
    const pipe = new ToGBPipe();
    expect(pipe.transform(10000)).toBe('10');
  });
});
