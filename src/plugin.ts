// @ts-nocheck
export { }



// Add CKeditor 4 dialog plugin with one input field "cowriter" which add text from openai api.
CKEDITOR.dialog.add('cowriterDialog', function (editor) {

    // Settings
    const model = 'text-davinci-003' || CKEDITOR.dialog.getCurrent().getValueOf('tab-advanced', 'model')
    const max_tokens = 4000 || CKEDITOR.dialog.getCurrent().getValueOf('tab-advanced', 'max_tokens')

    return {
        title: 'Cowriter',
        minWidth: 400,
        minHeight: 70,
        contents: [
            {
                id: 'tab-basic',
                label: editor.lang.cowriter.tabGeneral || 'General',
                accessKey: 'C',
                elements: [
                    {
                        type: 'textarea',
                        id: 'cowriter',
                        label: 'Worüber soll ich schreiben?',
                        rows: 6,
                        validate: CKEDITOR.dialog.validate.notEmpty("Deine Beschreibung darf nicht leer sein."),
                        setup: function (element) {
                            this.setValue(element.getText())
                        },
                        commit: async function (element) {
                            // Show loading animation
                            element.setText(` Loading … `)

                            // Get text from openai api
                            const response = await fetch('https://api.openai.com/v1/completions', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'Bearer ' + OPENAI_KEY,
                                    'OpenAI-Organization': OPENAI_ORG
                                },
                                // @see https://platform.openai.com/docs/models/content-filter
                                body: JSON.stringify({
                                    prompt: this.getValue(), // Text to complete
                                    max_tokens: max_tokens, // 1 to 4000
                                    model: model, // 'text-davinci-003', 'text-curie-001', 'text-babbage-001', 'text-ada-001'
                                    temperature: 0.9, // 0.0 is equivalent to greedy sampling
                                    top_p: 1, // 1.0 is equivalent to greedy sampling
                                    n: 1, // Number of results to return
                                    frequency_penalty: 0, // 0.0 is equivalent to no penalty
                                    presence_penalty: 0, // 0.0 is equivalent to no penalty
                                })
                            })
                            const data = await response.json()

                            // Set text from openai api to element in editor if it is not empty.
                            if (data.choices[0]?.text)
                                element.setText(data.choices[0]?.text)
                            else
                                element.setText(' Error: ' + data.error)

                        }
                    },
                ]
            },
            {
                id: 'tab-advanced',
                label: editor.lang.cowriter.tabAdbvanced || 'Advanced',
                elements: [
                    // Add select field with options to choose the model from openai api.
                    {
                        type: 'select',
                        id: 'model',
                        title: editor.lang.cowriter.modelSelction || 'Model',
                        label: editor.lang.cowriter.modelSelctionHelp || 'Model',
                        default: 'text-davinci-003',
                        items: [
                            ['Davinci', 'text-davinci-003'],
                            ['Curie', 'text-curie-001'],
                            ['Babbage', 'text-babbage-001'],
                            ['Ada', 'text-ada-001']
                        ],
                        setup: function (element) {
                            this.setValue(element.getText())
                        }
                    },
                    // Add input range field to enter the text length.
                    {
                        type: 'text',
                        inputStyle: 'width: 50px',
                        id: 'max_tokens',
                        label: 'Wie viele Wörter sollen es werden?',
                        default: max_tokens,
                        validate: () => CKEDITOR.dialog.validate.regex(/^[1-9][0-9]{0,2}$/, "Deine Eingabe muss eine Zahl zwischen 1 und 1000 sein."),
                        setup: function (element) {
                            // Set type to number
                            element.setAttribute('title', 'number')
                            this.setValue(element.getText())
                        },
                        commit: function (element) {
                            element.setAttribute('type', 'number')
                        }
                    },

                ]
            }
        ],
        onOk: function () {
            var dialog = this
            var cowriter = editor.document.createElement('cowriter')
            dialog.commitContent(cowriter)
            editor.insertElement(cowriter)
        }
    }
})

// Add CKeditor 4 button plugin.
CKEDITOR.plugins.add('cowriter', {
    icons: 'cowriter',
    lang: ['en', 'de'],
    init: function (editor) {
        editor.addCommand('cowriter', new CKEDITOR.dialogCommand('cowriterDialog'))
        editor.ui.addButton('Cowriter', {
            label: 'Co-Writer',
            command: 'cowriter',
            toolbar: 'insert',
            icon: './icons/cash-register.svg'
        })
    }
})

// Add CKeditor 4 button shortcut "ALT + C".
CKEDITOR.config.keystrokes = [
    [CKEDITOR.ALT + 67, 'cowriter']
]

CKEDITOR.plugins.setLang('cowriter', 'de', {
    tabAdbvanced: 'Erweitert',
    modelSelction: 'Modell',
    modelSelctionHelp: 'Wählen Sie das Modell aus, das Sie verwenden möchten.',
})
