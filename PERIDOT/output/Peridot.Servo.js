Ext.data.JsonP.Peridot_Servo({"tagname":"class","name":"Peridot.Servo","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"servo.js","href":null}],"aliases":{},"alternateClassNames":[],"extends":"Hardware.Servo","mixins":[],"requires":[],"uses":[],"members":[{"name":"calib_max","tagname":"property","owner":"Hardware.Servo","id":"property-calib_max","meta":{}},{"name":"calib_min","tagname":"property","owner":"Hardware.Servo","id":"property-calib_min","meta":{}},{"name":"channel","tagname":"property","owner":"Hardware.Servo","id":"property-channel","meta":{"readonly":true}},{"name":"enabled","tagname":"property","owner":"Hardware.Servo","id":"property-enabled","meta":{}},{"name":"position","tagname":"property","owner":"Hardware.Servo","id":"property-position","meta":{}},{"name":"raw_position","tagname":"property","owner":"Hardware.Servo","id":"property-raw_position","meta":{}},{"name":"configure","tagname":"method","owner":"Hardware.Servo","id":"method-configure","meta":{"chainable":true}},{"name":"new","tagname":"method","owner":"Peridot.Servo","id":"static-method-new","meta":{"static":true}}],"code_type":"ext_define","id":"class-Peridot.Servo","component":false,"superclasses":["Hardware.Servo"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='docClass'>Hardware.Servo</a><div class='subclass '><strong>Peridot.Servo</strong></div></div></pre><div class='doc-contents'><p>PWM信号によるサーボモータコントローラを操作するクラスです。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-calib_max' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-calib_max' class='name expandable'>calib_max</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>キャリブレーション付きポジションの最大値に相当する絶対ポジションを取得/設定します。 ...</div><div class='long'><p>キャリブレーション付きポジションの最大値に相当する絶対ポジションを取得/設定します。\n0が左一杯、128が中央、255が右一杯を示します。\n<a href=\"#!/api/Hardware.Servo-property-calib_min\" rel=\"Hardware.Servo-property-calib_min\" class=\"docClass\">calib_min</a>より大きい値である必要があります。</p>\n<p>Defaults to: <code>255</code></p></div></div></div><div id='property-calib_min' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-calib_min' class='name expandable'>calib_min</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>キャリブレーション付きポジションの最小値に相当する絶対ポジションを取得/設定します。 ...</div><div class='long'><p>キャリブレーション付きポジションの最小値に相当する絶対ポジションを取得/設定します。\n0が左一杯、128が中央、255が右一杯を示します。\n<a href=\"#!/api/Hardware.Servo-property-calib_max\" rel=\"Hardware.Servo-property-calib_max\" class=\"docClass\">calib_max</a>より小さい値である必要があります。</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-channel' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-channel' class='name expandable'>channel</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。</p>\n</div><div class='long'><p>このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。</p>\n</div></div></div><div id='property-enabled' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-enabled' class='name expandable'>enabled</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>信号出力の有無を取得/設定します。 ...</div><div class='long'><p>信号出力の有無を取得/設定します。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-position' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-position' class='name expandable'>position</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ホーンのキャリブレーション付きポジションを取得/設定します。 ...</div><div class='long'><p>ホーンのキャリブレーション付きポジションを取得/設定します。\n0が左一杯、128が中央、255が右一杯を示しますが、<a href=\"#!/api/Hardware.Servo-property-raw_position\" rel=\"Hardware.Servo-property-raw_position\" class=\"docClass\">raw_position</a>で\nキャリブレーション範囲外が指定されている場合、0～255以外の値を返すことがあります。</p>\n<p>Defaults to: <code>128</code></p></div></div></div><div id='property-raw_position' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-property-raw_position' class='name expandable'>raw_position</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ホーンの絶対ポジションを取得/設定します。キャリブレーションの影響を受けません。 ...</div><div class='long'><p>ホーンの絶対ポジションを取得/設定します。キャリブレーションの影響を受けません。\n0が左一杯、128が中央、255が右一杯を示します。</p>\n<p>Defaults to: <code>128</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-configure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Hardware.Servo' rel='Hardware.Servo' class='defined-in docClass'>Hardware.Servo</a><br/></div><a href='#!/api/Hardware.Servo-method-configure' class='name expandable'>configure</a>( <span class='pre'>pin</span> ) : <a href=\"#!/api/Hardware.Servo\" rel=\"Hardware.Servo\" class=\"docClass\">Hardware.Servo</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>ピン割り当てを行います。 ...</div><div class='long'><p>ピン割り当てを行います。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Symbol\" rel=\"Symbol\" class=\"docClass\">Symbol</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><div class='sub-desc'><p>PWM信号出力先の名称(例:\"D16\")または番号(例:16)。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.Servo\" rel=\"Hardware.Servo\" class=\"docClass\">Hardware.Servo</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-new' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Peridot.Servo'>Peridot.Servo</span><br/></div><a href='#!/api/Peridot.Servo-static-method-new' class='name expandable'>new</a>( <span class='pre'></span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>インスタンスを生成します。olive構成では、生成できるインスタンスは最大30個です。 ...</div><div class='long'><p>インスタンスを生成します。olive構成では、生成できるインスタンスは最大30個です。\n引数が渡された場合、それを用いて新しいインスタンスの <a href=\"#!/api/Peridot.Servo-method-configure\" rel=\"Peridot.Servo-method-configure\" class=\"docClass\">configure</a> を呼び出します。</p>\n</div></div></div></div></div></div></div>","meta":{}});