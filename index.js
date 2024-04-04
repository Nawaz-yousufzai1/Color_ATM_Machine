import inquirer from "inquirer";
import chalk from "chalk";
// initialize user balance and pin code
let myBalance = 6000;
let myPin = 1234;
//print welcome Message
console.log(chalk.blue("\n \tWelcome to code with Nawaz-ATM Machine\n"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code")
    }
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\n Pin is correct,Login succesfully\n"));
    //console.log(`Your current Balance is ${myBalance}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withDrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "select a withdrawal Method",
                choices: ["Fast Cash", "Enter amount "]
            }
        ]);
        if (withDrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select amount",
                    choices: [2000, 5000, 1000, 15000, 20000]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log(chalk.red("Insufficiant Balance"));
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log(`${fastCashAns.fastCash} withdraw successfully`);
                console.log(`your Remaining Balance is: ${myBalance}`);
            }
        }
        else if (withDrawAns.withdrawMeth === "Enter amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:"
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficiant Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw Successfully`);
                console.log(`Your Remaining Balance is ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your account Balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.red("Pin is Incorrect,Try again"));
}
