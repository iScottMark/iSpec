# iSpec 使用手册

[欢迎在 Issues 提出修改意见](https://github.com/iScottMark/iSpec/issues)

## 1.基本操作

### 1.1.启动 iSpec

* 双击 `iSpec` 目录下的 `iSpec.command` 启动

* 终端启动

```shell
./iSpec.command
```

### 1.2.打开光谱

共有 2 种方式可以打开光谱

**方式 1：**

通过点击菜单栏中的 `File - Open spectra`，iSpec 可以同时打开多个光谱文件。

但同一时刻，**只有一条光谱**是处于激活 (Active) 状态的，该条光谱在图例里有一个`[A]` 的标记（如下图，蓝色的光谱处于激活状态）。

![iSpec 操作界面](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/01.basics/iSpec_multiple_spectra_zoom.png)

**方式 2：**

通过命令行的方式

```shell
./iSpec.command input/spectra/examples/NARVAL_Sun_Vesta-1.txt.gz
```

**注意：**

* 像确定 RV(径向速度) 等的一些操作只能针对激活状态的光谱执行；

* 用户可通过点击菜单栏中的 `Spectra - Name of the spectrum` 来选择激活某条光谱；

* 如果光谱被修改了但未被保存，iSpec 会在关闭前提醒用户。

此外，通过点击菜单栏中的 `Spectra - Show errors in plot`，流量误差 (flux errors) 将被绘制出来（如下图），绘制的曲线表现为分别在光谱上下的 2 条虚线，它们分别对应着流量的 +/- 误差。

![绘制误差](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/01.basics/iSpec_show_errors.png)

### 1.3.光谱文件格式

iSpec 支持 2 种文件格式的读取：

* 标准的 FITS 文件
* 以 *tab* 分隔的纯文本文件

#### 标准的 FITS 文件

FITS 文件需满足：

* 在头文件 (header) 里有包含 `CDELT/CRVAL` 值的 1-D FITS 文件；

* 在 primary extension 里包含一张表，该表有 `wavelength`, `fluxes` 以及不是必需的 `errors`。

满足上述 2 个条件的 FITS 文件，如果没有在头文件 (header) 中指明 `CUNIT` 值，iSpec 会把单位 `Å` 转换为单位 `nm`。

#### 以 *tab* 分隔的纯文本文件

纯文本文件的写法如下：

```txt
waveobs       flux          err
370.000000000 1.26095742505 1.53596736433
370.001897436 1.22468868618 1.55692475754
370.003794872 1.18323884263 1.47304952231
370.005692308 1.16766911881 1.49393329036
```

纯文本文件需满足：

* 每列数据均以 *tab* 作为分隔的界定符号;

* 有 3 列数据是必需的，它们分别是 波长 `waveobs`, 流量 `flux` 和 误差 `err`，且这 3 个列名必须在整个文件的头部；

* 波长 `waveobs` 默认单位仍为 `nm`，如果不是，用户可以单击菜单栏中的 `Operations - Apply mathematical operation`，在弹出的对话框中输入数学表达式来将波长转换到 `nm` 单位。比如， `waveobs` 的单位是 `Å`，则应该在对话框中输入 `waveobs/10`。

**注意：**

如果误差未知，误差 `err` 这一列的值可以全部设定为 0。

#### 压缩文件

为了节省存储空间，iSpec 支持解 / 压缩上述 2 种文件（FITS 文件和纯文本文件）
的 `*.gzip` 压缩格式。

换而言之，iSpec 能够直接打开 `*.gzip` 格式的压缩光谱；同时也能以 `*.gzip` 格式保存修改后的光谱。

### 1.4.探索光谱

下图的按钮是从 `matplotlib` 中移植过来的，可对光谱进行缩放、平移等的一些操作，故不再赘述。

![按钮功能](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/01.basics/iSpec_zoom_pan.png)

### 1.5.保存图像、光谱和区域

通过菜单栏中的 `File` 选项，用户可以以 PNG 格式保存当前的画图、激活状态的光谱或是连续谱、线以及分割区（*？下节中会讲到*）。

值得注意的是，编辑窗口的标题处会显示 `segments`, `lines`, `continuum` 或者是 `<name of spectrum>` 来提醒用户这些内容已经被修改但仍未被保存。

### 1.6.与其他 SAMP 应用的互用

> 译者注：SAMP -- Simple Application Messaging Protocol，简单应用通信协议，比如天文上常用的 `TOPCAT` 等工具均符合 SAMP 协议。

iSpec 是一个 SAMP 应用，因此它能够发送光谱给其他应用或是接收来自其他应用的光谱，这些应用可以是运行在同一台机器上的天文程序， iSpec 总共支持 3 个天文程序之间的互用：

* [TOPCAT](http://www.star.bris.ac.uk/~mbt/topcat/)
* [VOSpec](http://www.sciops.esa.int/index.php?project=ESAVO&page=vospec)
* [splat](http://star-www.dur.ac.uk/~pdraper/splat/splat.html)

为了能够打开互用这项功能，用户必须运行 `SAMP hub`，最简单的方法就是安装并运行 `TOPCAT`，程序会自动启用 `SAMP hub`。

![SAMP hub](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/01.basics/SAMP_hub.png)

通过 ***TODO*** :zap:

---

## 2.区域

区域 (region) 用来分离出不同的光谱范围，以便对光谱进行某些特定的操作。

![区域](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/02.regions/iSpec_actions.png)

总共有 3 种不同类型的区域：

* `Continuum`: 用来拟合（伪）连续谱（而非使用全谱）。

* `Line masks`: 用来做高斯拟合（比如测量等值宽度 EW），以及测定大气参数/丰度。在测定大气参数/丰度时，$\chi^2$ 最小化的方法**只会用于 `line masks` 范围内**的光谱流量。

* `Segments`: 主要用来测定大气参数/丰度。

  * 同样，**只有在 `segments` 范围内**， 合成光谱才会被计算，因此 `segments` 需要囊括所有的 `line masks` （这些 `line masks` 被分组至一个或是多个 `segments` 中）。

  * `segments` 能够节省计算时间，避免了计算整条合成光谱，**并且它们要比 `line masks` 更大**（例如，一条有着 `line mask` 的线，该条线处于像接近 H-$\alpha$ 这样的混合区域，那么 `segments` 应该足够大以至于能够覆盖这部分混合区域，否则有可能无法很好地重现该范围内光谱的合成）。

用户可以在 iSpce 中选择对应的动作（Action）和元素（Element），用于 `创建`、`修改`、`删除` 某种类型的区域（如上图）。

将不同的动作（Action）和元素（Element）进行组合，会产生不同的操作效果，为了更加直观地表述，以表格的形式加以解释。

<div>
<table style="word-break:break-all; word-wrap:break-all; width:100%">
  <tr>
    <th style="width:20%"></th>
    <th style="width:20%">Stats</th>
    <th style="width:20%">Create</th> 
    <th style="width:20%">Modify</th>
    <th style="width:20%">Remove</th>
  </tr>
  <tr>
    <td><b>Continum/<br>Lines/<br>Segments</b></td>
    <td>左键单击一个区域，其统计信息将显示在窗口的底部。</td>
    <td>
      左键单击空白处会新建一个区域。如果新建的是一个<i>line</i> 区域，则会弹出一个对话框，提示用户在文本框中输入新 line 区域的 note。
    </td>
    <td>按住左键并拖动鼠标则修改区域的左边界，按住右键并拖动鼠标则修改区域的右边界。</td>
    <td>单击左键则可删除区域。</td>
  </tr>
  <tr>
    <td><b>Line marks</b></td>
    <td><无></td>
    <td>左键单击 <i>line</i> 区域，会弹出对话框，提示用户输入该区域的 note。</td>
    <td>左键单击 <i>line</i> 区域，修改该 line 区域的 peak mark；右键单击 line 区域,增加/修改 note。</td>
    <td>左键单击 <i>line</i> 区域，删除该区域及其 note。</td>
  </tr>
</table>
</div>

**注意：**

* 进行上述操作时，光标不能处于缩放或是平移模式 (Zoom/Pan)。

* 用户不能创建不符合逻辑或是不符合要求的重叠区域，比如相互重叠的 `line masks` 区域，以及没有 `line masks` 的 `segments` 区域。

### 2.1.Region 文件

上述中所创建的区域可以通过菜单中的 `File` 来保存和读取。一旦 `Region` 文件被加载，通过菜单栏中的 `Operations - Clear - Continuum/Line masks/Segments`，它们也完全可以从图像中被删除。如果某些区域已经被修改了但未被保存，iSpce 将会在清除它们之前要求用户确认。

iSpec 也可以从命令行中直接打开区域和光谱：

```bash
./iSpec.command --continuum=input/regions/fe_lines_continuum.txt \
    --lines=input/regions/fe_lines.txt \
    --segments=input/regions/fe_lines_segments.txt \
    input/spectra/examples/NARVAL_Sun_Vesta-1.txt.gz
```

#### 2.1.1.`Continuum` 区域的文件格式

* `Continuum` 区域文件必须是以 *tab* 为列分隔符的纯文本文件;

* 需要包含 2 列 —— `wave_base` 和 `wave_top`（第一行必须包含这两个头名），它们表示每个区域的起止（每行一组）。

举例：

```txt
wave_base       wave_top
480.6000        480.6100
481.1570        481.1670
491.2240        491.2260
492.5800        492.5990
```

此外，`wave_base` 总是小于 `wave_top`，否则 iSpec 无法处理该文件。

#### 2.1.2.`Line` 区域的文件格式

* `Line` 区域文件必须是以 *tab* 为列分隔符的纯文本文件;

* 需要包含 4 列 —— `wave_peak`, `wave_base`, `wave_top`, `note`（第一行必须包含这两个头名）。它们分别表示：

  * `wave_peak`: 该条线的峰值
  * `wave_base`: 该条线的开始
  * `wave_top`: 该条线的结束
  * `note`: 该条线的一条 note，可以是任何的字符串

举例：

```txt
wave_peak       wave_base       wave_top        note
480.8148        480.7970        480.8330        Fe 1
496.2572        496.2400        496.2820        Fe 1
499.2785        499.2610        499.2950        
505.8498        505.8348        505.8660        Fe 1
```

note 可以留空，但在它之前的 *tab* 分隔符必须保证存在  

关于波长值，`wave_base` 应该总是小于 `wave_top`，且 `wave_peak` 应该总是介于 `wave_base` 和 `wave_top` 之间；否则，iSpec 无法处理该文件。

#### 2.1.3.`Segment` 区域的文件格式

* `Segment` 区域文件必须是以 *tab* 为列分隔符的纯文本文件;

* 需要包含 2 列 —— `wave_base` 和 `wave_top`（第一行必须包含这两个头名），它们表示每个区域的起止（每行一组）。

举例：

```txt
wave_base       wave_top
480.6000        480.6100
481.1570        481.1670
491.2240        491.2260
492.5800        492.5990
```

`wave_base` 应该总是小于 `wave_top`，否则 iSpec 无法处理该文件。

### 2.2.自动确定 `continuum` 区域

通过切片式的分析光谱，可以自动地找到 `continuum` 区域。如果满足下列条件，被选中的光谱范围将会被当作 `continuum`:

* 区域的大小至少和用户所指定的大小一样大；

* 用户指定的 *标准偏差 (standard deviation)* 小于一个给定的最大值；

* 平均流量高于或者低于*连续谱的拟合 (continuum fit)*，但不能超过一个给定的百分比。

依据不同的光谱类型，调整切片大小以及标准偏差以找到最佳的结果。

这项功能位于菜单栏中的 `Operations - Find continuum regions`，它可以应用在全谱上或是仅在所定义的 `segments` 之内。在这两种应用的情况下，**都需要一条事先拟合好的连续谱**。在计算之后，将会删除当前的 `continuum` 区域（前提是有的话）并且画出过程中所找到的这些区域。

![搜寻 continuum 区域](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/02.regions/iSpec_find_continuum_regions.png)


### 2.3.自动确定 `line masks`

通过菜单栏中的 `Operations - Find line masks`，iSpec 可以自动地找到 `line` 区域。可以在全谱之上或者仅在所定义的 `segments` 之内完成搜寻。在这两种情况下，**都需要一条事先拟合好的连续谱**。

![搜寻 line masks 区域](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/02.regions/iSpec_find_line_masks.png)

这一搜寻过程有以下步骤：

* 对光谱用两倍的分辨率进行平滑，搜寻平滑过的光谱的局部最大和最小点。

* 选择那些有着最小深度的 `line` 作为候选（1.0 表示相较于连续谱 `continuum` 的深度百分比为 100%）。

* 用高斯模型拟合这些作为候选的 `line`，然后丢弃那些拟合较差的 `line`。如果勾选了`Check derivatives before fitting`，将会检查第一和第二条候选 `line` 的 *:bug:derivatives*，以尝试界定出更佳的 `line` 的起止位置（对于合成光谱以及有着很高信噪比的光谱来说，效果会更棒）。

* 在由用户指定的 RV（径向速度） 下，用原子线表交叉匹配剩下的 `lines`。建议用户在这之前先对 RV 进行纠正，否则这里的 RV 将被当作 0。

* 选择由用户指定的与元素相关的 `line`（用逗号 `,` 或者空格 ` ` 来分隔这些元素，比如图中的 `Fe1, Fe2`）

* 在由用户指定的 RV（径向速度） 下，用大气吸收线表再次交叉匹配。同样，再次建议用户在这之前先对 RV 进行纠正。

* 如果用户勾选了 `Discard affected by telluric`，那么将丢弃可能会受大气吸收线影响的 `lines`。

在计算之后，将会删除当前的 `line` 区域（前提是有的话）并且画出过程中所找到的这些区域。

**注意：**

用原子线表进行交叉匹配的结果不总是 100% 的正确。因为会存在一条观测到的吸收线，然而对于该条吸收线，在原子线表里并没有其相关的信息；或者混合线中有着主要贡献的线并不是从原子线表里交叉匹配出来的那条线……等等其他情况。

对于大气参数或是丰度的测定，推荐用户选择那些在同类任务中已经有着正确工作表现的 `lines`，并非所有的 `lines` 都足够好到能获取参数。iSpec 包括了 *线的选择 (line selections)*，这一部分将在有关参数和丰度测定的小节中具体讨论。

### 2.4.调整 `line masks`

`line masks` 可以被 iSpec 自动地找到；或者对于一个不能够用线的形状很好地去拟合的恒星类型，`line masks` 也可以被人为地定义。iSpec 可以自动地调整先前已经定义好的 `line masks` 以匹配出一个更好的 `masks` 的起/止位置 :bug: to the particular form of the active spectrum.如果勾选了 `Check derivatives before fitting`，将会检查第一和第二条候选 `line` 的 *:bug:derivatives*，以尝试界定出更佳的 `line masks` 的起止位置（对于合成光谱以及有着很高信噪比的光谱来说，效果会更棒）。

![调整 line masks](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/02.regions/iSpec_adjust_line_masks.png)

为此，iSpec 通过查看线中心周围用户给定 *边距 (margin)* （以 nm 为单位）大小的窗口，来检查 `line` 的最佳极限在何处。

### 2.5.在 `line masks` 周围创建 `segments`

对于那些已经有一组定义好的 `line masks` 的用户，比如，出于要计算合成光谱或是获取大气参数的目的，会对在 `line masks` 周围创建 `segments` 感兴趣。iSpec 能够自动地完成这些目的 —— 用户只需指定他想要在每条 `line masks` 周围的 nm 数，iSpec 就会将在同一 `segment` 区域下的那些离得足够近的 `lines` 分至一组。

![创建 Segments](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/02.regions/iSpec_create_segments.png)

## 3.速度

### 3.1.计算重心速度 (:zap: Barycentric velocity)

iSpec 包含了一个计算朝向地球的地球速度的选项 (在菜单栏中的 `Parameters - Calculate barycentric velocity`， 该算法基于 [Stumpff 1980](http://adsabs.harvard.edu/abs/1980A&AS...41....1S))。如此一来，能够校正光谱并将光谱转变到太阳质心参考系 (在菜单栏中的 `Operations - Correct - Barycentric velocity`)。

对于测定重心速度来说，知道恒星观测的日期/时间以及恒星的坐标 (RA 和 DEC，即赤经和赤纬，历元为 J2000.0) 是很有必要的。

![重心速度测定](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_barycentric_vel.png)

![速度校正](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_correction.png)

### 3.2.测定径向/重心速度

速度轮廓曲线 (velocity profile) 的测定与 3 个不同的参考相关：

- 原子数据 (Atomic data)：考虑到由于地球轨道的重心速度已经被校正，原子数据对于测定一颗恒星的径向速度是十分有帮助的。

- 大气吸收线 (Telluric lines)：如果已经用重心速度校正了一条给定的光谱，那么大气吸收线可以用于识别或是评估大气吸收线的位置；如果没有校正，那么速度的输出值会是 0)。

- 模板 (Template)：任何加载的光谱或是合成的光谱都可以用于测定相对径向速度。

![原子线](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_atomic_lines.png)

![大气吸收线](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_telluric_lines.png)

![模板](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_determination_template.png)

速度轮廓曲线的生成使用了 [cross-match correlation 算法](http://adsabs.harvard.edu/abs/2002A&A...388..632P)，该算法对光谱流量 `f` 和一个模板函数 `p` 的乘积进行求和。

$$C(v) = \sum_{lines}\sum_{pix} p(pix, v) \cdot flux(pix)$$

1. 计算 $C(v)$，其中 $p(pix, v)$ 以固定的速度步长从低到高地变化；

2. 归一化 (Normalize) $C(v)$ 。

:bug: The `p` function represents the fraction of the line of a template spectrum (which depends on the spectral type of the star) that falls on a given pixel at a given velocity.

尽管利用 [相关定理 correlation theorem](http://adsabs.harvard.edu/abs/2007AJ....134.1843A) 可以在傅里叶空间中计算互相关 (cross-correlation)，但一旦光谱的波长范围很大，与正常的互相关相比，计算上会花费更多的时间。

iSpec 包含了一个内置的模板（可以在 `input/spectra/synthetic/` 路径中找到），该模板对应着一条恒星的合成光谱。恒星的参数是 $T_{eff} = 5777.0 K$, $log g = 4.44$, $[Fe/H] = 0.02$   (太阳类型)，使用了 [SPECTRUM](http://adsabs.harvard.edu/abs/1994AJ....107..742G)，从 [VALD database](http://adsabs.harvard.edu/abs/2011BaltA..20..503K) (350 - 11000 nm) 中抽取的原子谱线数据，以及 MARCS 大气模型来生成光谱。

:bug:

### 3.3.校正径向/重心速度

如果使用菜单栏中的 `Operations - Correct velocity relative to...` 选项测定了一个速度（或是自定义了一个速度），将会应用下面的公式对光谱和区域进行移动:

$$\lambda_{corrected} = \lambda \sqrt{\frac{1-\frac{velocity}{c}}{1-\frac{velocity}{c}}}$$

其中，$c$ 是光在真空中的速度，$\lambda$ 是原始波长。

### 3.4.确定光谱双星

与原子线数据相关的测定速度的函数可以用于确定光谱双星。

在下面的情况中，有两个不同的峰值：

![双峰](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/HD005516A_Elodie_correlation.png)

iSpec 以 [ELODIE](http://adsabs.harvard.edu/abs/2004sf2a.conf..547M) 观测到的 *HD005516A* 光谱作为例子，该条光谱在 `input/spectra/binaries/` 路径下。

![双星速度轮廓曲线](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/04.velocities/iSpec_velocity_profile_binary.png)

- Date 4.10.1996 / RA 00 57 12.40 / DEC +23 25 03.54

- ELODIE:
    - RV component 1: -25.49 km/s
    - RV component 2: 4.72 km/s

- iSpec results with parameters by default:
    - Barycentric vel: 5.15 km/s
    - RV component 1: -30.16 km/s
    - RV component 2: -0.04 km/s
    - RV corrected component 1: -25.01 km/s
    - RV corrected component 2: 5.11 km/s

iSpec 将会尝试自动检测速度轮廓曲线中的离群点峰值，以便检测光谱双星并且用多个 Gaussian/Voigt 轮廓曲线去拟合。


## 4.流量误差

### 4.1.信噪比估计

通过菜单中的 `Parameters - Estimate SNR`，iSpec 提供了 2 种方法来估计光谱的信噪比 (S/N)。

![信噪比估计](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_estimate_SNR.png)

- 通过误差：用流量除以光谱提供的误差可以计算出 S/N。如果提供误差，这是计算 S/N 最好的方法。

- 通过流量：检查整条光谱，重新采样以确保步长均匀，并进行 :zap: 10 x 10 的测量（该值可由用户修改）。对于每次测量都计算 S/N，最终取 S/N 的平均值作为整条光谱的 S/N。将信噪比 (S/N)  定义为一次测量的均值与标准差的比值：

$$S/N = \frac{\mu}{\sigma}$$

基于误差（如果误差包含在原始的观测中）的估计远比基于流量的估计更加可靠，因为后者会受到恒星类型的影响。

:zap: S/N estimations from fluxes should only be considered as relative values when comparing two spectra of similar spectral types where both S/N have been estimated similarly.

### 4.2.误差估计

给定一个 S/N，iSpec 可以计算与每个流量测量相关的误差（在这些误差尚未由原始观测提供的情况下）。这项功能在菜单栏中的 `Operations - Estimate errors based on S/N` 可以找到。

![误差估计](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_estimate_errors.png)

一旦执行这项操作，可以通过 `Spectra - Show errors in plot` 画出误差。

### 4.3.添加光谱噪声

通过使用菜单中的 `Operations - Add noise to spectrum fluxes`，可以人为地往光谱中添加泊松/高斯噪声（这对没有用噪声进行计算的合成光谱相当有用）。

![添加噪声](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/06.flux_errors/iSpec_add_noise.png)

## 5.分辨率

### 5.1.估计分辨率

iSpec 基于大气吸收线的 FWHM 给出分辨率的一个估计值。

![估计分辨率](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/07.resolution/iSpec_estimated_resolution.png)

这个估计值可以在与大气吸收线相关的速度测定功能中找到。通过以下公式得到该估计值：

$$R = \frac{c}{ (FWHM_{telluric} - FWHM_{theoretical}) }$$

其中，$c$ 是光在真空中的速度 (km/s)，$FWHM_{telluric}$ (km/s) 与光谱中观测到的大气吸收线有关，$FWHM_{theoretical}$ (km/s) 与理论大气吸收线有关。

当 iSpec 根据原子线数据测定速度轮廓曲线时，也会给出一个分辨率。然而，这不是一个很好的估计值，原因在于直接使用了测量的 FWHM，并且除了光谱分辨率以外还有其他的影响会导致吸收线的展宽(也就是恒星的转动)。

无论哪种情况，最好是优先知道光谱真实的分辨率而不是依赖于估计值，因为这其中的误差会很大。

### 5.2.降低分辨率

通过菜单栏中的 `Operations - Degrade resolution` 输入原始和目标分辨率，可以降低处于激活状态的光谱的分辨率。如果用户先前已经生成了一个速度轮廓曲线的函数，那么会估计出当前的分辨率，并显示在对话框中（用户可以修改）。

![降低分辨率](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/07.resolution/iSpec_degrade_resolution.png)

对于每个流量值，会有以下处理：

- 基于 FWHM 的大小定义一个窗口，该窗口依赖于原始和目标分辨率；

- 使用 $\sigma$ 值和光谱窗口的波长值构建一个高斯函数；

- 将光谱窗口和高斯函数做卷积，并保留卷积值。

如果用户指定初始分辨率为 0，那么将会用一个变量为 FWHM 的高斯函数对光谱进行平滑，其中变量 FWHM 由每一个波长值和最终分辨率确定：

$$FWHM = \frac{wavelength}{ final\_resolution }$$

> 根据上下文语义，*原始*、*目标*分辨率等价于*初始*、*最终*分辨率。在原文中为 *original*、*target* resolution 等价于 *initial*、*final* resolution。

## 6.连续谱

### 6.1.连续谱拟合

通过菜单栏中的 `Operations - Fit continuum` 选项，可以使用 4 种不同的模型对一条光谱的连续谱进行拟合：

- 样条曲线 (Splines)
- 多项式 (Polynomy)
- 模板 (Template)
- 定值 (Fixed value)

一旦执行连续谱的拟合，如果用户选择的动作 (Action)是 `Stats` 且点击了某一区域 (Region)，那么就可以看到相关的信息。

可以使用菜单栏中的 `Operations - Clear - Fitted continuum` 移除已经拟合好的连续谱。

### 6.2.样条曲线和多项式

![样条曲线](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/08.continuum/iSpec_fit_continuum_splines.png)

![多项式](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/08.continuum/iSpec_fit_continuum_polynomy.png)

过程采用了一个均值滤波器（减少噪声的影响）和一个最大值滤波器（避免吸收线），滤波器的窗口大小由用户自定义（也可以以相反的次序执行滤波：先最大值滤波器后均值滤波器, max+median）。

:zap: 微调窗口的大小对于改变连续谱的位置可能会有用，因为最有效的值取决于恒星的信噪比和光谱类型。

用户可以指定光谱分辨率来优化处理过程（:zap: 过采样会降低计算速度），光谱将会均匀地重采样，采样波长的步长等于最小波长除以分辨率。如果未指示分辨率，则使用中值波长作为步长对光谱进行重采样（拟合过程假定波长的步长是恒定的，因而重采样确保了该条件）。

为了自动检测并且忽略强吸收线（对于强吸收线来说，最大值滤波器还远不够），iSpec 实现了一种概率机制，可以设置一个更高或更低的概率阈值来控制这个概率机制。此机制期望过滤后的流量的变化速率是相似的（:bug:in chunks 20 times the max window size, with a minimum value of 10 nm），如果发现有强烈的变化，则很有可能是强吸收线的原因，那么将会忽略这些点。较高的概率阈值将接受偏离不远的变化率，反之亦然。

如果选择了相应的选项，则该过程只能考虑定义的 `continuum` 区域和/或忽略 `line` 区域；如果没有，它将使用到整条光谱。此外，它可以对每个区域独立地进行连续谱的拟合，而无需考虑其余的区域。

一旦光谱过滤，将模型拟合：

- 样条曲线：使用由用户指定阶数（建议使用阶数为2）的 N 样条。:zap: 在同一个窗口中，建议每纳米样条的个数 (N) 为1。

- 多项式：一个 N 阶的多现实。同样地，在同一个窗口中，建议每纳米的阶数为1。

### 6.3.模板

通过光谱除以模板也可以拟合连续谱；而后应用一个中值滤波器，滤波器的窗口大小由用户指定（建议大小为5）；最后应用一个高斯滤波器来平滑最终的结果。

当我们具有与可用作模板的目标光谱有着相似大气参数的合成光谱（或是已经归一化后的观测光谱）时，该方法是非常有用的。

![模板](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/08.continuum/iSpec_fit_continuum_template.png)

### 6.4.定值

定值模型会把连续谱固定在一个给定的值。当光谱已经归一化并且我们不想修改它的连续谱时，我们需要这样做，而后将连续谱固定到 1.0。

![定值](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/03.usage/08.continuum/iSpec_fit_continuum_fixed_value.png)

### 6.5.连续谱归一化

一旦连续谱拟合，可以通过菜单栏中的 `Operations - Continuum normalization` 对光谱进行归一化。处于激活状态的光谱的所有流量将会除以连续谱。

## 7.吸收线

### 7.1.线拟合

对于每个定义的 `line masks`，都可以使用菜单栏中的 `Operations - Fit lines` 选项来进行高斯拟合（会移除不能进行拟合的 `line masks`）。对光谱进行径向速度的校正和连续谱的拟合是必需的。如果