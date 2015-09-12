/**
 * SPI(Serial Peripheral Interface)のマスター側コントローラを操作するクラスです。
 */
Ext.define("Hardware.SPIMaster", {
  extend: null,

  /**
   * @chainable
   * ピン割り当てを行います。
   *
   * @param {String/Symbol/Integer} sck
   *        クロック信号(SCK)の名称(例:"D13")または番号(例:13)。
   * @param {String/Symbol/Integer} miso
   *        マスター入力信号(MISO)の名称(例:"D12")または番号(例:12)。
   * @param {String/Symbol/Integer} mosi
   *        マスター出力信号(MOSI)の名称(例:"D11")または番号(例:11)。
   * @param {String/Symbol/Integer/String[]/Symbol[]/Integer[]} [ss=null]
   *        負論理スレーブ選択信号の名称(例:"D10")または番号(例:10)。複数のスレーブを接続する場合、名称または番号の配列を与えることもできます。
   *        省略時はスレーブ選択信号を持たない1つのスレーブが接続されているものと見なします。
   */
  configure: function() {},

  /**
   * @type {Integer}
   * SPIの通信モードを取得/設定します。以下の4つのうちいずれか1つです。
   *
   * - 0 : 正パルス、ラッチ先行
   * - 1 : 正パルス、シフト先行
   * - 2 : 負パルス、ラッチ先行
   * - 3 : 負パルス、シフト先行
   */
  mode: 0,

  /**
   * @type {Boolean}
   * MSBファーストで通信するかどうかを取得/設定します。
   *
   * - true : MSBファースト
   * - false : LSBファースト
   */
  msb_first: true,

  /**
   * @type {Integer}
   * クロック周波数をHz単位で取得/設定します。
   * 設定時は、コントローラが許容できるクロック周波数に合わせて、
   * 代入した値を越えない最も近い値に補正されることがあります。
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
   * @param {Integer[]} txdata
   *        送信するバイト列を指定します。各要素が0以上255以内の数値で構成された配列を渡します。
   * @param {Integer}   [rxoffset=0]
   *        送信を開始してから受信データの取り込みを開始するまでのバイト数を指定します。
   *        0の場合、送信と同時に取り込みを開始します。負の値を指定すると、送信データの末端バイトを-1として逆順に数えます。
   * @param {Integer/null}  [rxbytes=null]
   *        受信するバイト数を指定します。省略時やnullを指定した場合、送信終了と同時に取り込みを終了します。
   * @param {Integer}   [txfiller=0xff]
   *        送信データを送り終わった後にも引き続き受信が必要な場合、ダミーで送信されるバイトデータを指定します。
   * @param {Integer}   [slave=0]
   *        ピン割り当て時にスレーブを複数接続した場合、対象のスレーブを選択します。
   * @return {Integer[]} 受信したバイト列。各要素が0以上255以内の数値で構成された配列が返ります。
   */
  transfer: function() {},

  /**
   * データの送受信を行います。#transfer の別名です。
   */
  send: function() {},

  /**
   * データの受信を行います。
   * @param {Integer} rxbytes
   *        受信するバイト数を指定します。
   * @param {Integer} [txfiller=0xff]
   *        ダミーで送信されるバイトデータを指定します。
   * @return {Integer[]} 受信したバイト列。各要素が0以上255以内の数値で構成された配列が返ります。
   */
  recv: function() {},
});

/**
 * SPI(Serial Peripheral Interface)のマスター側コントローラを操作するクラスです。
 */
Ext.define("Peridot.SPIMaster", {
  extend: "Hardware.SPIMaster",

  statics: {
    /**
     * インスタンスを生成します。olive構成では、生成できるインスタンスは最大1個です。
     * 引数が渡された場合、それを用いて新しいインスタンスの #configure を呼び出します。
     */
    new: function() {},
  },

});

/* vim: set et sts=2 sw=2: */
