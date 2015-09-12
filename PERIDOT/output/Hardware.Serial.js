Ext.data.JsonP.Hardware_Serial({"tagname":"class","name":"Hardware.Serial","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"serial.js","href":"serial.html#Hardware-Serial"}],"aliases":{},"alternateClassNames":[],"extends":null,"mixins":[],"requires":[],"uses":[],"members":[{"name":"baudrate","tagname":"property","owner":"Hardware.Serial","id":"property-baudrate","meta":{}},{"name":"bits","tagname":"property","owner":"Hardware.Serial","id":"property-bits","meta":{"readonly":true}},{"name":"channel","tagname":"property","owner":"Hardware.Serial","id":"property-channel","meta":{"readonly":true}},{"name":"parity","tagname":"property","owner":"Hardware.Serial","id":"property-parity","meta":{"readonly":true}},{"name":"stopbits","tagname":"property","owner":"Hardware.Serial","id":"property-stopbits","meta":{"readonly":true}},{"name":"configure","tagname":"method","owner":"Hardware.Serial","id":"method-configure","meta":{"chainable":true}},{"name":"getc","tagname":"method","owner":"Hardware.Serial","id":"method-getc","meta":{}},{"name":"gets","tagname":"method","owner":"Hardware.Serial","id":"method-gets","meta":{}},{"name":"putc","tagname":"method","owner":"Hardware.Serial","id":"method-putc","meta":{}},{"name":"puts","tagname":"method","owner":"Hardware.Serial","id":"method-puts","meta":{}}],"code_type":"ext_define","id":"class-Hardware.Serial","component":false,"superclasses":[],"subclasses":["Peridot.Serial"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Peridot.Serial' rel='Peridot.Serial' class='docClass'>Peridot.Serial</a></div><h4>Files</h4><div class='dependency'><a href='source/serial.html#Hardware-Serial' target='_blank'>serial.js</a></div></pre><div class='doc-contents'><p>シリアル通信コントローラを操作するクラスです。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-baudrate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-property-baudrate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-property-baudrate' class='name expandable'>baudrate</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"></span></div><div class='description'><div class='short'>ボーレートをbps単位で取得/設定します。 ...</div><div class='long'><p>ボーレートをbps単位で取得/設定します。\n設定時、コントローラが許容出来る最も近いボーレートに補正されることがあります。</p>\n<p>Defaults to: <code>115200</code></p></div></div></div><div id='property-bits' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-property-bits' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-property-bits' class='name expandable'>bits</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>データ幅をビット単位で取得します。 ...</div><div class='long'><p>データ幅をビット単位で取得します。</p>\n<p>Defaults to: <code>8</code></p></div></div></div><div id='property-channel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-property-channel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-property-channel' class='name expandable'>channel</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。</p>\n</div><div class='long'><p>このインスタンスが割り当てられたコントローラのチャンネル番号を取得します。</p>\n</div></div></div><div id='property-parity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-property-parity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-property-parity' class='name expandable'>parity</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a>/null<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>パリティ設定を取得します。 ...</div><div class='long'><p>パリティ設定を取得します。</p>\n\n<ul>\n<li>null : パリティ無し</li>\n<li>0    : 偶数パリティ</li>\n<li>1    : 奇数パリティ</li>\n</ul>\n\n</div></div></div><div id='property-stopbits' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-property-stopbits' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-property-stopbits' class='name expandable'>stopbits</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>ストップビット幅をビット単位で取得します。 ...</div><div class='long'><p>ストップビット幅をビット単位で取得します。</p>\n<p>Defaults to: <code>1</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configure' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-method-configure' class='name expandable'>configure</a>( <span class='pre'>[rxd], [txd], [cts], [rts]</span> ) : <a href=\"#!/api/Hardware.Serial\" rel=\"Hardware.Serial\" class=\"docClass\">Hardware.Serial</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>ピン割り当てを行います。省略された(またはnullを渡された)ピンは使用されませんが、rxd または txd のどちらか一つは最低限指定する必要があります。 ...</div><div class='long'><p>ピン割り当てを行います。省略された(またはnullを渡された)ピンは使用されませんが、rxd または txd のどちらか一つは最低限指定する必要があります。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rxd</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Symbol\" rel=\"Symbol\" class=\"docClass\">Symbol</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>受信データ(RXD)入力先の名称(例:\"D0\")または番号(例:0)。</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>txd</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Symbol\" rel=\"Symbol\" class=\"docClass\">Symbol</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>送信データ(TXD)出力先の名称(例:\"D1\")または番号(例:1)。</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>cts</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Symbol\" rel=\"Symbol\" class=\"docClass\">Symbol</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>受信可能(CTS)入力先の名称(例:\"D2\")または番号(例:2)。</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>rts</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Symbol\" rel=\"Symbol\" class=\"docClass\">Symbol</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>送信要求(RTS)出力先の名称(例:\"D3\")または番号(例:3)。</p>\n<p>Defaults to: <code>null</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.Serial\" rel=\"Hardware.Serial\" class=\"docClass\">Hardware.Serial</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getc' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-method-getc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-method-getc' class='name expandable'>getc</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>1文字分のデータを読み込んで返します。 ...</div><div class='long'><p>1文字分のデータを読み込んで返します。</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>取得した文字</p>\n</div></li></ul></div></div></div><div id='method-gets' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-method-gets' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-method-gets' class='name expandable'>gets</a>( <span class='pre'>[limit], [rs]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>1行分のデータを読み込んで返します。 ...</div><div class='long'><p>1行分のデータを読み込んで返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>limit</span> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>読み込む最大のバイト数。省略時は行区切り文字が見つかるまで読み込みます。</p>\n<p>Defaults to: <code>null</code></p></div></li><li><span class='pre'>rs</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>行区切り文字。この文字列に含まれるいずれかの文字を見つけると1行と判定します。</p>\n<p>Defaults to: <code>&quot;\\n&quot;</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>取得した文字列(行区切り文字も含みます)</p>\n</div></li></ul></div></div></div><div id='method-putc' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-method-putc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-method-putc' class='name expandable'>putc</a>( <span class='pre'>ch</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>1文字分のデータを出力します。 ...</div><div class='long'><p>1文字分のデータを出力します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ch</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><div class='sub-desc'><p>出力する文字または文字コード(0以上255以内の整数)。\n       2文字以上の文字列を渡した場合、先頭の1文字のみが出力されます。</p>\n</div></li></ul></div></div></div><div id='method-puts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.Serial'>Hardware.Serial</span><br/><a href='source/serial.html#Hardware-Serial-method-puts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.Serial-method-puts' class='name expandable'>puts</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>文字列またはバイト列を出力します。 ...</div><div class='long'><p>文字列またはバイト列を出力します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/<a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a>[]<div class='sub-desc'><p>出力する文字列または文字コード(0以上255以内の整数)の配列。</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});