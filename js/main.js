(function () {
  var pageHelper = new PageHelper();
  // 自动启动快捷键
  pageHelper.initKeyBoardMap();
  chrome.runtime.onMessage.addListener(
    function (request) {
      if (request.action === 'autoClipper' ){
        var autoClipper = new AutoClipper();
        autoClipper.init();
      }
      if (request.action === 'startContentEdit' ){
        tools.openMessage('启动页面可编辑');
        document.body.contentEditable = true;
      }
      if (request.action === 'destoryContentEdit' ){
        tools.openMessage('禁用页面可编辑','error');
        document.body.contentEditable = false;
      }
      if (request.action === 'startClip' ) {
        if(!pageHelper){
          tools.openMessage('巴扎黑Clipper启动');
          pageHelper = new PageHelper();
          pageHelper.init();
        }else {
          tools.openMessage('已经启动了！','error');
        }
      }
      if (request.action === 'destoryClip') {
          tools.openMessage('巴扎黑Clipper禁用','error');
          pageHelper.destroy();
      }
      if (request.action === 'preProcess') {
        var preProcess = new PreProcess();
        preProcess.init();
      }
      if (request.action === 'startKeyCut') {
        tools.openMessage('启用快捷键','error');
        pageHelper = new PageHelper();
        pageHelper.initKeyBoardMap();
      }
      if (request.action === 'destoryKeyCut') {
        tools.openMessage('禁用快捷键','error');
        pageHelper.destroyKeyBoardMap();
      }
    }
  );
})();