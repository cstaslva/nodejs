import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold("Digite o link para gerar o QRCode"),
    },
    {
        name: "type",
        description: chalk.yellow.bold("Escolha entre o tipo de QRCode, (1) Imagem ou (2) Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre (1) e (2)"),
        required: true,
    },
];

export default promptSchemaQRCode;

