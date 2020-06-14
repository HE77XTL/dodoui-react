#!/bin/env bash
yarn doc && \
    git subtree push --prefix=doc origin gh-pages


