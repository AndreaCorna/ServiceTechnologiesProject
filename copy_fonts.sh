#!/bin/sh
echo "removing old files"
rm -rf ./build/assets/fonts/

echo "copy new files"
mkdir ./build/assets/fonts
cp -r ./vendor/bootstrap/fonts/ ./build/assets/
