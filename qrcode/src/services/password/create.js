import chalk from "chalk";
import hendle from "./hendle.js";

async function createPassword() {
    console.log(chalk.green.bold("password"));
    
    const password = await hendle();
    console.log(password);
};

export default createPassword;
