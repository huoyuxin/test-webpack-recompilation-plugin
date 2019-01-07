const fs = require('fs');
let times = 0;
let beginTime = 0;
let endTime = 0;
let timeSubFor1000 = 0;
class testPlugin {
  constructor() {
  }
  apply(compiler) {
    compiler.plugin('compile', function (params) {
      if (times === 0) {
        console.log('\n\n begin test')
        beginTime = new Date().getTime();
      }
    })
    compiler.plugin('done', function (stats) {
      console.log('\n\n done times', times)
      if (times < 100) {
        times++;
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
