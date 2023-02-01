# CKEditor 4 Plugin - Cowriter 🤖

[![Release](https://github.com/netresearch/ckeditor-cowriter/actions/workflows/release.yml/badge.svg)](https://github.com/netresearch/ckeditor-cowriter/actions/workflows/release.yml)

This plugin generates content with the help of artificial intelligence. It is based on the [CKEditor 4](http://ckeditor.com/). It uses the [OpenAI API](https://beta.openai.com/) to generate text.

## Installation

You can find the plugin in the CKEditor plugin directory: [https://ckeditor.com/cke4/addon/cowriter](https://ckeditor.com/cke4/addon/cowriter).

### Installation with npm

1. Install the plugin with npm:

        npm install ckeditor-cowriter   

2. Enable the plugin by using the `extraPlugins` configuration setting. For example:

        config.extraPlugins = 'cowriter';

### Installation from CDN

1. Add the following script tag to your HTML page:

        <script src="https://netresearch.github.io/ckeditor-cowriter/plugin.js"></script>

2. Enable the plugin by using the `extraPlugins` configuration setting. For example:

        config.extraPlugins = 'cowriter';

3. More information about the CDN can be found [here](https://cdn.ckeditor.com/).

### Installation from source

1. Download the [latest release](https://github.com/netresearch/ckeditor-cowriter/releases) of the plugin.
2. Extract the contents of the archive into the CKEditor 4 plugins directory.
3. Enable the plugin by using the `extraPlugins` configuration setting. For example:

        config.extraPlugins = 'cowriter';

## Configuration

You need to define your OpenAI credentials.

    ```javascript
        const OPENAI_KEY = 'YOUR-KEY'
        const OPENAI_ORG = 'org-YOUR-ORG-KEY'
    ```

## Usage

1. Click on the `Cowriter` button in the toolbar.
2. Enter a prompt.
3. Click on the `Generate` button.
4. The generated text will be inserted into the editor.

## License

Licensed under the terms of the [GNU General Public License](http://www.gnu.org/licenses/gpl.html), version 3 or later.

## Credits

- All Contributors
- This plugin is based on the [CKEditor 4 Plugin - GPT-3](https://github.com/netresearch/ckeditor-cowriter/releases) by [Netresearch](https://www.netresearch.de/).
- It uses Flaticon's [document](https://www.flaticon.com/) icon.

## TODO

- [x] Add documentation
- [x] Add configuration options
- [x] Add support for other OpenAI APIs
- [ ] Add tests
- [ ] Add support for other AI APIs

## Contributing

We welcome contributions to this project. Please see our [contribution guidelines](CONTRIBUTING.md) for details.

### Security

If you discover any security related issues, please email <developer@netresearch.de> instead of using the issue tracker!

### Contact

[Netresearch](https://www.netresearch.de/), the company behind this plugin, is a leading European provider of digital solutions and services for the eCommerce industry. We are a team of eCommerce experts, developers, designers, project managers, and consultants. We are passionate about eCommerce and we love to share our knowledge with the community.

> [Twitter](https://twitter.com/netresearch) | [LinkedIn](https://www.linkedin.com/company/netresearch/) | [Facebook](https://www.facebook.com/netresearch/) | [Xing](https://www.xing.com/companies/netresearchdttgmbh) | [YouTube](https://www.youtube.com/@netresearch)
