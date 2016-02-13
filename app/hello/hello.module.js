import './hello.less';

export default require('angular')
  .module('app.hello', [])
  .name;

require('./hello.ctrl');
