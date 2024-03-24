#! /usr/bin/env node
import select from '@inquirer/select';
import {createController, createRoute, getDirectories, getFiles} from "./functions.js";
import {checkbox} from "@inquirer/prompts";
import {appConfig, generatorTypes} from "./constants.js";

let folder = '';
if (!appConfig.modelFolder) {
    const folders = await getDirectories();

    folder = await select({
        message: 'In what folder your routes are located',
        choices: folders,
    });
} else {
    folder = appConfig.modelFolder;
}
const choices = await getFiles(folder);

let model = '';
if (choices.length) {
    model = await select({
        message: 'Select a model',
        choices: choices,
    });
} else {
    console.log('There are no models in the folder you mentioned');
}
const properties = await checkbox({
    message: 'Select which properties you want to generate: ',
    choices: Object.keys(generatorTypes).map(key => {
        return {name: key, value: key}
    }),
});

for (const p of properties) {
    switch (p) {
        case generatorTypes.router:
            await createRoute(model);
        case generatorTypes.controller:
            await createController(model);
    }
}
// await createRoute(answer);
