(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{374:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_4-流量误差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-流量误差"}},[t._v("#")]),t._v(" 4.流量误差")]),t._v(" "),a("h2",{attrs:{id:"_4-1-信噪比估计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-信噪比估计"}},[t._v("#")]),t._v(" 4.1.信噪比估计")]),t._v(" "),a("p",[t._v("通过菜单中的 "),a("code",[t._v("Parameters - Estimate SNR")]),t._v("，iSpec 提供了 2 种方法来估计光谱的信噪比 (S/N)。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_estimate_SNR.png",alt:"信噪比估计"}})]),t._v(" "),a("ul",[a("li",[a("p",[t._v("通过误差：用流量除以光谱提供的误差可以计算出 S/N。如果提供误差，这是计算 S/N 最好的方法。")])]),t._v(" "),a("li",[a("p",[t._v("通过流量：检查整条光谱，重新采样以确保步长均匀，并进行 ⚡️ 10 x 10 的测量（该值可由用户修改）。对于每次测量都计算 S/N，最终取 S/N 的平均值作为整条光谱的 S/N。将信噪比 (S/N)  定义为一次测量的均值与标准差的比值：")])])]),t._v(" "),a("p"),a("p",[a("mjx-container",{staticClass:"MathJax",attrs:{jax:"CHTML",display:"true"}},[a("mjx-math",{staticClass:" MJX-TEX",attrs:{display:"true"}},[a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"S"}})],1),a("mjx-TeXAtom",[a("mjx-mo",{staticClass:"mjx-n"},[a("mjx-c",{attrs:{c:"/"}})],1)],1),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"N"}})],1),a("mjx-mo",{staticClass:"mjx-n",attrs:{space:"4"}},[a("mjx-c",{attrs:{c:"="}})],1),a("mjx-mfrac",{attrs:{space:"4"}},[a("mjx-frac",{attrs:{type:"d"}},[a("mjx-num",[a("mjx-nstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3BC"}})],1)],1),a("mjx-dbox",[a("mjx-dtable",[a("mjx-line",{attrs:{type:"d"}}),a("mjx-row",[a("mjx-den",[a("mjx-dstrut",{attrs:{type:"d"}}),a("mjx-mi",{staticClass:"mjx-i"},[a("mjx-c",{attrs:{c:"3C3"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),a("p"),t._v(" "),a("p",[t._v("基于误差（如果误差包含在原始的观测中）的估计远比基于流量的估计更加可靠，因为后者会受到恒星类型的影响。")]),t._v(" "),a("p",[t._v("⚡️ S/N estimations from fluxes should only be considered as relative values when comparing two spectra of similar spectral types where both S/N have been estimated similarly.")]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("h2",{attrs:{id:"_4-2-误差估计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-误差估计"}},[t._v("#")]),t._v(" 4.2.误差估计")]),t._v(" "),a("p",[t._v("给定一个 S/N，iSpec 可以计算与每个流量测量相关的误差（在这些误差尚未由原始观测提供的情况下）。这项功能在菜单栏中的 "),a("code",[t._v("Operations - Estimate errors based on S/N")]),t._v(" 可以找到。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_estimate_errors.png",alt:"误差估计"}})]),t._v(" "),a("p",[t._v("一旦执行这项操作，可以通过 "),a("code",[t._v("Spectra - Show errors in plot")]),t._v(" 画出误差。")]),t._v(" "),a("p",[a("br"),a("br")]),t._v(" "),a("h2",{attrs:{id:"_4-3-添加光谱噪声"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-添加光谱噪声"}},[t._v("#")]),t._v(" 4.3.添加光谱噪声")]),t._v(" "),a("p",[t._v("通过使用菜单中的 "),a("code",[t._v("Operations - Add noise to spectrum fluxes")]),t._v("，可以人为地往光谱中添加泊松/高斯噪声（这对没有用噪声进行计算的合成光谱相当有用）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_add_noise.png",alt:"添加噪声"}})])])}),[],!1,null,null,null);s.default=r.exports}}]);