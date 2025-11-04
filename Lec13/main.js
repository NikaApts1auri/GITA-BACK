#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program.name("Test cli").description("Random info about you").version("1.0.0");

program
  .command("hello")
  .description("command return")
  .action(() => {
    console.log(`Hello world`);
  });

program.parse();

const person = { name: "Nika", age: 25 };
