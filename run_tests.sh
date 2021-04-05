#!/bin/bash - 
set -o nounset                              # Treat unset variables as an error

echo 'Starting the shell script which runs the automation tests'
set -x
npm run test
