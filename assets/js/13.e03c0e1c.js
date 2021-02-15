(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{373:function(t,s,a){"use strict";a.r(s);var m=a(25),c=Object(m.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-速度"}},[t._v("#")]),t._v(" 3.速度")]),t._v(" "),a("h2",{attrs:{id:"_3-1-计算重心速度-barycentric-velocity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-计算重心速度-barycentric-velocity"}},[t._v("#")]),t._v(" 3.1.计算重心速度 (⚡️ Barycentric velocity)")]),t._v(" "),a("p",[t._v("iSpec 包含了一个计算朝向地球的地球速度的选项 (在菜单栏中的 "),a("code",[t._v("Parameters - Calculate barycentric velocity")]),t._v("， 该算法基于 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/1980A&AS...41....1S",target:"_blank",rel:"noopener noreferrer"}},[t._v("Stumpff 1980"),a("OutboundLink")],1),t._v(")。如此一来，能够校正光谱并将光谱转变到太阳质心参考系 (在菜单栏中的 "),a("code",[t._v("Operations - Correct - Barycentric velocity")]),t._v(")。")]),t._v(" "),a("p",[t._v("对于测定重心速度来说，知道恒星观测的日期/时间以及恒星的坐标 (RA 和 DEC，即赤经和赤纬，历元为 J2000.0) 是很有必要的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_barycentric_vel.png",alt:"重心速度测定"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_correction.png",alt:"速度校正"}})]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("h2",{attrs:{id:"_3-2-测定径向-重心速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-测定径向-重心速度"}},[t._v("#")]),t._v(" 3.2.测定径向/重心速度")]),t._v(" "),a("p",[t._v("速度轮廓曲线 (velocity profile) 的测定与 3 个不同的参考相关：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原子数据 (Atomic data)：考虑到由于地球轨道的重心速度已经被校正，原子数据对于测定一颗恒星的径向速度是十分有帮助的。")])]),t._v(" "),a("li",[a("p",[t._v("大气吸收线 (Telluric lines)：如果已经用重心速度校正了一条给定的光谱，那么大气吸收线可以用于识别或是评估大气吸收线的位置；如果没有校正，那么速度的输出值会是 0)。")])]),t._v(" "),a("li",[a("p",[t._v("模板 (Template)：任何加载的光谱或是合成的光谱都可以用于测定相对径向速度。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_atomic_lines.png",alt:"原子线"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_telluric_lines.png",alt:"大气吸收线"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_template.png",alt:"模板"}})]),t._v(" "),a("p",[t._v("速度轮廓曲线的生成使用了 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/2002A&A...388..632P",target:"_blank",rel:"noopener noreferrer"}},[t._v("cross-match correlation 算法"),a("OutboundLink")],1),t._v("，该算法对光谱流量 "),a("code",[t._v("f")]),t._v(" 和一个模板函数 "),a("code",[t._v("p")]),t._v(" 的乘积进行求和。")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-munder",{attrs:{space:"4"}},[a("mjx-row",[a("mjx-base",{staticStyle:{"padding-left":"0.048em"}},[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"n"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"s"}})],1)],1)],1)],1)],1),a("mjx-munder",{attrs:{space:"2"}},[a("mjx-row",[a("mjx-base",[a("mjx-mo",{staticClass:"mjx-lop"},[a("mjx-c",{attrs:{c:"2211"}})],1)],1)],1),a("mjx-row",[a("mjx-under",{staticStyle:{"padding-top":"0.167em","padding-left":"0.22em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1)],1)],1)],1)],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"22C5"}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"u"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1)],1),a("p"),t._v(" "),a("ol",[a("li",[a("p",[t._v("计算 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v("，其中 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"p"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"x"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:","}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"2"}},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" 以固定的速度步长从低到高地变化；")],1)]),t._v(" "),a("li",[a("p",[t._v("归一化 (Normalize) "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"C"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"("}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:")"}})],1)],1)],1),t._v(" 。")],1)])]),t._v(" "),a("p",[t._v("🐛 The "),a("code",[t._v("p")]),t._v(" function represents the fraction of the line of a template spectrum (which depends on the spectral type of the star) that falls on a given pixel at a given velocity.")]),t._v(" "),a("p",[t._v("尽管利用 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/2007AJ....134.1843A",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关定理 correlation theorem"),a("OutboundLink")],1),t._v(" 可以在傅里叶空间中计算互相关 (cross-correlation)，但一旦光谱的波长范围很大，与正常的互相关相比，计算上会花费更多的时间。")]),t._v(" "),a("p",[t._v("iSpec 包含了一个内置的模板（可以在 "),a("code",[t._v("input/spectra/synthetic/")]),t._v(" 路径中找到），该模板对应着一条恒星的合成光谱。恒星的参数是 "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"T"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"f"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"5"}}),a("mjx-c",{attrs:{c:"7"}}),a("mjx-c",{attrs:{c:"7"}}),a("mjx-c",{attrs:{c:"7"}}),a("mjx-c",{attrs:{c:"."}}),a("mjx-c",{attrs:{c:"0"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"K"}})],1)],1)],1),t._v(", "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"g"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"4"}}),a("mjx-c",{attrs:{c:"."}}),a("mjx-c",{attrs:{c:"4"}}),a("mjx-c",{attrs:{c:"4"}})],1)],1)],1),t._v(", "),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"["}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"F"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"/"}})],1)],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"H"}})],1),a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"]"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mn",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"."}}),a("mjx-c",{attrs:{c:"0"}}),a("mjx-c",{attrs:{c:"2"}})],1)],1)],1),t._v("   (太阳类型)，使用了 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/1994AJ....107..742G",target:"_blank",rel:"noopener noreferrer"}},[t._v("SPECTRUM"),a("OutboundLink")],1),t._v("，从 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/2011BaltA..20..503K",target:"_blank",rel:"noopener noreferrer"}},[t._v("VALD database"),a("OutboundLink")],1),t._v(" (350 - 11000 nm) 中抽取的原子谱线数据，以及 MARCS 大气模型来生成光谱。")],1),t._v(" "),a("p",[t._v("🐛")]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("h2",{attrs:{id:"_3-3-校正径向-重心速度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-校正径向-重心速度"}},[t._v("#")]),t._v(" 3.3.校正径向/重心速度")]),t._v(" "),a("p",[t._v("如果使用菜单栏中的 "),a("code",[t._v("Operations - Correct velocity relative to...")]),t._v(" 选项测定了一个速度（或是自定义了一个速度），将会应用下面的公式对光谱和区域进行移动:")]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-msub",[a("mjx-mi",{staticClass:"mjx-i",attrs:{noIC:"true"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-script",{staticStyle:{"vertical-align":"-0.15em"}},[a("mjx-TeXAtom",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"r"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"d"}})],1)],1)],1)],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mi",{staticClass:"mjx-i",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"3BB"}})],1),a("mjx-msqrt",[a("mjx-sqrt",{staticClass:" mjx-tall"},[a("mjx-surd",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-stretchy-v",{staticStyle:{height:"3.307em","vertical-align":"-1.288em"},attrs:{c:"221A"}},[a("mjx-beg",[a("mjx-c")],1),a("mjx-ext",[a("mjx-c")],1),a("mjx-end",[a("mjx-c")],1),a("mjx-mark")],1)],1)],1),a("mjx-box",{staticStyle:{"padding-top":"0.17em"}},[a("mjx-mfrac",[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mfrac",{attrs:{space:"3"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mrow",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1)],1)],1)],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mrow",[a("mjx-mn",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"1"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"3"}},[a("mjx-c",{attrs:{c:"2212"}})],1),a("mjx-mfrac",{attrs:{space:"3"}},[a("mjx-frac",[a("mjx-num",[a("mjx-nstrut"),a("mjx-mrow",{attrs:{size:"s"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"v"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"e"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"l"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"o"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"i"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"t"}})],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"y"}})],1)],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line"),a("mjx-row",[a("mjx-den",[a("mjx-dstrut"),a("mjx-mi",{staticClass:"mjx-i",attrs:{size:"s"}},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("其中，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"c"}})],1)],1)],1),t._v(" 是光在真空中的速度，"),a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML"}},[a("mjx-math",{staticClass:" MJX-TEX"},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3BB"}})],1)],1)],1),t._v(" 是原始波长。")],1),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("h2",{attrs:{id:"_3-4-确定光谱双星"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-确定光谱双星"}},[t._v("#")]),t._v(" 3.4.确定光谱双星")]),t._v(" "),a("p",[t._v("与原子线数据相关的测定速度的函数可以用于确定光谱双星。")]),t._v(" "),a("p",[t._v("在下面的情况中，有两个不同的峰值：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/HD005516A_Elodie_correlation.png",alt:"双峰"}})]),t._v(" "),a("p",[t._v("iSpec 以 "),a("a",{attrs:{href:"http://adsabs.harvard.edu/abs/2004sf2a.conf..547M",target:"_blank",rel:"noopener noreferrer"}},[t._v("ELODIE"),a("OutboundLink")],1),t._v(" 观测到的 "),a("em",[t._v("HD005516A")]),t._v(" 光谱作为例子，该条光谱在 "),a("code",[t._v("input/spectra/binaries/")]),t._v(" 路径下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_profile_binary.png",alt:"双星速度轮廓曲线"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Date 4.10.1996 / RA 00 57 12.40 / DEC +23 25 03.54")])]),t._v(" "),a("li",[a("p",[t._v("ELODIE:")]),t._v(" "),a("ul",[a("li",[t._v("RV component 1: -25.49 km/s")]),t._v(" "),a("li",[t._v("RV component 2: 4.72 km/s")])])]),t._v(" "),a("li",[a("p",[t._v("iSpec results with parameters by default:")]),t._v(" "),a("ul",[a("li",[t._v("Barycentric vel: 5.15 km/s")]),t._v(" "),a("li",[t._v("RV component 1: -30.16 km/s")]),t._v(" "),a("li",[t._v("RV component 2: -0.04 km/s")]),t._v(" "),a("li",[t._v("RV corrected component 1: -25.01 km/s")]),t._v(" "),a("li",[t._v("RV corrected component 2: 5.11 km/s")])])])]),t._v(" "),a("p",[t._v("iSpec 将会尝试自动检测速度轮廓曲线中的离群点峰值，以便检测光谱双星并且用多个 Gaussian/Voigt 轮廓曲线去拟合。")])])}),[],!1,null,null,null);s.default=c.exports}}]);