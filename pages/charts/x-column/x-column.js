import F2 from '../../../f2-canvas/lib/f2';

let chart = null;

function initChart(canvas, width, height) { // 使用 F2 绘制图表
  const data = [{
    name: 'London',
    月份: 'Jan.',
    月均降雨量: 18.9
  }, {
    name: 'London',
    月份: 'Feb.',
    月均降雨量: 28.8
  }, {
    name: 'London',
    月份: 'Mar.',
    月均降雨量: 39.3
  }, {
    name: 'Berlin',
    月份: 'Jan.',
    月均降雨量: 99.7
  }, {
    name: 'Berlin',
    月份: 'Feb.',
    月均降雨量: 52.6
  }, {
    name: 'Berlin',
    月份: 'Mar.',
    月均降雨量: 35.5
  }];
  chart = new F2.Chart({
    el: canvas,
    width,
    height
  });
  chart.source(data);
  chart.tooltip({
    showItemMarker: false,
    onShow(ev) {
      const { items } = ev;
      items[0].name = null;
      items[0].name = items[0].title;
      items[0].value = '¥ ' + items[0].value;
    }
  });
  chart.interval().position('月份*月均降雨量').color('name').adjust({
    type: 'dodge',
    marginRatio: 0.05 // 设置分组间柱子的间距
  });
  chart.render();
  return chart;
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [1, 2, 3, 4, 5],
    opts: {
      onInit: initChart
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})