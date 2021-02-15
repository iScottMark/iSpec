(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{378:function(e,t,_){"use strict";_.r(t);var v=_(25),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"_8-其他操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-其他操作"}},[e._v("#")]),e._v(" 8.其他操作")]),e._v(" "),_("h2",{attrs:{id:"_8-1-缩小波长范围"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-缩小波长范围"}},[e._v("#")]),e._v(" 8.1.缩小波长范围")]),e._v(" "),_("p",[e._v("用户可以在菜单栏中选择 "),_("code",[e._v("Operations - Wavelength range reduction")]),e._v(" 来对当前激活状态下的光谱进行裁剪，并且用户可指定起止波长或是直接使用定义好的 "),_("code",[e._v("segments")]),e._v(" / "),_("code",[e._v("line")]),e._v(" 区域。用户也可以选择将被剪除的那部分流量用 0 值代替。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_wavelength_range_reduction.png",alt:"wavelength range reduction"}})]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("h2",{attrs:{id:"_8-2-应用数学表达式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-应用数学表达式"}},[e._v("#")]),e._v(" 8.2.应用数学表达式")]),e._v(" "),_("p",[e._v("用户可以通过应用数学表达式来修改激活状态下的光谱的波长、流量和误差值。数学表达式中可以是以下表列出的函数的任意组合： （⚡️ 对表格中的说明翻译）")]),e._v(" "),_("blockquote",[_("p",[e._v("译者注：这些数学表达式调用的就是 Python 中 "),_("code",[e._v("numpy")]),e._v(" 下的各个数学计算模块。")])]),e._v(" "),_("table",{staticStyle:{"word-break":"break-all","word-wrap":"break-all",width:"100%"}},[_("tr",[_("th",{staticStyle:{width:"40%"}},[e._v("表达式")]),e._v(" "),_("th",[e._v("说明")])]),e._v(" "),_("tr",[_("td",[e._v("sin(x)")]),e._v(" "),_("td",[e._v("Trigonometric sine, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("cos(x)")]),e._v(" "),_("td",[e._v("Cosine elementwise")])]),e._v(" "),_("tr",[_("td",[e._v("tan(x)")]),e._v(" "),_("td",[e._v("Compute tangent element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("arcsin(x)")]),e._v(" "),_("td",[e._v("Inverse sine, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("arccos(x)")]),e._v(" "),_("td",[e._v("Trigonometric inverse cosine, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("arctan(x)")]),e._v(" "),_("td",[e._v("Trigonometric inverse tangent, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("arctan2(x1, x2)")]),e._v(" "),_("td",[e._v("Element-wise arc tangent of x1/x2 choosing the quadrant correctly")])]),e._v(" "),_("tr",[_("td",[e._v("sinh(x)")]),e._v(" "),_("td",[e._v("Hyperbolic sine, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("cosh(x)")]),e._v(" "),_("td",[e._v("Hyperbolic cosine, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("tanh(x)")]),e._v(" "),_("td",[e._v("Compute hyperbolic tangent element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("arcsinh(x)")]),e._v(" "),_("td",[e._v("Inverse hyperbolic sine elementwise")])]),e._v(" "),_("tr",[_("td",[e._v("arccosh(x)")]),e._v(" "),_("td",[e._v("Inverse hyperbolic cosine, elementwise")])]),e._v(" "),_("tr",[_("td",[e._v("arctanh(x)")]),e._v(" "),_("td",[e._v("Inverse hyperbolic tangent elementwise")])]),e._v(" "),_("tr",[_("td",[e._v("around(a[, decimals, out])")]),e._v(" "),_("td",[e._v("Evenly round to the given number of decimals")])]),e._v(" "),_("tr",[_("td",[e._v("floor(x)")]),e._v(" "),_("td",[e._v("Return the floor of the input, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("ceil(x)")]),e._v(" "),_("td",[e._v("Return the ceiling of the input, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("exp(x)")]),e._v(" "),_("td",[e._v("Calculate the exponential of all elements in the input array")])]),e._v(" "),_("tr",[_("td",[e._v("log(x)")]),e._v(" "),_("td",[e._v("Natural logarithm, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("log10(x)")]),e._v(" "),_("td",[e._v("Return the base 10 logarithm of the input array, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("log2(x)")]),e._v(" "),_("td",[e._v("Base-2 logarithm of x")])]),e._v(" "),_("tr",[_("td",[e._v("sqrt(x)")]),e._v(" "),_("td",[e._v("Return the positive square-root of an array, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("absolute(x)")]),e._v(" "),_("td",[e._v("Compute the absolute values elementwise")])]),e._v(" "),_("tr",[_("td",[e._v("add(x1, x2)")]),e._v(" "),_("td",[e._v("Add arguments element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("multiply(x1, x2)")]),e._v(" "),_("td",[e._v("Multiply arguments element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("divide(x1, x2)")]),e._v(" "),_("td",[e._v("Divide arguments element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("power(x1, x2)")]),e._v(" "),_("td",[e._v("First array elements raised to powers from second array, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("subtract(x1, x2)")]),e._v(" "),_("td",[e._v("Subtract arguments, element-wise")])]),e._v(" "),_("tr",[_("td",[e._v("mod(x1, x2)")]),e._v(" "),_("td",[e._v("Return element-wise remainder of division")])])]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_apply_mathematical_operation.png",alt:"apply mathematical expression"}})]),e._v(" "),_("p",[e._v("该功能可以在菜单栏 "),_("code",[e._v("Operations - Apply mathematical expression")]),e._v(" 中找到。如上图中，当前 3 个值的变量名分别为 "),_("code",[e._v("waveobs")]),e._v(", "),_("code",[e._v("flux")]),e._v(" 和 "),_("code",[e._v("err")]),e._v("，我们可以将这 3 个变量名用于数学表达式中，对数据进行操作。")]),e._v(" "),_("p",[e._v("举几个例子：")]),e._v(" "),_("ul",[_("li",[e._v("通过将波长除以 10 将波长从单位 "),_("code",[e._v("Å")]),e._v(" 转换为 "),_("code",[e._v("nm")]),e._v("："),_("code",[e._v("Wavelengths = waveobs / 10")])]),e._v(" "),_("li",[e._v("改变流量的尺度："),_("code",[e._v("Fluxes = power(flux, 2)")])]),e._v(" "),_("li",[e._v("通过使用相对于流量的百分比来修改误差："),_("code",[e._v("Errors = err * 0.0 + 1.0")])]),e._v(" "),_("li",[e._v("将误差值置为一个常数："),_("code",[e._v("Errors = err * 0.0 + 1.0")])])]),e._v(" "),_("p",[e._v("通过数学表达式运算的结果应为与原始光谱具有相同数量元素的数组，即运算前后的数组长度应该保持一致。")]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("h2",{attrs:{id:"_8-3-清洗流量和误差"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-清洗流量和误差"}},[e._v("#")]),e._v(" 8.3.清洗流量和误差")]),e._v(" "),_("p",[e._v("为了过滤掉较差的测量，用户可以在菜单栏中选择 "),_("code",[e._v("Operations - Clean fluxes and errors")]),e._v(" 来清洗当前激活状态下的光谱。用户必须指定流量和误差的上下值。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_clean_fluxes_and_errors.png",alt:"clean fluxes and errors"}})]),e._v(" "),_("p",[e._v("此外，可以考虑使用一个限定区域内的平均和标准偏差值（介于流量上下值之间）来进行清洗。尽管因为该操作会删除发射线而需谨慎使用，但它对于移除宇宙线残留也很有用。")]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("h2",{attrs:{id:"_8-4-清洗大气吸收线区域"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-清洗大气吸收线区域"}},[e._v("#")]),e._v(" 8.4.清洗大气吸收线区域")]),e._v(" "),_("p",[e._v("通过菜单栏中的 "),_("code",[e._v("Operations - Clean telluric regions")]),e._v("，用户可以清洗那些可能会受大气吸收线影响的光谱区域。为达到该目的，以下的参数是必需的：光谱的径向速度（建议事先校正径向速度，这样径向速度就可以设为 0）、要考虑的大气吸收线的最小深度、以及需要清洗的大气吸收线周围的区域。用户可以选择完全移除这部分流量，或是用连续谱而非 0 值来代替它们。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_clean_telluric_regions.png",alt:"clean telluric regions"}})]),e._v(" "),_("p",[e._v("建议采用默认下的 +/- 30 km/s，因为它代表了典型的大气吸收线可能的最大速度范围。例如，假设一颗假想的恒星相对于太阳的径向速度为 0，那么从地球上观察时，由于地球绕着太阳旋转，因而有可能测得径向速度。对于这颗假想的恒星，所测得的每一个径向速度通常会在 -30 至 +30 km/s 之间，具体取决于观测的天区。")]),e._v(" "),_("p",[e._v("当光谱将作为测量另一条光谱的径向速度的模板时，该项功能会很有用。从模板中清洗所有这些流量，可以减少待测光谱中潜在的大气吸收线的影响。")]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("h2",{attrs:{id:"_8-5-重采样光谱"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-重采样光谱"}},[e._v("#")]),e._v(" 8.5.重采样光谱")]),e._v(" "),_("p",[e._v("通过选择菜单栏中的 "),_("code",[e._v("Operations - Resample spectrum")]),e._v("，可以在一个波长范围内以固定的步长均匀地重新采样当前激活状态下的光谱。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_resampling.png",alt:"resampling"}})]),e._v(" "),_("p",[e._v("插值方法可以是线性的，可以是贝塞尔方法（每个插值点考虑 4 个点，其结果往往比线性插值更平滑，但"),_("strong",[e._v("不建议")]),e._v("这样做），或者是样条插值（它可能有助于平滑光谱，但同样"),_("strong",[e._v("不建议")]),e._v("）。")]),e._v(" "),_("p",[_("br"),_("br")]),e._v(" "),_("h2",{attrs:{id:"_8-6-合并光谱"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-6-合并光谱"}},[e._v("#")]),e._v(" 8.6.合并光谱")]),e._v(" "),_("p",[e._v("在菜单栏 "),_("code",[e._v("Edit - Combine all spectra")]),e._v(" 中，通过使用流量值的均值/中位数，或是减去（激活状态光谱减去其他光谱）、加上、除以（激活状态光谱除以其他光谱）流量值，可以合并所有打开的光谱。建议在这样做之前，对齐所有光谱（比如径向速度校正），并且它们应具有相同的分辨率。")]),e._v(" "),_("p",[_("img",{attrs:{src:"https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/10.operations/iSpec_combine.png",alt:"combine"}})]),e._v(" "),_("p",[e._v("这一过程执行以下操作：")]),e._v(" "),_("ul",[_("li",[e._v("构建一个共同的波长坐标，该坐标取决于用户指定的波长范围和步长；")]),e._v(" "),_("li",[e._v("通过在共同的波长坐标的每个点上插值流量来使所有光谱均匀化。⚡️ 值得注意的是，绘图区中所看到的光谱并没有被均匀化的版本所取代，它们只是在内部中由 "),_("code",[e._v("combine")]),e._v(" 函数所使用；")]),e._v(" "),_("li",[e._v("合并均匀化后的光谱，并呈现结果。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);