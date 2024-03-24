
# Express.js Model to API Generator CLI

This CLI tool automates the creation of Express.js controllers and routes based on model definitions. It streamlines the process of setting up new endpoints, making it easier to rapidly develop RESTful APIs. By leveraging user-defined or default templates, the tool generates code that adheres to best practices, ensuring consistency across your project.

## Features

- **Automatic Generation:** Create controllers and routes directly from your model definitions.
- **Customizable Templates:** Use the default templates or specify your own to match your project's coding style.
- **Flexible Source Management:** Specify source, model, and template folders through CLI prompts or environment variables.
- **Interactive CLI:** An easy-to-use command-line interface guides you through the generation process.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- An existing Express.js project.

## Usage

To start the generator, run the following command from the root of your Express.js project:

```bash
npx express-generator-cli
```

Follow the interactive prompts to select or specify your model folder, choose a model, and select the properties (controllers, routes) you wish to generate.


### Installation for extra collaboration

1. Clone this repository into your project.
2. Navigate to the cloned directory and run `npm install` to install the dependencies.

### Configuration

Set up your environment variables to define default folders for your sources, models, and templates. This can be done by creating a `.env` file in your project root with the following variables:

```env
source_folder=path/to/your/source
model_folder=path/to/your/models
templates_folder=path/to/your/templates
routes_folder=path/to/your/routes
controllers_folder=path/to/your/controllers
```

Alternatively, you can specify these paths interactively through the CLI prompts.


### Example

Let's say you have a model named `user.js` in your `models` directory. Running the generator and selecting `User.js` with both controller and route properties will create a `UserController.js` and a `UserRoute.js` in your specified controller and routes directories.

## Custom Templates

To use custom templates, place your template files in the designated templates directory and specify this path when prompted. Your templates should use `$$MODEL$$` as a placeholder for the model name, which will be replaced dynamically during generation.

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request.

## License

This project is open-source and available under the MIT License.

