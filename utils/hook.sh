#!/bin/bash
echo "Executing auto-deploy"
echo "======================"
echo ""

echo "Stopping eventful server"
echo "======================"
echo ""
forever stop app.js

echo "Updating eventful project"
echo "======================="
echo ""
cd /home/ubuntu/eventful-web
sudo git pull --rebase

echo "Restarting eventful server"
echo "======================="
echo ""
sudp forever start app.js

echo "Finished updating project."