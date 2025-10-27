#!/usr/bin/env node
import { Command } from "commander";
import { priceValidation, readFile, writeFile } from "./utils.js";

const file = "expenses.json";

const program = new Command();

program
  .name("Expense Manager")
  .description("Manage your personal expenses")
  .version("1.0.0");

program
  .command("show")
  .description("Display all expenses")
  .option("--asc", "Sort by oldest first")
  .option("--desc", "Sort by newest first")
  .option("-c, --category <category>", "Filter by category")
  .option("-p, --page <page>", "Page number", "1")
  .option("-t, --take <take>", "Items per page", "10")
  .action(async (opts) => {
    const expenses = await readFile(file, true);

    if (opts.asc && opts.desc) {
      console.log("Cannot use both --asc and --desc at the same time.");
      return;
    }

    let filtered = opts.category
      ? expenses.filter((e) => e.category === opts.category)
      : expenses;

    if (opts.asc)
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    if (opts.desc)
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const page = Number(opts.page);
    const take = Number(opts.take);
    const start = (page - 1) * take;
    const end = start + take;

    console.log(filtered.slice(start, end));
  });

program
  .command("add")
  .description("Add a new expense")
  .argument("<category>", "Category of the expense")
  .argument("<price>", "Amount of the expense")
  .action(async (category, price) => {
    const expenses = await readFile(file, true);
    const lastId = expenses[expenses.length - 1]?.id || 0;

    if (!priceValidation(price)) {
      console.log("Invalid price. Must be a number >= 10.");
      return;
    }

    const expense = {
      id: lastId + 1,
      category,
      price: Number(price),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    expenses.push(expense);
    await writeFile(file, expenses);
    console.log("Expense added:", expense);
  });

program
  .command("delete")
  .description("Remove an expense by ID")
  .argument("<id>", "Expense ID")
  .action(async (id) => {
    const expenses = await readFile(file, true);
    const index = expenses.findIndex((e) => e.id === Number(id));

    if (index === -1) {
      console.log("Expense not found.");
      return;
    }

    expenses.splice(index, 1);
    await writeFile(file, expenses);
    console.log("Expense removed successfully.");
  });

program
  .command("update")
  .description("Update expense details")
  .argument("<id>", "Expense ID")
  .option("-c, --category <category>", "New category")
  .option("-p, --price <price>", "New price")
  .action(async (id, { category, price }) => {
    const expenses = await readFile(file, true);
    const index = expenses.findIndex((e) => e.id === Number(id));

    if (index === -1) {
      console.log("Expense not found.");
      return;
    }

    if (category) expenses[index].category = category;
    if (price) {
      if (!priceValidation(price)) {
        console.log("Invalid price.");
        return;
      }
      expenses[index].price = Number(price);
    }

    expenses[index].updatedAt = new Date().toISOString();
    await writeFile(file, expenses);

    console.log("Expense updated:", expenses[index]);
  });

program
  .command("search")
  .argument("<date>", "Search expenses by date (YYYY-MM-DD)")
  .description("Find expenses by creation date")
  .action(async (date) => {
    const expenses = await readFile(file, true);
    const results = expenses.filter((e) => e.createdAt.startsWith(date));

    if (results.length === 0) {
      console.log("No expenses found for this date.");
      return;
    }

    console.log(results);
  });

program
  .command("get")
  .argument("<id>", "Expense ID")
  .description("Show details of a single expense")
  .action(async (id) => {
    const expenses = await readFile(file, true);
    const expense = expenses.find((e) => e.id === Number(id));

    if (!expense) {
      console.log("Expense not found.");
      return;
    }

    console.log(expense);
  });

program.parse();
