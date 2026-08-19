// ===== 联盟推广配置 =====
// 步骤：
// 1) 去「京东联盟」(union.jd.com) 用京东账号登录，或「淘宝客/阿里妈妈」(pub.alimama.com) 用淘宝账号登录
// 2) 创建一个「网站推广位」，拿到你的专属 PID
// 3) 把下面两行占位替换成你自己的 PID（淘宝格式如 mm_12345678_1234567_12345678）
// 4) 京东真正结算佣金，建议在联盟后台用「一键转链」把关键词生成专属短链；
//    此处搜索入口已自动带上 PID 参数，可用于归因与部分场景结算。
const AFF = {
  jdPid: 'YOUR_JD_PID',
  tbPid: 'YOUR_TB_PID',
  jdBase: 'https://search.jd.com/Search?keyword=',
  tbBase: 'https://s.taobao.com/search?q='
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.mall-btn').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      var kw = encodeURIComponent(b.getAttribute('data-kw') || '');
      var url;
      if (b.classList.contains('jd')) {
        url = AFF.jdBase + kw + (AFF.jdPid && AFF.jdPid !== 'YOUR_JD_PID' ? '&p=' + encodeURIComponent(AFF.jdPid) : '');
      } else {
        url = AFF.tbBase + kw + (AFF.tbPid && AFF.tbPid !== 'YOUR_TB_PID' ? '&pid=' + encodeURIComponent(AFF.tbPid) : '');
      }
      window.open(url, '_blank');
    });
  });
});
