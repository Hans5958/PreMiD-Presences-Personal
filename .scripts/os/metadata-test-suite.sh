#!/bin/bash

if [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; then
	while [[ $(basename $(pwd)) != "PreMiD-Presences-Personal" ]]; do
		cd ..
	done
fi

bash "../PreMiD-MTS/dist/mts-main.sh" "$@"

# Hey! This script has been moved to https://github.com/Hans5958/PreMiD-MTS. This script is here for redirection purposes.