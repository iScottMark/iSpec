# Source

::: warning
译者极力**不**推荐用此方法安装 iSpec。
:::

如果你的系统没有提供 Python3 （询问你的系统管理员或者查阅系统文档），你可以从源码开始编译。接下来的步骤并非易事，且无法立即使用，因为这取决于你的系统和已安装的库。

- 编译 Python

``` bash
mkdir -p $HOME/shared/
mkdir -p $HOME/shared/src/

cd $HOME/shared/src/

wget ftp://ftp.cwru.edu/pub/bash/readline-6.2.tar.gz
tar -zxvf readline-6.2.tar.gz 
cd readline-6.2/
./configure --prefix=$HOME/shared/
make
make install
cd ..

wget --no-check-certificate https://www.sqlite.org/2015/sqlite-autoconf-3080900.tar.gz
tar -zxvf sqlite-autoconf-3080900.tar.gz 
cd sqlite-autoconf-3080900
./configure --prefix=$HOME/shared/
make
make install
cd ..

wget ftp://ftp.tcl.tk/pub/tcl/tcl8_5/tcl8.5.17-src.tar.gz
tar -zxvf tcl8.5.17-src.tar.gz 
cd tcl8.5.17/unix
./configure --prefix=$HOME/shared/ --enable-threads
make
make install
cd ../../

wget http://downloads.sourceforge.net/project/tcl/Tcl/8.5.17/tk8.5.17-src.tar.gz
tar -zxvf tk8.5.17-src.tar.gz
cd tk8.5.17/unix
./configure --prefix=$HOME/shared/ --enable-threads
make
make install
cd ../../

wget -c https://www.python.org/ftp/python/3.8.5/Python-3.8.5.tgz
tar -zxvf Python-3.8.5.tgz
cd Python-3.8.5
./configure --enable-shared --prefix=$HOME/shared/
make
make install
cd ..
```

- 编辑 `/$HOME/.bashrc/`，在文件中添加：

```
export SANDBOXPATH=$HOME/shared
export PATH=$SANDBOXPATH/bin:$PATH
export PYTHONPATH=$SANDBOXPATH/lib/python3.8/site-packages:$PYTHONPATH
export LD_LIBRARY_PATH=$SANDBOXPATH/lib:$LD_LIBRARY_PATH
export PKG_CONFIG_PATH=$SANDBOXPATH/lib/pkgconfig:$PKG_CONFIG_PATH
unset CPPFLAGS
unset LDFLAGS
#export CPPFLAGS="-I$SANDBOXPATH/include"
#export LDFLAGS="-L$SANDBOXPATH/lib"
```

- 关闭所有终端，然后打开一个新终端。如果用户默认的 shell 是 bash，则为了加载新配置，您可以执行：
 
``` bash
source $HOME/.bash\_profile
```

- 接下来的步骤与 [APT + VirtualEnv](./APT+VirtualEnv.html) 这节说明是一样的（忽略其中的 `apt` 部分）。
