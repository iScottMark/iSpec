# Anaconda Python 3

在没有 root 权限的情况下，在 Linux 上为 iSpec 安装 Python3 发行版的最简单方法之一就是使用 [Anaconda](https://www.anaconda.com/products/individual)。

- 下载 [Anaconda Python3](https://www.anaconda.com/download/)，然后运行：

``` bash
bash Anaconda3-2020.07-Linux-x86_64.sh
```

如果下载速度不理想，可以使用清华镜像：

- [清华镜像](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)

<br></br>

按照说明，Anaconda 会默认安装在 `/home/your_user/anaconda3/` 下。安装程序会询问你是否要初始化/修改 `.bashrc` 或是 `.bash_profile`，选择 `yes`。安装程序会在你的 `.bashrc` 或是 `.bash_profile` 中添加如下内容：

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

- 在基于 Debian 的 GNU/Linux 发行版本下，如 Ubuntu 或 Linux Mint，使用包管理器（例如 `sudo apt install package_name`）安装下面的包。这是唯一需要 root 权限的一步（幸运的是，许多机器已经上包含了这些工具，你并不要安装它们）：

``` bash
sudo apt install build-essential gfortran libgfortran3
```

::: warning
译者注：译者在安装时，操作系统为 **Ubuntu 20.04 LTS**，发现其中的 `libgfortran3` 已被 **Ubuntu 20.04 LTS** 弃用，无法正常安装该包及其依赖项。最后译者的解决方法为安装 `libgfortran5`，目前程序基本功能运行正常；但译者不推荐这么做，请尽量选择在 **Ubuntu 18.04 LTS** 或是更早版本的系统下进行安装。
:::

- 最后，下载 [iSpec 源码](/installation/)，解压并移动到 `$HOME/iSpec/` 下。在 `iSpec` 目录下打开终端，并运行以下命令：

``` bash
make clean
make spectrum
make turbospectrum
make moog
```
