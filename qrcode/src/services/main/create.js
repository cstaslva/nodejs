import prompt from "prompt";

import promptSchemaMain from "../.././prompts-schema/prompt-main.js";
import createQRCode from "../qr-code/create.js";
import createPassword from "../password/create.js";

async function createMain() {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    });

    prompt.start();
};

export default createMain;
