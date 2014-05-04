#!/bin/bash

forever stop server.js

git pull

forever start server.js
