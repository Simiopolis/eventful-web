#!/bin/bash

echo Stopping the server.
forever stop server.js

echo Updating the repository.
git pull

echo Restarting the server
forever start server.js
