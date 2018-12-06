#!/usr/bin/env bash

node findClient.js $1
RUNCLIENT=$? 
if [ $RUNCLIENT -eq '20' ] 
then 
    npm run start_bgm 
fi

if [ $RUNCLIENT -eq '21' ] 
then 
    echo $?
    npm run start_gbgm 
fi