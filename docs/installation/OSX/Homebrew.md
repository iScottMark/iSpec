# Homebrew

[Homebrew]() 是 [MacPorts]() 的一个替代品，个人（指软件作者 S. Blanco-Cuaresma 本人）更喜欢在一个隔离的目录中使用它，以便我能够轻松删除它而不会污染系统环境：

``` bash
cd $HOME
git clone https://github.com/mxcl/homebrew.git
echo "export PATH=$HOME/homebrew/bin:$PATH" >> $HOME/.bashrc
source $HOME/.bashrc
brew update
brew upgrade
brew install python@3.8
brew cleanup
```
