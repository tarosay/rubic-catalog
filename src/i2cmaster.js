/**
 * I2C(Inter-Integrated Circuit)のマスター側コントローラを操作するクラスです。
 */
Ext.define("Hardware.I2CMaster", {
  extend: null,

  /**
   * @chainable
   * ピン割り当てを行います。
   *
   * @param {String/Symbol/Integer} scl
   *        クロック信号(SCL)の名称(例:"D15")または番号(例:15)。
   * @param {String/Symbol/Integer} sda
   *        データ信号(SDA)の名称(例:"D14")または番号(例:14)。
   */
  configure: function() {},

  /**
   * @type {Integer}
   * クロック周波数をHz単位で取得/設定します。
   * 設定時は、コントローラが許容できるクロック周波数に合わせて、
   * 代入しようとした値を越えない最も近い値に補正されることがあります。
   * 取得時は、コントローラに設定された実際のクロック周波数が返ります。
   */
  clock: 100000,

  /**
   * @type {Integer}
   * @readonly
   * このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。
   */
  channel: null,

  /**
   * データの送受信を行います。
   * @param {Integer}   slave
   *        スレーブアドレスを7-bitの整数値(0～127)で指定します。
   * @param {Integer[]/null}  txdata
   *        最初に送信するバイト列を指定します。各要素が0以上255以内の数値で構成された配列を渡します。
   *        受信のみを行いたい場合、nullまたは空の配列を指定します。
   * @param {Integer}   [rxbytes=0]
   *        受信したいバイト数を指定します。送信終了後にここで指定したサイズを受信します。
   *        スレーブからの応答によっては、受信データがここで指定したサイズ未満になる場合もあります。
   * @return {Integer[]} 受信したバイト列。各要素が0以上255以内の数値で構成された配列が返ります。
   */
  transfer: function() {},

});

/**
 * I2C(Inter-Integrated Circuit)のマスター側コントローラを操作するクラスです。
 */
Ext.define("Peridot.I2CMaster", {
  extend: "Hardware.I2CMaster",

  statics: {
    /**
     * インスタンスを生成します。olive構成では、生成できるインスタンスは最大1個です。
     * 引数が渡された場合、それを用いて新しいインスタンスの #configure を呼び出します。
     */
    new: function() {},
  },

});

/* vim: set et sts=2 sw=2: */
