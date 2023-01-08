# VOLTRON

The project for the course of software engineering at NTUA during the academic year of 2019-2020.
<br/>
This is an implementation of an REST API based site for access to electrical consumption/generation data.


---
## Requirements

For development, you will only need Node.js,PostgreSQL and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

If you need to update `npm`, you can make it using `npm`! After running the following command, just open again the command line and be happy.

    $ npm install npm -g



---

## Install

    $ git clone https://github.com/ntua/TL19-48.git
    $ cd TL19-48


## Running the backend

    $ cd /back-end/src
    Configure postgreSQL credentials and database name in /back-end/src/config.js
    Import db.tar into postgreSQL
    $ npm start

## Running the cli

    $ cd /cli-client
    $ node energy_group048 --help (for available commands)
    
    
## Running the frontend

    $ cd /front-end
    $ npm start
    
## Running the benchmarks

    $ cd /back-end/src
    $ Login through the cli
    $ Change the token variable in benchmark.js 
    $ Configure the route and method for your benchmark
    $ node benchmark.js
    

