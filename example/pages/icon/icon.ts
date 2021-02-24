Page({
  data: {
    icons: [
      'location_fill',
      'tick_fill',
      'circle-time_fill',
      'help_fill',
      'user_fill',
      'close_fill',
      'star_fill',
      'sound_fill',
      'warning_fill',
      'close',
      'warning',
      'loading',
      'arrow-up',
      'arrow-down',
      'tick',
      'remove',
      'add',
      'circle',
      'arrow-left',
      'arrow-right',
    ],
  },
  onIconTap(event: any) {
    const { icons } = this.data;
    const { index } = event.currentTarget.dataset;
    wx.setClipboardData({
      data: icons[index],
    });
  },
});