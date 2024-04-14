#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let condition = true;

console.log(chalk.bgRedBright.bold("\n \t <<<===== WELCOME TO MY TODO-LIST APPLICATION =====>>> \n"));

while(condition){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("what would you like to add task in your todos?")
        }
    ]);
    todolist.push(addTask.task);
    console.log(chalk.yellowBright(`${addTask.task} Task Added in Todo-List Successfuly`))

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.green("what would you like to add more task in your todos?"),
            default:"false"
        }
    ])
    condition = addMoreTask.addmore
}
console.log(chalk.bgMagentaBright("Your Updated Todo-List:", todolist));