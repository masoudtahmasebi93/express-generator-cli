import * as fs from "fs";
import {appConfig, generatorTypes, generatorTypesFolder} from "./constants.js";
import {templates} from "./templates.js";


export async function getDirectories() {
    return fs.readdirSync(appConfig.sourceFolder, {withFileTypes: true})
        .filter(item => item.isDirectory() && !excludedFolders.includes(item.name))
        .map(item => {
            return {name: item.name, value: item.name}
        });
}

export async function getFiles(folder) {
    return fs.readdirSync(appConfig.sourceFolder + '/' + folder, {withFileTypes: true})
        .filter(item => !item.isDirectory())
        .map(item => {
            return {name: item.name, value: item.name}
        })
}

export async function checkForFile(fileName, callback) {
    const exists = fs.existsSync(fileName);
    return exists;
}

export async function writeToFile(file, content) {
    try {
        if (await checkForFile(file)) {
            return fs.appendFileSync(file, content);
        } else {
            return fs.writeFileSync(file, content);
        }
    } catch (err) {
        console.error(err);
    }
}

function generatorFunction(model, type) {
    const dir = `${appConfig.sourceFolder}/${generatorTypesFolder[type]}/`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    const pureModelName = replaceExtension(model);
    // const templateString = fs.readFileSync(templates[type], 'utf8');
    const templateString = templates[type];
    let replacement = templateString.replaceAll('$$MODEL$$', capitalizeFirstLetter(pureModelName));
    replacement = replacement.replaceAll('$$model$$', pureModelName);
    return writeToFile(dir + model, replacement);
}

export async function createRoute(model) {
    return generatorFunction(model, generatorTypes.router);
}

export async function createController(model) {
    return generatorFunction(model, generatorTypes.controller);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceExtension(fileName) {
    return fileName.slice(0, fileName.lastIndexOf("."));
}
