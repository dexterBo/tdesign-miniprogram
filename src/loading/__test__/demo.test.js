/**
 * 该文件为由脚本 `npm run test:demo` 自动生成，如需修改，执行脚本命令即可。请勿手写直接修改，否则会被覆盖
 */

import simulate from 'miniprogram-simulate';
import path from 'path';

const mapper = ['base', 'duration', 'error', 'horizontal', 'loadingProgress', 'size', 'status', 'text', 'vertical'];

describe('Loading', () => {
  mapper.forEach((demoName) => {
    it(`Loading ${demoName} demo works fine`, () => {
      const id = load(path.resolve(__dirname, `../../loading/_example/${demoName}/index`), demoName);
      const container = simulate.render(id);
      container.attach(document.createElement('parent-wrapper'));
      expect(container.toJSON()).toMatchSnapshot();
    });
  });
});
