import 'dotenv/config';
import input from '@inquirer/input';
import confirm from '@inquirer/confirm';

const sourceAnswer = await input({
    message: 'Enter your source_folder:'
        + (process.env.source_folder ? "[" + process.env.source_folder + "]" : '')
});
const modelAnswer = await input({
    message: 'Enter your model_folder:'
        + (process.env.model_folder ? "[" + process.env.model_folder + "]" : "")
});

let templateAnswer = '';
const answerTemplates = await confirm({message: 'Do you want to use your own templates?Default is No', default: false});
if (answerTemplates) {
    templateAnswer = await input({
        message: 'Enter your templates_folder:'
            + (process.env.templates_folder ? "[" + process.env.templates_folder + "]" : '')
    });
}


export const appConfig = {
    templatesFolder: templateAnswer ? templateAnswer : process.env.templates_folder,
    sourceFolder: sourceAnswer ? sourceAnswer : process.env.source_folder,
    modelFolder: modelAnswer ? modelAnswer : process.env.model_folder
}

export const generatorTypes = {router: "router", controller: "controller"};

export const generatorTypesFolder = {
    router: process.env.routes_folder,
    controller: process.env.controllers_folder,
}
