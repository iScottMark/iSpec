# APT

基于 Debian 的 GNU/Linux 发行版本，如 Ubuntu 或 Linux Mint，使用包管理器（例如 `sudo apt install package_name`）安装下面的包。

- `build-essential`
- `gfortran`
- `libgfortran4`
- `python3`
- `python3-tk`
- `python3-numpy`
- `python3-scipy`
- `python3-astropy`
- `python3-matplotlib`
- `python3-statsmodels`
- `python3-dill`
- `python3-lockfile`
- `python3-pip`
- `python3-venv`
- `python3-virtualenv`
- `cython`
- `libgsl0-dev`
- `libcfitsio-dev`
- `libncurses-dev`
- `libblas-dev`
- `liblapack-dev`
- `libatlas-base-dev`
- `libfreetype6-dev`
- `libpng-dev`
- `libhdf5-dev`

最后，下载 [iSpec 源码](/installation/)，解压并移动到 `$HOME/iSpec/` 下。在该目录下打开终端，并运以下命令：

``` bash
make clean
make spectrum
make turbospectrum
make moog
```
