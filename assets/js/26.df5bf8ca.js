(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{386:function(a,n,e){"use strict";e.r(n);var t=e(25),s=Object(t.a)({},(function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"anaconda-python-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#anaconda-python-3"}},[a._v("#")]),a._v(" Anaconda Python 3")]),a._v(" "),e("p",[a._v("在 MacOSX 上安装 Python3 发行版最简单的方法之一就是使用 "),e("a",{attrs:{href:"https://www.anaconda.com/products/individual",target:"_blank",rel:"noopener noreferrer"}},[a._v("Anaconda"),e("OutboundLink")],1),a._v("，它包含了 iSpec 所需的绝大多数库。")]),a._v(" "),e("ul",[e("li",[a._v("下载 "),e("a",{attrs:{href:"https://www.anaconda.com/products/individual",target:"_blank",rel:"noopener noreferrer"}},[a._v("Anaconda Python3"),e("OutboundLink")],1),a._v(" 发行版，双击安装或者在命令行中运行以下命令进行安装：")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" Anaconda3-2020.07-MacOSX-x86_64.sh\n")])])]),e("p",[a._v("如果下载速度不理想，可以使用清华镜像：")]),a._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/",target:"_blank",rel:"noopener noreferrer"}},[a._v("清华镜像"),e("OutboundLink")],1)])]),a._v(" "),e("p",[a._v("按照说明，Anaconda 会默认安装在 "),e("code",[a._v("/home/your_user/anaconda3/")]),a._v(" 下。安装程序会询问你是否要初始化/修改 "),e("code",[a._v(".bashrc")]),a._v(" 或是 "),e("code",[a._v(".bash_profile")]),a._v("，选择 "),e("code",[a._v("yes")]),a._v("。安装程序会在你的 "),e("code",[a._v(".bashrc")]),a._v(" 或是 "),e("code",[a._v(".bash_profile")]),a._v(" 文件（文件位于你的 "),e("code",[a._v("$home")]),a._v(" 目录下）中添加如下内容：")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('# >>> conda initialize >>>\n# !! Contents within this block are managed by \'conda init\' !!\n__conda_setup="$(\'/home/your_user/anaconda3/bin/conda\' \'shell.bash\' \'hook\' 2> /dev/null)"\nif [ $? -eq 0 ]; then\n    eval "$__conda_setup"\nelse\n    if [ -f "/home/your_user/anaconda3/etc/profile.d/conda.sh" ]; then\n        . "/home/your_user/anaconda3/etc/profile.d/conda.sh"\n    else\n        export PATH="/home/your_user/anaconda3/bin:$PATH"\n    fi\nfi\nunset __conda_setup\n# <<< conda initialize <<<\n')])])]),e("ul",[e("li",[e("p",[a._v("关闭所有终端然后打开一个新的终端以重启程序")])]),a._v(" "),e("li",[e("p",[a._v("安装以下默认里没有但是 iSpec 需要的库：")])])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("conda update conda\nconda update --all\nconda "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" lockfile dill\n")])])]),e("ul",[e("li",[a._v("在 "),e("a",{attrs:{href:"https://apps.apple.com/cn/app/xcode/id497799835",target:"_blank",rel:"noopener noreferrer"}},[a._v("App Store"),e("OutboundLink")],1),a._v(" 中下载最新版本的 "),e("strong",[a._v("Xcode")]),a._v("。一旦您安装了 Xcode，打开终端并运行 "),e("code",[a._v("xcode-select --install")]),a._v("，而后点击安装按钮安装必需的"),e("strong",[a._v("命令行开发者工具（command line developer tools）")]),a._v('。如果您看到一条告知您 "the software cannot be installed" 的信息，请不用担心，因为这通常表示当前无最新版本可更新（换而言之，您已经安装了最新本版）。 安装完成后，确认此版本的 gcc 是从您的终端执行的版本：')])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" gcc\ngcc --version\n")])])]),e("p",[a._v("输入后应分别显示：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/usr/local/bin/gfortran\n")])])]),e("div",{staticClass:"language-bahs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Configured with: --prefix=/Applications/Xcode.app/Contents/Developer/usr --with-gxx-include-dir=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.13.sdk/usr/include/c++/4.2.1\nApple LLVM version 9.1.0 (clang-902.0.39.2)\nTarget: x86_64-apple-darwin17.6.0\nThread model: posix\nInstalledDir: /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin\n")])])]),e("ul",[e("li",[a._v("安装官方的 "),e("a",{attrs:{href:"https://gcc.gnu.org/wiki/GFortranBinaries#MacOS",target:"_blank",rel:"noopener noreferrer"}},[a._v("gfortran"),e("OutboundLink")],1),a._v(" 二进制文件。安装完成后，确认此版本的 gfortran 是从您的终端执行的版本：")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("which")]),a._v(" gfortran\ngfortran --version\n")])])]),e("p",[a._v("输入后应分别显示：")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("/usr/local/bin/gfortran\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("GNU Fortran "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("GCC"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6.3")]),a._v(".0\nCopyright "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("C"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2016")]),a._v(" Free Software Foundation, Inc.\nThis is "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("free")]),a._v(" software"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" see the "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" copying conditions.  There is NO\nwarranty"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" not even "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n")])])]),e("ul",[e("li",[a._v("最后，下载 "),e("RouterLink",{attrs:{to:"/installation/"}},[a._v("iSpec 源码")]),a._v("，解压并移动到 "),e("code",[a._v("$HOME/iSpec/")]),a._v(" 下。在 "),e("code",[a._v("iSpec/")]),a._v(" 目录下打开终端，并运行以下命令：")],1)]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" clean\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" spectrum\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" turbospectrum\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("make")]),a._v(" moog\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);