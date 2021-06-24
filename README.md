# INSTALL

```bash
sudo apt-get install ruby-full build-essential zlib1g-dev
```

```bash
echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
```

```bash
source ~/.bashrc
```

``` bash
gem install jekyll bundler
bundle install
```

# RUN

```bash
jekyll serve
```
