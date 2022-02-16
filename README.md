# Randompass

Randompass is a simple command-line app that generates passwords.

## Features

- Create random passwords with alphanumeric characters and symbols
- Specify password length
- Copy password to clipboard automatically
- Option to remove numbers and symbols
- Option to save passwords to a txt file

## Pre-requisites

- Node.js
- Yarn

## Options

`-h` &mdash; display help for command

`-l` or `--length` &mdash; length of password

`-s` or `--save` &mdash; save password to **passwords.txt** (created automatically); default set to false

`-nn` or `--no-numbers` &mdash; remove numbers from password; numbers are included by default

`-ns` or `--no-symbols` &mdash; remove symbols from password; symbols are included by default

## Usage

Start with `yarn install` to install all packages

`yarn pass` &mdash; generate random password with alphanumeric characters and symbols; default length of 8 characters

`yarn pass --length=16` &mdash; generate random password with length of 16 characters

`yarn pass --length=16 -nn` &mdash; generate random password with length of 16 characters and no numbers

`yarn pass --length=16 -nn -ns` &mdash; generate random password with length of 16 characters and no numbers & symbols

`yarn pass --save --length=16` &mdash; generate random password with length of 16 characters and save password to passwords.txt
