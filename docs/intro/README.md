# 简介

iSpec 是一个用于光谱分析的开源框架（[Blanco-Cuaresma et al. 2014a](https://ui.adsabs.harvard.edu/abs/2014A%26A...569A.111B/abstract), [Blanco-Cuaresma 2019](https://ui.adsabs.harvard.edu/abs/2019MNRAS.486.2075B/abstract)）。它适用于建立诸如 Gaia FGK 基准恒星库一样的光谱库（[Blanco-Cuaresma et al 2014b](https://ui.adsabs.harvard.edu/abs/2014A%26A...566A..98B/abstract)），以及用于确定一些如有效温度、表面重力加速度、金属丰度和单个丰度等的天体物理参数。iSpec 结合了几个辐射转移代码用以生成合成光谱，以及从等值宽度中获取丰度。此外，iSpec 还可以从预先计算好的网格中进行光谱的插值。

该框架提供了可以从 Python3 脚本中使用的 API，它也包含了一个符合 [SAMP](../documentation/1.html#_1-6-与其他-samp-应用的互用) 协议的可视化界面，可以与其他天文应用软件协同工作。这些应用软件有 [TOPCAT](http://www.star.bris.ac.uk/~mbt/topcat/), [VOSpec](https://www.cosmos.esa.int/web/esdc/vospec) (:bug:, 英文文档的链接已经失效), 以及使用间接方式访问 [Virtual Observatory](https://www.ivoa.net/) 的 [splat](http://star-www.dur.ac.uk/~pdraper/splat/splat.html)

用户可以从[此链接](http://www.blancocuaresma.com/s/)获取 iSpec。除了 iSpec 自身使用到的辐射转移代码（如下列出），iSpec 在 [ GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.html) (开源软件许可) 条例下进行分发。

- [SPECTRUM](http://www.appstate.edu/~grayro/spectrum/spectrum.html) R. O. Gray
- [Turbospectrum](https://github.com/bertrandplez/Turbospectrum2019) Bertrand Plez (:bug:, 英文文档的链接已经失效)
- [SME](https://www.stsci.edu/~valenti/sme.html) Valenti & Piskunov
- [MOOG](http://www.as.utexas.edu/~chris/moog.html) Chris Sneden
- [Synthe/WIDTH9](http://atmos.obspm.fr/) Kurucz/Atmos

本文档描述了 iSpec 的安装步骤，同时概述了 iSpec 的功能。
