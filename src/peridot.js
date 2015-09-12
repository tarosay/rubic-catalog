/**
 * PERIDOTボードを操作するクラスです。
 */
Ext.define("Peridot", {
  extend: null,

  statics: {
    /**
     * @type {Hardware.GPIO}
     * @readonly
     * PERIDOTボード右上のSTART LEDを制御するGPIOクラスのインスタンスを返します。
     */
    start_led: null,

    /**
     * @type {Hardware.GPIO}
     * @readonly
     * ディジタル入出力ポート(D27～D0)を制御するGPIOクラスのインスタンスを返します。
     */
    digital_io: null,

    /**
     * @type {String}
     * @readonly
     * ボードの名称を取得します。常に"PERIDOT"を返します。
     */
    name: "PERIDOT",

  },

});

/* vim: set et sts=2 sw=2: */
