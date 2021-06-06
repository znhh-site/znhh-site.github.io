FROM gitpod/workspace-full

USER root

# Install custom tools, runtime, etc.

# apt gives beautiful output for human reading so being preferred in the terminal.
# apt-get does not give as nice outputs as apt but works great in scripts.
# Since Dockerfile is kind of scripts, Docker recommends us to directly use the apt-get for installing sort of stuff.
# Here you can get an inference.
# https://askubuntu.com/questions/990823/apt-gives-unstable-cli-interface-warning
ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y apt-utils
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y ruby-full build-essential zlib1g-dev zsh git netcat nmap vim tldr && apt-get autoremove -y && apt-get autoclean -y

USER gitpod

RUN echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc && echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc && echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
SHELL ["/bin/bash", "-c", "source ~/.bashrc"]
RUN gem install jekyll bundler
