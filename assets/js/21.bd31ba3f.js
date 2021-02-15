(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{381:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"apt-virtualenv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apt-virtualenv"}},[s._v("#")]),s._v(" APT + VirtualEnv")]),s._v(" "),a("p",[s._v("虚拟环境 "),a("strong",[s._v("VirtualEnv")]),s._v(" 是一个工具，它能让一个项目在单独的空间里只保留所需要的库（不污染系统原生环境）。它使用最基本的 Python 安装，但是它将编译所需的 Python 库并将其安装到一个隔离的目录下。在基于 Debian 的 GNU/Linux 发行版本下，如 Ubuntu 或 Linux Mint，使用包管理器（例如 "),a("code",[s._v("sudo apt install package_name")]),s._v("）安装下面的包：")]),s._v(" "),a("ul",[a("li",[s._v("安装系统库\n"),a("ul",[a("li",[s._v("python3")]),s._v(" "),a("li",[s._v("python3-tk")]),s._v(" "),a("li",[s._v("tk-dev")]),s._v(" "),a("li",[s._v("build-essential")]),s._v(" "),a("li",[s._v("gfortran")]),s._v(" "),a("li",[s._v("libgfortran4")]),s._v(" "),a("li",[s._v("libgsl0-dev")]),s._v(" "),a("li",[s._v("libcfitsio-dev")]),s._v(" "),a("li",[s._v("libncurses-dev")]),s._v(" "),a("li",[s._v("libblas-dev")]),s._v(" "),a("li",[s._v("liblapack-dev")]),s._v(" "),a("li",[s._v("libatlas-base-dev")]),s._v(" "),a("li",[s._v("libfreetype6-dev")]),s._v(" "),a("li",[s._v("libpng-dev")]),s._v(" "),a("li",[s._v("libhdf5-dev")])])])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" python3 python3-tk tk-dev build-essential "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                    gfortran libgfortran4 libgsl0-dev libcfitsio-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                    libncurses-dev libblas-dev liblapack-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                    libatlas-base-dev libfreetype6-dev libpng-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n                    libhdf5-dev\n")])])]),a("ul",[a("li",[s._v("在 "),a("code",[s._v("$HOME/shared/py/")]),s._v(" 路径下准备一个虚拟环境：")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SHARED_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/shared/\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PYTHON_SANDBOX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SHARED_DIR")]),s._v("/py\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYTHON_SANDBOX")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SHARED_DIR")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VIRTUALENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.0")]),s._v(".27\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -c https://github.com/pypa/virtualenv/archive/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VIRTUALENV")]),s._v(".tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VIRTUALENV")]),s._v(".tar.gz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" virtualenv-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VIRTUALENV")]),s._v("\npython3 virtualenv.py "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYTHON_SANDBOX")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SHARED_DIR")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf virtualenv-"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VIRTUALENV")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VIRTUALENV")]),s._v(".tar.gz\n")])])]),a("ul",[a("li",[s._v("在虚拟环境下安装必需的 Python 库")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PYTHON_SANDBOX")]),s._v("/bin/activate\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("LC_ALL")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("C\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" LDFLAGS\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Upgrade all")]),s._v("\npip freeze --local "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -v "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'^\\-e'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" -n1 pip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -U\n\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" numpy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Fundamental scientific computation")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" scipy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Tools for scientific computation")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" matplotlib "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Plots")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" astropy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Library for Astronomy")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ipython "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alternative python shell")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pudb "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Debugger")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lockfile\n\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cython "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C-extensions for python")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" scikit-learn "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Machine learning algorithms")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tables "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# required by pandas to support HDF5")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pandas "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Data analysis library")]),s._v("\n\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" patsy "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# required by statsmodels")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" statsmodels "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Statistics")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dill "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pickle related")]),s._v("\n")])])]),a("ul",[a("li",[s._v("编辑 "),a("code",[s._v("$HOME/.bashrc")]),s._v("，在文件中添加：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# ------------------------------------------------------------------------------\n# Locally installed python (iSpec)\n# ------------------------------------------------------------------------------\nexport SANDBOXPATH=$HOME/shared\nexport PATH=$SANDBOXPATH/bin:$PATH\nexport PYTHONPATH=$SANDBOXPATH/lib/python2.7/site-packages:$PYTHONPATH\nexport LD_LIBRARY_PATH=$SANDBOXPATH/lib:$LD_LIBRARY_PATH\nexport PKG_CONFIG_PATH=$SANDBOXPATH/lib/pkgconfig:$PKG_CONFIG_PATH\npy_setup() {\n    source $HOME/shared/py/bin/activate\n}\npy_forget() {\n    deactivate\n}\nsource $HOME/shared/py/bin/activate\n")])])]),a("ul",[a("li",[s._v("编辑 "),a("code",[s._v("$HOME/.bash_profile")]),s._v("，在文件中添加：")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("source $HOME/.bashrc\n")])])]),a("ul",[a("li",[s._v("下载 "),a("RouterLink",{attrs:{to:"/installation/"}},[s._v("iSpec 源码")]),s._v("，解压并移动到 "),a("code",[s._v("$HOME/shared/")]),s._v(" 下。在 "),a("code",[s._v("iSpec/")]),s._v(" 目录下打开终端，并运行以下命令：")],1)]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" clean\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" spectrum\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" turbospectrum\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" moog\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);