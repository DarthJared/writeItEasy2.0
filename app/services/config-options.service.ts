import { Injectable } from 'angular2/core';

@Injectable()
export class ConfigOptionService {
    constructor() { } 

    options = {
        sections: [
            { 
                name: 'general',
                title: 'General',                
                hideUntil: 'none',
                fields: [
                    {
                        name: 'paperTitle',
                        displayName: 'Title of Paper',
                        inputType: 'text',
                        placeholder: 'Enter paper title here...'
                    },
                    {
                        name: 'apaMla',
                        displayName: 'APA or MLA',
                        inputType: 'radio',
                        options: [
                            'APA',
                            'MLA'
                        ]
                    },
                    {
                        name: 'toInclude',
                        displayName: 'Include in Paper',
                        inputType: 'checkbox',
                        reorderable: false,
                        options: [
                            'Include Title',
                            'Include Header',
                            'Include Abstract/Summary',
                            'Include Conclusion',
                            'Include References/Works Cited'
                        ]
                    }
                ]
            },
            { 
                name: 'titleInfo',
                title: 'Title Info',
                hideUntil: 'Include Title',
                fields: [
                    {
                        name: 'titleInfoInclude',
                        displayName: 'Include with Title Info',
                        inputType: 'checkbox',
                        reorderable: true,
                        options: [
                            'Include Title',
                            'Include Name',
                            'Include Class',
                            'Include Professor',
                            'Include School',
                            'Include Other Text'
                        ]
                    },
                    {
                        name: 'titleInfoAlign',
                        displayName: 'Alignment',
                        inputType: 'radio',
                        options: [
                            'Left',
                            'Center',
                            'Right'
                        ]
                    },
                    {
                        name: 'titleInfoPos',
                        displayName: 'Information Location',
                        inputType: 'radio',
                        options: [
                            'Separate Title Page',
                            'At Top of First Page'
                        ]
                    }
                ]
            },
            { 
                name: 'header',
                title: 'Header',
                hideUntil: 'Include Header',
                fields: [                    
                    {
                        name: 'left',
                        displayName: 'Left',
                        inputType: 'radioInput',
                        options: [
                            {
                                title: 'Paper Title',
                                type: 'text'
                            },
                            {
                                title: 'Page Number',
                                type: 'none'
                            },
                            {
                                title: 'Other Text',
                                type: 'text'
                            }
                        ]
                    },
                    {
                        name: 'right',
                        displayName: 'Right',
                        inputType: 'radioInput',
                        options: [
                            {
                                title: 'Paper Title',
                                type: 'text'
                            },
                            {
                                title: 'Page Number',
                                type: 'none'
                            },
                            {
                                title: 'Other Text',
                                type: 'text'
                            }
                        ]
                    },
                    {
                        name: 'firstPageConfig',
                        displayName: 'First Page',
                        inputType: 'newSection',
                        fields: [
                            {
                                name: 'firstPageDifferent',
                                displayName: 'Different First Page',
                                inputType: 'toggle'
                            },
                            {
                                name: 'useRunningHead',
                                displayName: 'Use "Running head:"',
                                inputType: 'toggle',
                                hideUntil: [
                                    'firstPageDifferent'
                                ]
                            },
                            {
                                name: 'moreDifferent',
                                displayName: 'More Differences',
                                inputType: 'toggle',
                                hideUntil: [
                                    'firstPageDifferent'
                                ]
                            },
                            {
                                name: 'firstLeft',
                                displayName: 'First Page Left',
                                inputType: 'radioInput',
                                hideUntil: [
                                    'firstPageDifferent',
                                    'moreDifferent'
                                ],
                                options: [
                                    {
                                        title: 'Paper Title',
                                        type: 'text'
                                    },
                                    {
                                        title: 'Page Number',
                                        type: 'none'
                                    },
                                    {
                                        title: 'Other Text',
                                        type: 'text'
                                    }
                                ]
                            },
                            {
                                name: 'firstRight',
                                displayName: 'First Page Right',
                                inputType: 'radioInput',
                                hideUntil: [
                                    'firstPageDifferent',
                                    'moreDifferent'
                                ],
                                options: [
                                    {
                                        title: 'Paper Title',
                                        type: 'text'
                                    },
                                    {
                                        title: 'Page Number',
                                        type: 'none'
                                    },
                                    {
                                        title: 'Other Text',
                                        type: 'text'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: 'summaryAbstract',
                title: 'Summary / Abstract',
                hideUntil: 'Include Abstract/Summary',
                fields: [
                    {
                        name: 'summaryAbstractOwnPage',
                        optionName: 'On its Own Page',
                        displayName: 'Separate Page',
                        inputType: 'toggle'
                    },
                    {
                        name: 'summaryAbstractIncludeLabel',
                        displayName: 'Section Label',
                        optionName: 'Include Section Label',
                        inputType: 'toggle'
                    }
                ]
            },
            {
                name: 'body',
                title: 'Body',
                hideUntil: 'none',
                fields: [
                    {
                        name: 'betweenSections',
                        displayName: 'Between Sections',
                        inputType: 'radio',
                        options: [
                            'Blank Line Between Each Section',
                            'Each Section On Its Own Page',
                            'No Space Between Sections'
                        ]
                    },
                    {
                        name: 'bodyIncludeSectionLabels',
                        displayName: 'Section Labels',
                        optionName: 'Include Section Labels',
                        inputType: 'toggle'
                    }
                ]
            },
            {
                name: 'conclusion',
                title: 'Conclusion',
                hideUntil: 'Include Conclusion',
                fields: [
                    {
                        name: 'conclusionOwnPage',
                        displayName: 'Separate Page',
                        optionName: 'On its Own Page',
                        inputType: 'toggle'
                    },
                    {
                        name: 'conclusionIncludeLabel',
                        displayName: 'Section Label',
                        optionName: 'Include Section Label',
                        inputType: 'toggle'
                    }
                ]
            },
            {
                name: 'referencesWorksCited',
                title: 'References / Works Cited',
                hideUntil: 'Include References/Works Cited',
                fields: [
                    {
                        name: 'referencesOwnPage',
                        displayName: 'Separate Page',
                        optionName: 'On its Own Page',
                        inputType: 'toggle'
                    },
                    {
                        name: 'referencesIncludeLabel',
                        displayName: 'Section Label',
                        optionName: 'Include Section Label',
                        inputType: 'toggleInput',
                        options: [
                            {
                                title: 'Include Section Label',
                                placeholder: 'Enter Section Label here...',
                                type: 'text'
                            }
                        ]
                    }
                ]
            }
        ]
    }
}