# APT + VirtualEnv

虚拟环境 **VirtualEnv** 是一个工具，它能让一个项目在单独的空间里只保留所需要的库（不污染系统原生环境）。它使用最基本的 Python 安装，但是它将编译所需的 Python 库并将其安装到一个隔离的目录下。在基于 Debian 的 GNU/Linux 发行版本下，如 Ubuntu 或 Linux Mint，使用包管理器（例如 `sudo apt install package_name`）安装下面的包：

- 安装系统库
  - python3
  - python3-tk
  - tk-dev
  - build-essential
  - gfortran
  - libgfortran4
  - libgsl0-dev
  - libcfitsio-dev
  - libncurses-dev
  - libblas-dev
  - liblapack-dev
  - libatlas-base-dev
  - libfreetype6-dev
  - libpng-dev
  - libhdf5-dev

``` bash
sudo apt install python3 python3-tk tk-dev build-essential \
                    gfortran libgfortran4 libgsl0-dev libcfitsio-dev \
                    libncurses-dev libblas-dev liblapack-dev \
                    libatlas-base-dev libfreetype6-dev libpng-dev \
                    libhdf5-dev
```

- 在 `$HOME/shared/py/` 路径下准备一个虚拟环境：

``` bash
export SHARED_DIR=$HOME/shared/
export PYTHON_SANDBOX=$SHARED_DIR/py
mkdir -p $PYTHON_SANDBOX

cd $SHARED_DIR
export VIRTUALENV=20.0.27
wget -c https://github.com/pypa/virtualenv/archive/$VIRTUALENV.tar.gz
tar -zxvf $VIRTUALENV.tar.gz
cd virtualenv-$VIRTUALENV
python3 virtualenv.py $PYTHON_SANDBOX
cd $SHARED_DIR
rm -rf virtualenv-$VIRTUALENV $VIRTUALENV.tar.gz
```

- 在虚拟环境下安装必需的 Python 库

``` bash
source $PYTHON_SANDBOX/bin/activate

export LC_ALL=C
unset LDFLAGS

# Upgrade all
pip freeze --local | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U

pip install numpy # Fundamental scientific computation
pip install scipy # Tools for scientific computation
pip install matplotlib # Plots
pip install astropy # Library for Astronomy
pip install ipython # Alternative python shell
pip install pudb # Debugger
pip install lockfile

pip install cython # C-extensions for python
pip install scikit-learn # Machine learning algorithms
pip install tables # required by pandas to support HDF5
pip install pandas # Data analysis library

pip install patsy # required by statsmodels
pip install statsmodels # Statistics
pip install dill # Pickle related
```

- 编辑 `$HOME/.bashrc`，在文件中添加：

```
# ------------------------------------------------------------------------------
# Locally installed python (iSpec)
# ------------------------------------------------------------------------------
export SANDBOXPATH=$HOME/shared
export PATH=$SANDBOXPATH/bin:$PATH
export PYTHONPATH=$SANDBOXPATH/lib/python2.7/site-packages:$PYTHONPATH
export LD_LIBRARY_PATH=$SANDBOXPATH/lib:$LD_LIBRARY_PATH
export PKG_CONFIG_PATH=$SANDBOXPATH/lib/pkgconfig:$PKG_CONFIG_PATH
py_setup() {
    source $HOME/shared/py/bin/activate
}
py_forget() {
    deactivate
}
source $HOME/shared/py/bin/activate
```

- 编辑 `$HOME/.bash_profile`，在文件中添加：

```
source $HOME/.bashrc
```

- 下载 [iSpec 源码](/installation/)，解压并移动到 `$HOME/shared/` 下。在 `iSpec/` 目录下打开终端，并运行以下命令：

``` bash
make clean
make spectrum
make turbospectrum
make moog
```