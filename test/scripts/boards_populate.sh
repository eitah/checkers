#!/bin/bash

mongoimport --jsonArray --drop --db $DB --collection boards --file ../data/boards.json
