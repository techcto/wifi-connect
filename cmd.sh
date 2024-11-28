#!/bin/bash

export $(egrep -v '^#' .env | xargs)
args=("$@")

init(){
    # git submodule init
    cargo update
    cargo generate-lockfile
    cargo install
}

run(){
    /root/.cargo/bin/wifi-connect
}

tag(){
    VERSION="${args[1]}"
    git tag -a v${VERSION} -m ".1"
    git push --tags
}

$*