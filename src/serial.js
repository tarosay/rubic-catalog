/**
 * シリアル通信コントローラを操作するクラスです。
 */
Ext.define("Hardware.Serial", {
  extend: null,

  /**
   * @chainable
   * ピン割り当てを行います。省略された(またはnullを渡された)ピンは使用されませんが、rxd または txd のどちらか一つは最低限指定する必要があります。
   *
   * @param {String/Symbol/Integer} [rxd=null]
   *        受信データ(RXD)入力先の名称(例:"D0")または番号(例:0)。
   * @param {String/Symbol/Integer} [txd=null]
   *        送信データ(TXD)出力先の名称(例:"D1")または番号(例:1)。
   * @param {String/Symbol/Integer} [cts=null]
   *        受信可能(CTS)入力先の名称(例:"D2")または番号(例:2)。
   * @param {String/Symbol/Integer} [rts=null]
   *        送信要求(RTS)出力先の名称(例:"D3")または番号(例:3)。
   */
  configure: function() {},

  /**
   * @type {Integer}
   * @readonly
   * このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。
   */
  channel: null,

  /**
   * @type {Integer}
   * ボーレートをbps単位で取得/設定します。
   * 設定時、コントローラが許容出来る最も近いボーレートに補正されることがあります。
   */
  baudrate: 115200,

  /**
   * @type {Integer}
   * @readonly
   * データ幅をビット単位で取得します。
   */
  bits: 8,

  /**
   * @type {Integer}
   * @readonly
   * ストップビット幅をビット単位で取得します。
   */
  stopbits: 1,

  /**
   * @type {Integer/null}
   * @readonly
   * パリティ設定を取得します。
   *
   * - null : パリティ無し
   * - 0    : 偶数パリティ
   * - 1    : 奇数パリティ
   */
  parity: null,

  /**
   * 1文字分のデータを読み込んで返します。
   * @return {String} 取得した文字
   */
  getc: function() {},

  /**
   * 1行分のデータを読み込んで返します。
   * @param {Integer} [limit=null]  読み込む最大のバイト数。省略時は行区切り文字が見つかるまで読み込みます。
   * @param {String}  [rs="\n"]     行区切り文字。この文字列に含まれるいずれかの文字を見つけると1行と判定します。
   * @return {String} 取得した文字列(行区切り文字も含みます)
   */
  gets: function() {},

  /**
   * 1文字分のデータを出力します。
   * @param {String/Integer} ch
   *        出力する文字または文字コード(0以上255以内の整数)。
   *        2文字以上の文字列を渡した場合、先頭の1文字のみが出力されます。
   */
  putc: function() {},

  /**
   * 文字列またはバイト列を出力します。
   * @param {String/Integer[]}  data
   *        出力する文字列または文字コード(0以上255以内の整数)の配列。
   */
  puts: function() {},

});

/**
 * シリアル通信コントローラ(UART)を操作するクラスです。
 */
Ext.define("Peridot.Serial", {
  extend: "Hardware.Serial",

  statics: {
    /**
     * インスタンスを生成します。olive構成では、生成できるインスタンスは最大2個です。
     * 引数が渡された場合、それを用いて新しいインスタンスの #configure を呼び出します。
     */
    new: function() {},
  },

});

/* vim: set et sts=2 sw=2: */
