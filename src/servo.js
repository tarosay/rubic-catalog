/**
 * PWM信号によるサーボモータコントローラを操作するクラスです。
 */
Ext.define("Hardware.Servo", {
  extend: null,

  /**
   * @chainable
   * ピン割り当てを行います。
   *
   * @param {String/Symbol/Integer} pin   PWM信号出力先の名称(例:"D16")または番号(例:16)。
   */
  configure: function() {},

  /**
   * @type {Boolean}
   * 信号出力の有無を取得/設定します。
   */
  enabled: false,

  /**
   * @type {Integer}
   * ホーンのキャリブレーション付きポジションを取得/設定します。
   * 0が左一杯、128が中央、255が右一杯を示しますが、{@link #raw_position}で
   * キャリブレーション範囲外が指定されている場合、0～255以外の値を返すことがあります。
   */
  position: 128,

  /**
   * @type {Integer}
   * ホーンの絶対ポジションを取得/設定します。キャリブレーションの影響を受けません。
   * 0が左一杯、128が中央、255が右一杯を示します。
   */
  raw_position: 128,

  /**
   * @type {Integer}
   * キャリブレーション付きポジションの最小値に相当する絶対ポジションを取得/設定します。
   * 0が左一杯、128が中央、255が右一杯を示します。
   * {@link #calib_max}より小さい値である必要があります。
   */
  calib_min: 0,

  /**
   * @type {Integer}
   * キャリブレーション付きポジションの最大値に相当する絶対ポジションを取得/設定します。
   * 0が左一杯、128が中央、255が右一杯を示します。
   * {@link #calib_min}より大きい値である必要があります。
   */
  calib_max: 255,

  /**
   * @type {Integer}
   * @readonly
   * このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。
   */
  channel: null,

});

/**
 * PWM信号によるサーボモータコントローラを操作するクラスです。
 */
Ext.define("Peridot.Servo", {
  extend: "Hardware.Servo",

  statics: {
    /**
     * インスタンスを生成します。olive構成では、生成できるインスタンスは最大30個です。
     * 引数が渡された場合、それを用いて新しいインスタンスの #configure を呼び出します。
     */
    new: function() {},
  },

});

/* vim: set et sts=2 sw=2: */
