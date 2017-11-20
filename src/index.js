#!/usr/bin/env node

const program = require('commander');
const package = require('../package.json');
const orbitalCompiler = require('./lib/orbitalCompiler');
const ephemeris = require('./lib/ephemeris');
const orbitalUpdater = require('./lib/orbitalUpdater');

program
  .version(package.version)
  .option('-m --method [name]', 'Method to run')
  .parse(process.argv);

const runScript = ({method}) => {
  switch (method) {
    case 'orbitals':
      return orbitalCompiler.compileBundles();
    case 'ephemeris':
      return orbitalUpdater.updateAll();
    default:
      return false;
  }
}

runScript(program);