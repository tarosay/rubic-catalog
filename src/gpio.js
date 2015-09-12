/**
 * 汎用入力ポート(GPI)を操作するクラスです。
 */
Ext.define("Hardware.GPI", {
  extend: null,

  /**
   * @type {Integer}
   * @readonly
   * ビット幅を取得します。
   */
  width: null,

  /**
   * @chainable
   * 正論理に設定します。高い電位をon==assert、低い電位をoff==negateとして扱います。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   */
  active_high: function() {},

  /**
   * @type {Boolean}
   * @readonly
   * 正論理かどうかを取得します。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。
   * - false : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。
   */
  is_active_high: true,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_active_high
   * @localdoc このメンバは {@link #is_active_high} と同じです。
   */
  "active_high?": true,

  /**
   * @chainable
   * 負論理に設定します。高い電位をoff==negate、低い電位をon==assertとして扱います。
   * この設定は #set, #clear, #high、#low、#value には影響しません。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   */
  active_low: function() {},

  /**
   * @type {boolean}
   * @readonly
   * 負論理かどうかを取得します。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。
   * - false : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。
   */
  is_active_low: false,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_active_low
   * @localdoc このメンバは {@link #is_active_low} と同じです。
   */
  "active_low?": false,

  /**
   * @type {Boolean}
   * @readonly
   * 現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : set (高い電位==high)
   * - false : clear (低い電位==low)
   *
   * @localdoc このメンバは {@link #is_high} と同じです。
   */
  is_set: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_set
   * @localdoc このメンバは {@link #is_set} と同じです。
   */
  "set?": null,

  /**
   * @type {Boolean}
   * @readonly
   * 現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : clear (低い電位==low)
   * - false : set (高い電位==high)
   *
   * @localdoc このメンバは {@link #is_low} と同じです。
   */
  is_cleared: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_cleared
   * @localdoc このメンバは {@link #is_cleared} と同じです。
   */
  "cleared?": null,

  /**
   * @readonly
   * @inheritdoc #is_set
   * @localdoc このメンバは {@link #is_set} と同じです。
   */
  is_high: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_set
   * @localdoc このメンバは {@link #is_high} と同じです。
   */
  "high?": null,

  /**
   * @readonly
   * @inheritdoc #is_cleared
   * @localdoc このメンバは {@link #is_cleared} と同じです。
   */
  is_low: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_cleared
   * @localdoc このメンバは {@link #is_low} と同じです。
   */
  "low?": null,

  /**
   * @type {Boolean}
   * 現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : set (正論理の場合は高い電位、負論理の場合は低い電位)
   * - false : clear (正論理の場合は低い電位、負論理の場合は高い電位)
   *
   * @localdoc このメンバは {@link #is_asserted} と同じです。
   */
  is_on: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_on
   * @localdoc このメンバは {@link #is_on} と同じです。
   */
  "on?": null,

  /**
   * @type {Boolean}
   * 現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   *
   * - true : clear (正論理の場合は低い電位、負論理の場合は高い電位)
   * - false : set (正論理の場合は高い電位、負論理の場合は低い電位)
   *
   * @localdoc このメンバは {@link #is_negated} と同じです。
   */
  is_off: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_off
   * @localdoc このメンバは {@link #is_off} と同じです。
   */
  "off?": null,

  /**
   * @readonly
   * @inheritdoc #is_on
   * @localdoc このメンバは {@link #is_on} と同じです。
   */
  is_asserted: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_asserted
   * @localdoc このメンバは {@link #is_asserted} と同じです。
   */
  "asserted?": null,

  /**
   * @readonly
   * @inheritdoc #is_off
   * @localdoc このメンバは {@link #is_off} と同じです。
   */
  is_negated: null,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_off
   * @localdoc このメンバは {@link #is_negated} と同じです。
   */
  "negated?": null,

  /**
   * @type {Boolean}
   * @readonly
   * 現在の入力レベルを整数値で取得します。整数値のnビット目が、入力ポートのnビット目に相当します。
   * 正論理/負論理設定は無視され、電位が高い場合は1、低い場合は0として取得されます。
   */
  value: null,

  /**
   * @type {Boolean}
   * @readonly
   * 出力が有効かどうかを取得します。常に false を返します。
   */
  is_output_enabled: false,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_output_enabled
   * @localdoc このメンバは {@link #is_output_enabled} と同じです。
   */
  "output_enabled?": false,

  /**
   * @type {Boolean}
   * @readonly
   * 出力が無効かどうかを取得します。常に true を返します。
   */
  is_output_disabled: true,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_output_disabled
   * @localdoc このメンバは {@link #is_output_disabled} と同じです。
   */
  "output_disabled?": false,

  /**
   * 一部のビットのみを取り出した新しいインスタンスを生成します。
   * 正論理/負論理や入出力方向の設定は、生成元のインスタンスと共有されます。
   * @param {Integer/Range}   msb
   *        最上位のビット番号を指定します。Rubyでは、Range(例:10..2)を使って最下位ビット番号を同時に指定することもできます。その場合、lsb引数は無視されます。
   * @param {Integer}         [lsb=msb]
   *        最下位のビット番号を指定します。最上位のビット番号以下でなければなりません。省略時は最上位の1ビットだけが取り出されます。
   * @return {Hardware.GPI}  生成されたインスタンス
   */
  slice: function() {},

  /**
   * @inheritdoc #slice
   */
  "[]": function() {},

});

/**
 * 汎用入出力ポート(GPIO)を操作するクラスです。
 */
Ext.define("Hardware.GPIO", {
  extend: "Hardware.GPI",

  /**
   * @chainable
   * @inheritdoc Hardware.GPI#active_high
   */
  active_high: function() {},

  /**
   * @chainable
   * @inheritdoc Hardware.GPI#active_low
   */
  active_low: function() {},

  /**
   * @chainable
   * 出力レベルを高い電位に変更します。正論理/負論理設定の影響を受けません。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   * 入力専用ビットに対して実行すると無視されます。
   * @localdoc このメンバは {@link #high} と同じです。
   */
  set: function() {},

  /**
   * @chainable
   * 出力レベルを低い電位に変更します。正論理/負論理設定の影響を受けません。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   * 入力専用ビットに対して実行すると無視されます。
   * @localdoc このメンバは {@link #low} と同じです。
   */
  clear: function() {},

  /**
   * @chainable
   * @inheritdoc #set
   * @localdoc このメンバは {@link #set} と同じです。
   */
  high: function() {},

  /**
   * @chainable
   * @inheritdoc #clear
   * @localdoc このメンバは {@link #clear} と同じです。
   */
  low: function() {},

  /**
   * @chainable
   * 出力レベルをon状態に変更します。正論理/負論理設定の影響を受け、正論理では高い電位、負論理では低い電位に変更されます。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   * 入力専用ビットに対して実行すると無視されます。
   * @localdoc このメンバは {@link #assert} と同じです。
   */
  on: function() {},

  /**
   * @chainable
   * 出力レベルをoff状態に変更します。正論理/負論理設定の影響を受け、正論理では低い電位、負論理では高い電位に変更されます。
   * ビット幅が1より大きい場合、全ビットの設定を変更します。
   * 入力専用ビットに対して実行すると無視されます。
   * @localdoc このメンバは {@link #negate} と同じです。
   */
  off: function() {},

  /**
   * @chainable
   * @inheritdoc #on
   * @localdoc このメンバは {@link #on} と同じです。
   */
  assert: function() {},

  /**
   * @chainable
   * @inheritdoc #off
   * @localdoc このメンバは {@link #off} と同じです。
   */
  negate: function() {},

  /**
   * @type {Boolean}
   * 入出力レベルを整数値で取得/設定します。整数値のnビット目が、入出力ポートのnビット目に相当します。
   * 正論理/負論理設定は無視され、電位が高い場合は1、低い場合は0として取得/設定されます。
   * 取得時は、現在の入力レベルを取得します。
   * 設定時は、出力レベル設定レジスタの値を書き換えます。入力専用ビットに対しての書き込みは無視されます。
   */
  value: null,

  /**
   * @chainable
   * 出力レベルを反転します。高い電位のビットは低い電位に、低い電位のビットは高い電位に変更されます。
   * ビット幅が1より大きい場合は、各々のビットについて反転を行います。
   */
  toggle: function() {},

  /**
   * @chainable
   * 出力を有効に設定します。ビット幅が1より大きい場合、全ビットの設定を変更します。
   * @localdoc このメンバは {@link #enable_output} と同じです。
   */
  output_enable: function() {},

  /**
   * @chainable
   * @inheritdoc #output_enable
   * @localdoc このメンバは {@link #output_enable} と同じです。
   */
  enable_output: function() {},

  /**
   * @type {Boolean}
   * @readonly
   * 出力が有効かどうかを取得します。{@link #is_output_disabled} の逆論理バージョンです。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   */
  is_output_enabled: false,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_output_enabled
   * @localdoc このメンバは {@link #is_output_enabled} と同じです。
   */
  "output_enabled?": false,

  /**
   * @chainable
   * 出力を無効に設定します。ビット幅が1より大きい場合、全ビットの設定を変更します。
   * @localdoc このメンバは {@link #disable_output} と同じです。
   */
  output_disable: function() {},

  /**
   * @chainable
   * @inheritdoc #output_disable
   * @localdoc このメンバは {@link #output_disable} と同じです。
   */
  disable_output: function() {},

  /**
   * @type {Boolean}
   * @readonly
   * 出力が無効かどうかを取得します。{@link #is_output_enabled} の逆論理バージョンです。
   * ビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。
   */
  is_output_disabled: true,

  /**
   * @ruby
   * @readonly
   * @inheritdoc #is_output_disabled
   * @localdoc このメンバは {@link #is_output_disabled} と同じです。
   */
  "output_disabled?": false,

  /**
   * @inheritdoc Hardware.GPI#slice
   * @return {Hardware.GPIO}  生成されたインスタンス
   */
  slice: function() {},

  /**
   * @inheritdoc #slice
   */
  "[]": function() {},

});

/* vim: set et sts=2 sw=2: */
