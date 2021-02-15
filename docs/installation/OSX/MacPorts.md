# MacPorts

[MacPorts](https://www.macports.org/) 提供了一种可靠的方式来安装 Python 发行版本，它能在 Mac OS X 上为 iSpec 安装绝大部分需要的库。

然而，要知道有时候安装会花费一些时间，因为根据您操作系统的版本，它可能会从源代码中编译所有的包/库。另一方面，MacPorts 是没有许可限制、完全开源的，并且它还可以用于安装除 Python 之外的其他免费软件。


- 安装 MacPorts 需要 [XQuartz](https://www.xquartz.org/)，[Xcode]((https://apps.apple.com/cn/app/xcode/id497799835)) 和 [Command Line](https://guide.macports.org/#installing.xcode)

- 下载 [MacPorts](https://guide.macports.org/#installing.macports) 二进制文件，下载哪个版本取决于你 Mac OS X 的版本。双击下载好的文件并按照说明进行安装（所有选项均为默认）。

![macports installation](https://www.blancocuaresma.com/s/user/pages/02.projects/03.iSpec/manual/02.installation/03.osx/02.MacPorts/macports_installation.png)

- 安装之后，如果用户默认的 shell 是 bash，编辑 `$HOME/.bash_profile` 文件，并确认安装程序已经添加以下内容：

```
export PATH=/opt/local/bin:/opt/local/sbin:$PATH
```

- 关闭所有终端然后打开一个新的终端。如果用户默认的 shell 是 bash，则为了加载新配置，您可以执行以下命令：

``` bash
source $HOME/.bash\_profile
```

- :bug: Update the local ports tree with the ports repository:

``` bash
sudo port selfupdate
sudo port upgrade outdated
```

- 安装 Python 和一些额外需要的库：

``` bash
sudo port -N install python38
sudo port select --set python python38
sudo port -N install py38-gnureadline
sudo port -N install py38-tkinter
sudo port -N install py38-numpy
sudo port -N install py38-scipy
sudo port -N install py38-matplotlib
sudo port -N install py38-astropy
sudo port -N install py38-pandas
sudo port -N install py38-cython
sudo port select --set cython cython38
sudo port -N install py38-statsmodels
sudo port -N install py38-lockfile
sudo port -N install py38-dill
sudo port -N install py38-pip
sudo port select --set pip pip38
```

- （可选），安装在使用 Python 时可能有用的库：

``` bash
sudo port -N install py38-ipython
sudo port select --set ipython py38-ipython
sudo port -N install py38-pudb
```

- 下载 [iSpec 源码](/installation/)，解压并移动到 `$HOME/shared/` 下。在 `iSpec/` 目录下打开终端，并运行以下命令：

``` bash
make clean
make spectrum
PATH=/usr/bin:$PATH make turbospectrum
PATH=/usr/bin:$PATH make moog
```
