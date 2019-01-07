const fs = require('fs');
let times = -1;
let beginTime = 0;
let endTime = 0;
let timeSubFor1000 = 0;
class testPlugin {
  constructor() {
  }
  apply(compiler) {
    compiler.plugin('compile', () => {
      times++;
      console.log(`\n\n it is the ${times} times`)
      console.log('——————compile')
      if (times === 5) {
        beginTime = new Date().getTime();
      }
    });
    compiler.plugin('done', () => {
      console.log('——————done')
      if (times < 105) {
        fs.writeFileSync('/Users/yuxinhuo/MTPro/fe.seagull/client/page/pushOrder/privilege/index.jsx', '\n');
        // compiler.hooks.compile.tap();
        return;
      }
      endTime = new Date().getTime();
      timeSubFor1000 = endTime - beginTime;
      console.log(timeSubFor1000)
      return;
    })
  }
};
module.exports = testPlugin;
