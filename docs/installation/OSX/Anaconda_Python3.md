# Anaconda Python 3

在 MacOSX 上安装 Python3 发行版最简单的方法之一就是使用 [Anaconda](https://www.anaconda.com/products/individual)，它包含了 iSpec 所需的绝大多数库。

- 下载 [Anaconda Python3](https://www.anaconda.com/products/individual) 发行版，双击安装或者在命令行中运行以下命令进行安装：

``` bash
bash Anaconda3-2020.07-MacOSX-x86_64.sh
```

如果下载速度不理想，可以使用清华镜像：

- [清华镜像](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

按照说明，Anaconda 会默认安装在 `/home/your_user/anaconda3/` 下。安装程序会询问你是否要初始化/修改 `.bashrc` 或是 `.bash_profile`，选择 `yes`。安装程序会在你的 `.bashrc` 或是 `.bash_profile` 文件（文件位于你的 `$home` 目录下）中添加如下内容：

```
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/home/your_user/anaconda3/bin/conda' 'shell.bash' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/home/your_user/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/home/your_user/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/home/your_user/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<
```

- 关闭所有终端然后打开一个新的终端以重启程序

- 安装以下默认里没有但是 iSpec 需要的库：

``` bash
conda update conda
conda update --all
conda install lockfile dill
```

- 在 [App Store](https://apps.apple.com/cn/app/xcode/id497799835) 中下载最新版本的 **Xcode**。一旦您安装了 Xcode，打开终端并运行 `xcode-select --install`，而后点击安装按钮安装必需的**命令行开发者工具（command line developer tools）**。如果您看到一条告知您 "the software cannot be installed" 的信息，请不用担心，因为这通常表示当前无最新版本可更新（换而言之，您已经安装了最新本版）。 安装完成后，确认此版本的 gcc 是从您的终端执行的版本：

``` bash
which gcc
gcc --version
```

输入后应分别显示：

``` bash
/usr/local/bin/gfortran
```

``` bahs
Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.13.sdk/usr/include/c++/4.2.1
Apple LLVM version 9.1.0 (clang-902.0.39.2)
Target: x86_64-apple-darwin17.6.0
Thread model: posix
InstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin
```

- 安装官方的 [gfortran](https://gcc.gnu.org/wiki/GFortranBinaries#MacOS) 二进制文件。安装完成后，确认此版本的 gfortran 是从您的终端执行的版本：

``` bash
which gfortran
gfortran --version
```

输入后应分别显示：

``` bash
/usr/local/bin/gfortran
```

``` bash
GNU Fortran (GCC) 6.3.0
Copyright (C) 2016 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

- 最后，下载 [iSpec 源码](/installation/)，解压并移动到 `$HOME/iSpec/` 下。在 `iSpec/` 目录下打开终端，并运行以下命令：

``` bash
make clean
make spectrum
make turbospectrum
make moog
```
