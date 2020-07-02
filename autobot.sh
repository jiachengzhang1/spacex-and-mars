#!/bin/bash

# $1: tmp file, $2: endpoint, $3 api name
check_update () {
    echo Checking $3 Data ...
    status=0
    echo Fetching $3 API data ...
    curl $2 > "$TMP_FILE"
    if [ -f "$1" ]; then
        if cmp -s "$1" "$TMP_FILE"; then
            echo No $3 data updated.
            rm "$TMP_FILE"
            status=1
        else
            echo Updating $3 data ...
            mv "$TMP_FILE" "$1"
        fi
    else
        echo No previous data found, creating new tmp file ...
        touch "$1"
        mv "$TMP_FILE" "$1"
    fi
}

cd /var/www/spacexandmars.com/

LOG_DIR=./log
TMP_DIR=./tmp

if [ ! -d "$LOG_DIR" ]; then
    mkdir "$LOG_DIR"
fi

if [ ! -d "$TMP_DIR" ]; then
    mkdir "$TMP_DIR"
fi

exec >> $LOG_DIR/autobot.log 2>&1

echo "##################################################################################"
echo `date -u`

if [ -f .env ]; then
    eval $(cat .env | sed 's/^/export /')
else
    echo "No .env file found, skip."
fi

SPACEX_TMP_FILE="$TMP_DIR"/spacex_data_tmp
NASA_TMP_FILE="$TMP_DIR"/nasa_data_tmp
TMP_FILE="$TMP_DIR"/tmp

spacexendpoint=https://api.spacexdata.com/v4/launches/
nasaendpoint="https://api.nasa.gov/insight_weather/?api_key=$NASA_API_KEY&feedtype=json&ver=1.0"

check_update $SPACEX_TMP_FILE $spacexendpoint SpaceX
spacex_updated=$status

printf "\n"

check_update $NASA_TMP_FILE $nasaendpoint NASA
nasa_updated=$status

if [ $spacex_updated -eq 0 ] || [ $nasa_updated -eq 0 ]; then
    printf "\n\nContent changes found, rebuilding application ...\n"
    npm run build
else
    printf "No changes found, good bye!\n"
fi
printf "\n"
