Ext.data.JsonP.Hardware_GPI({"tagname":"class","name":"Hardware.GPI","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"gpio.js","href":"gpio.html#Hardware-GPI"}],"aliases":{},"alternateClassNames":[],"extends":null,"mixins":[],"requires":[],"uses":[],"members":[{"name":"active_high?","tagname":"property","owner":"Hardware.GPI","id":"property-active_high?","meta":{"readonly":true}},{"name":"active_low?","tagname":"property","owner":"Hardware.GPI","id":"property-active_low?","meta":{"readonly":true}},{"name":"asserted?","tagname":"property","owner":"Hardware.GPI","id":"property-asserted?","meta":{"readonly":true}},{"name":"cleared?","tagname":"property","owner":"Hardware.GPI","id":"property-cleared?","meta":{"readonly":true}},{"name":"high?","tagname":"property","owner":"Hardware.GPI","id":"property-high?","meta":{"readonly":true}},{"name":"is_active_high","tagname":"property","owner":"Hardware.GPI","id":"property-is_active_high","meta":{"readonly":true}},{"name":"is_active_low","tagname":"property","owner":"Hardware.GPI","id":"property-is_active_low","meta":{"readonly":true}},{"name":"is_asserted","tagname":"property","owner":"Hardware.GPI","id":"property-is_asserted","meta":{"readonly":true}},{"name":"is_cleared","tagname":"property","owner":"Hardware.GPI","id":"property-is_cleared","meta":{"readonly":true}},{"name":"is_high","tagname":"property","owner":"Hardware.GPI","id":"property-is_high","meta":{"readonly":true}},{"name":"is_low","tagname":"property","owner":"Hardware.GPI","id":"property-is_low","meta":{"readonly":true}},{"name":"is_negated","tagname":"property","owner":"Hardware.GPI","id":"property-is_negated","meta":{"readonly":true}},{"name":"is_off","tagname":"property","owner":"Hardware.GPI","id":"property-is_off","meta":{}},{"name":"is_on","tagname":"property","owner":"Hardware.GPI","id":"property-is_on","meta":{}},{"name":"is_output_disabled","tagname":"property","owner":"Hardware.GPI","id":"property-is_output_disabled","meta":{"readonly":true}},{"name":"is_output_enabled","tagname":"property","owner":"Hardware.GPI","id":"property-is_output_enabled","meta":{"readonly":true}},{"name":"is_set","tagname":"property","owner":"Hardware.GPI","id":"property-is_set","meta":{"readonly":true}},{"name":"low?","tagname":"property","owner":"Hardware.GPI","id":"property-low?","meta":{"readonly":true}},{"name":"negated?","tagname":"property","owner":"Hardware.GPI","id":"property-negated?","meta":{"readonly":true}},{"name":"off?","tagname":"property","owner":"Hardware.GPI","id":"property-off?","meta":{"readonly":true}},{"name":"on?","tagname":"property","owner":"Hardware.GPI","id":"property-on?","meta":{"readonly":true}},{"name":"output_disabled?","tagname":"property","owner":"Hardware.GPI","id":"property-output_disabled?","meta":{"readonly":true}},{"name":"output_enabled?","tagname":"property","owner":"Hardware.GPI","id":"property-output_enabled?","meta":{"readonly":true}},{"name":"set?","tagname":"property","owner":"Hardware.GPI","id":"property-set?","meta":{"readonly":true}},{"name":"value","tagname":"property","owner":"Hardware.GPI","id":"property-value","meta":{"readonly":true}},{"name":"width","tagname":"property","owner":"Hardware.GPI","id":"property-width","meta":{"readonly":true}},{"name":"[]","tagname":"method","owner":"Hardware.GPI","id":"method-[]","meta":{}},{"name":"active_high","tagname":"method","owner":"Hardware.GPI","id":"method-active_high","meta":{"chainable":true}},{"name":"active_low","tagname":"method","owner":"Hardware.GPI","id":"method-active_low","meta":{"chainable":true}},{"name":"slice","tagname":"method","owner":"Hardware.GPI","id":"method-slice","meta":{}}],"code_type":"ext_define","id":"class-Hardware.GPI","component":false,"superclasses":[],"subclasses":["Hardware.GPIO"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Hardware.GPIO' rel='Hardware.GPIO' class='docClass'>Hardware.GPIO</a></div><h4>Files</h4><div class='dependency'><a href='source/gpio.html#Hardware-GPI' target='_blank'>gpio.js</a></div></pre><div class='doc-contents'><p>汎用入力ポート(GPI)を操作するクラスです。</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-active_high?' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-active_high?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-active_high?' class='name expandable'>active_high?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>正論理かどうかを取得します。 ...</div><div class='long'><p>正論理かどうかを取得します。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。</li>\n<li>false : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_active_high\" rel=\"Hardware.GPI-property-is_active_high\" class=\"docClass\">is_active_high</a> と同じです。</p>\n<p>Defaults to: <code>true</code></p>        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-active_low?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-active_low?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-active_low?' class='name expandable'>active_low?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>負論理かどうかを取得します。 ...</div><div class='long'><p>負論理かどうかを取得します。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。</li>\n<li>false : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_active_low\" rel=\"Hardware.GPI-property-is_active_low\" class=\"docClass\">is_active_low</a> と同じです。</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-asserted?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-asserted?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-asserted?' class='name expandable'>asserted?</a> : Object<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n<li>false : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_asserted\" rel=\"Hardware.GPI-property-is_asserted\" class=\"docClass\">is_asserted</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-cleared?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-cleared?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-cleared?' class='name expandable'>cleared?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (低い電位==low)</li>\n<li>false : set (高い電位==high)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_cleared\" rel=\"Hardware.GPI-property-is_cleared\" class=\"docClass\">is_cleared</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-high?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-high?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-high?' class='name expandable'>high?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (高い電位==high)</li>\n<li>false : clear (低い電位==low)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_high\" rel=\"Hardware.GPI-property-is_high\" class=\"docClass\">is_high</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-is_active_high' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_active_high' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_active_high' class='name expandable'>is_active_high</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>正論理かどうかを取得します。 ...</div><div class='long'><p>正論理かどうかを取得します。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。</li>\n<li>false : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。</li>\n</ul>\n\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-is_active_low' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_active_low' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_active_low' class='name expandable'>is_active_low</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>負論理かどうかを取得します。 ...</div><div class='long'><p>負論理かどうかを取得します。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : 負論理。高い電位をoff==negate、低い電位をon==assertとして扱います。</li>\n<li>false : 正論理。高い電位をon==assert、低い電位をoff==negateとして扱います。</li>\n</ul>\n\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-is_asserted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_asserted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_asserted' class='name expandable'>is_asserted</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n<li>false : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_on\" rel=\"Hardware.GPI-property-is_on\" class=\"docClass\">is_on</a> と同じです。</p>\n</div></div></div><div id='property-is_cleared' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_cleared' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_cleared' class='name expandable'>is_cleared</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (低い電位==low)</li>\n<li>false : set (高い電位==high)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_low\" rel=\"Hardware.GPI-property-is_low\" class=\"docClass\">is_low</a> と同じです。</p>\n</div></div></div><div id='property-is_high' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_high' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_high' class='name expandable'>is_high</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (高い電位==high)</li>\n<li>false : clear (低い電位==low)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_set\" rel=\"Hardware.GPI-property-is_set\" class=\"docClass\">is_set</a> と同じです。</p>\n</div></div></div><div id='property-is_low' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_low' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_low' class='name expandable'>is_low</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (低い電位==low)</li>\n<li>false : set (高い電位==high)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_cleared\" rel=\"Hardware.GPI-property-is_cleared\" class=\"docClass\">is_cleared</a> と同じです。</p>\n</div></div></div><div id='property-is_negated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_negated' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_negated' class='name expandable'>is_negated</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n<li>false : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_off\" rel=\"Hardware.GPI-property-is_off\" class=\"docClass\">is_off</a> と同じです。</p>\n</div></div></div><div id='property-is_off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_off' class='name expandable'>is_off</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n<li>false : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_negated\" rel=\"Hardware.GPI-property-is_negated\" class=\"docClass\">is_negated</a> と同じです。</p>\n</div></div></div><div id='property-is_on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_on' class='name expandable'>is_on</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n<li>false : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_asserted\" rel=\"Hardware.GPI-property-is_asserted\" class=\"docClass\">is_asserted</a> と同じです。</p>\n</div></div></div><div id='property-is_output_disabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_output_disabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_output_disabled' class='name expandable'>is_output_disabled</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>出力が無効かどうかを取得します。常に true を返します。 ...</div><div class='long'><p>出力が無効かどうかを取得します。常に true を返します。</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-is_output_enabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_output_enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_output_enabled' class='name expandable'>is_output_enabled</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>出力が有効かどうかを取得します。常に false を返します。 ...</div><div class='long'><p>出力が有効かどうかを取得します。常に false を返します。</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-is_set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-is_set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-is_set' class='name expandable'>is_set</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (高い電位==high)</li>\n<li>false : clear (低い電位==low)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_high\" rel=\"Hardware.GPI-property-is_high\" class=\"docClass\">is_high</a> と同じです。</p>\n</div></div></div><div id='property-low?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-low?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-low?' class='name expandable'>low?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが低い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (低い電位==low)</li>\n<li>false : set (高い電位==high)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_low\" rel=\"Hardware.GPI-property-is_low\" class=\"docClass\">is_low</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-negated?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-negated?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-negated?' class='name expandable'>negated?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n<li>false : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_negated\" rel=\"Hardware.GPI-property-is_negated\" class=\"docClass\">is_negated</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-off?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-off?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-off?' class='name expandable'>off?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがoff状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n<li>false : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_off\" rel=\"Hardware.GPI-property-is_off\" class=\"docClass\">is_off</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-on?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-on?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-on?' class='name expandable'>on?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。 ...</div><div class='long'><p>現在の入力レベルがon状態であるかを取得します。正論理/負論理設定の影響を受けます。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (正論理の場合は高い電位、負論理の場合は低い電位)</li>\n<li>false : clear (正論理の場合は低い電位、負論理の場合は高い電位)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_on\" rel=\"Hardware.GPI-property-is_on\" class=\"docClass\">is_on</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-output_disabled?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-output_disabled?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-output_disabled?' class='name expandable'>output_disabled?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>出力が無効かどうかを取得します。常に true を返します。 ...</div><div class='long'><p>出力が無効かどうかを取得します。常に true を返します。</p>\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_output_disabled\" rel=\"Hardware.GPI-property-is_output_disabled\" class=\"docClass\">is_output_disabled</a> と同じです。</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-output_enabled?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-output_enabled?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-output_enabled?' class='name expandable'>output_enabled?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>出力が有効かどうかを取得します。常に false を返します。 ...</div><div class='long'><p>出力が有効かどうかを取得します。常に false を返します。</p>\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_output_enabled\" rel=\"Hardware.GPI-property-is_output_enabled\" class=\"docClass\">is_output_enabled</a> と同じです。</p>\n<p>Defaults to: <code>false</code></p>        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-set?' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-set?' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-set?' class='name expandable'>set?</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。 ...</div><div class='long'><p>現在の入力レベルが高い電位であるかを取得します。正論理/負論理設定の影響を受けません。\nビット幅が1より大きい場合は使用できません。使用するとエラーを発生させます。</p>\n\n<ul>\n<li>true : set (高い電位==high)</li>\n<li>false : clear (低い電位==low)</li>\n</ul>\n\n<p>このメンバは <a href=\"#!/api/Hardware.GPI-property-is_set\" rel=\"Hardware.GPI-property-is_set\" class=\"docClass\">is_set</a> と同じです。</p>\n        <p>Available since: <b>Ruby言語限定</b></p>\n</div></div></div><div id='property-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-value' class='name expandable'>value</a> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>現在の入力レベルを整数値で取得します。整数値のnビット目が、入力ポートのnビット目に相当します。 ...</div><div class='long'><p>現在の入力レベルを整数値で取得します。整数値のnビット目が、入力ポートのnビット目に相当します。\n正論理/負論理設定は無視され、電位が高い場合は1、低い場合は0として取得されます。</p>\n</div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-property-width' class='name expandable'>width</a> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>ビット幅を取得します。</p>\n</div><div class='long'><p>ビット幅を取得します。</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-[]' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-method-[]' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-method-[]' class='name expandable'>[]</a>( <span class='pre'>msb, [lsb]</span> ) : <a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a><span class=\"signature\"></span></div><div class='description'><div class='short'>一部のビットのみを取り出した新しいインスタンスを生成します。 ...</div><div class='long'><p>一部のビットのみを取り出した新しいインスタンスを生成します。\n正論理/負論理や入出力方向の設定は、生成元のインスタンスと共有されます。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msb</span> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a>/<a href=\"#!/api/Range\" rel=\"Range\" class=\"docClass\">Range</a><div class='sub-desc'><p>最上位のビット番号を指定します。Rubyでは、Range(例:10..2)を使って最下位ビット番号を同時に指定することもできます。その場合、lsb引数は無視されます。</p>\n\n</div></li><li><span class='pre'>lsb</span> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>最下位のビット番号を指定します。最上位のビット番号以下でなければなりません。省略時は最上位の1ビットだけが取り出されます。</p>\n\n<p>Defaults to: <code>msb</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a></span><div class='sub-desc'><p>生成されたインスタンス</p>\n\n</div></li></ul></div></div></div><div id='method-active_high' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-method-active_high' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-method-active_high' class='name expandable'>active_high</a>( <span class='pre'></span> ) : <a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>正論理に設定します。高い電位をon==assert、低い電位をoff==negateとして扱います。 ...</div><div class='long'><p>正論理に設定します。高い電位をon==assert、低い電位をoff==negateとして扱います。\nビット幅が1より大きい場合、全ビットの設定を変更します。</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-active_low' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-method-active_low' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-method-active_low' class='name expandable'>active_low</a>( <span class='pre'></span> ) : <a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>負論理に設定します。高い電位をoff==negate、低い電位をon==assertとして扱います。 ...</div><div class='long'><p>負論理に設定します。高い電位をoff==negate、低い電位をon==assertとして扱います。\nこの設定は #set, #clear, #high、#low、<a href=\"#!/api/Hardware.GPI-property-value\" rel=\"Hardware.GPI-property-value\" class=\"docClass\">value</a> には影響しません。\nビット幅が1より大きい場合、全ビットの設定を変更します。</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-slice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Hardware.GPI'>Hardware.GPI</span><br/><a href='source/gpio.html#Hardware-GPI-method-slice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Hardware.GPI-method-slice' class='name expandable'>slice</a>( <span class='pre'>msb, [lsb]</span> ) : <a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a><span class=\"signature\"></span></div><div class='description'><div class='short'>一部のビットのみを取り出した新しいインスタンスを生成します。 ...</div><div class='long'><p>一部のビットのみを取り出した新しいインスタンスを生成します。\n正論理/負論理や入出力方向の設定は、生成元のインスタンスと共有されます。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msb</span> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a>/<a href=\"#!/api/Range\" rel=\"Range\" class=\"docClass\">Range</a><div class='sub-desc'><p>最上位のビット番号を指定します。Rubyでは、Range(例:10..2)を使って最下位ビット番号を同時に指定することもできます。その場合、lsb引数は無視されます。</p>\n\n</div></li><li><span class='pre'>lsb</span> : <a href=\"#!/api/Integer\" rel=\"Integer\" class=\"docClass\">Integer</a> (optional)<div class='sub-desc'><p>最下位のビット番号を指定します。最上位のビット番号以下でなければなりません。省略時は最上位の1ビットだけが取り出されます。</p>\n\n<p>Defaults to: <code>msb</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Hardware.GPI\" rel=\"Hardware.GPI\" class=\"docClass\">Hardware.GPI</a></span><div class='sub-desc'><p>生成されたインスタンス</p>\n\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});