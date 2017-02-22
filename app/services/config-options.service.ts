import { Injectable } from 'angular2/core';

@Injectable()
export class ConfigOptionService {
    constructor() { } 

    paperSettings = {
        paperTitle: 'My Paper',
        apaMla: '',
        includeTitle: false,
        includeHeader: false,
        includeAbstractSummary: false,
        includeConclusion: false,
        includeReferencesWorksCited: false,
        titleInfoIncludeTitle: false,
        titleInfoIncludeName: false,
        titleInfoIncludeClass: false,
        titleInfoIncludeProfessor: false,
        titleInfoIncludeSchool: false,
        titleInfoIncludeOtherText: false,
        titleInfoAlign: '',
        titleInfoPos: '',
        headerLeft: '',
        headerLeftInput: '',
        headerRight: '',
        headerRightInput: '',
        headerDifferentFirstPage: false,
        headerUseRunningHeader: false,
        headerMoreDifferent: false,
        headerFirstLeft: '',
        headerFirstLeftInput: '',
        headerFirstRight: '',
        headerFirstRightInput: '',
        summaryOwnPage: false,
        summaryIncludeSectionLabel: false,
        bodyBetweenSections: '',
        bodyIncludeSectionLabels: false,
        conclusionOwnPage: false,
        conclusionIncludeLabel: false,
        referencesOwnPage: false,
        referencesIncludeLabel: false,
        referencesLabelInput: ''
    };

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
                            {
                                name: 'apa',
                                title: 'APA'
                            },
                            {
                                name: 'mla',
                                title: 'MLA'
                            }
                        ]
                    },
                    {
                        name: 'toInclude',
                        displayName: 'Include in Paper',
                        inputType: 'checkbox',
                        reorderable: false,
                        options: [
                            {
                                name: 'includeTitle',
                                title: 'Include Title'
                            },
                            {
                                name: 'includeHeader',
                                title: 'Include Header'
                            },
                            {
                                name: 'includeAbstractSummary',
                                title: 'Include Abstract/Summary'
                            },
                            {
                                name: 'includeConclusion',
                                title: 'Include Conclusion'
                            },
                            {
                                name: 'includeReferencesWorksCited',
                                title: 'Include References/Works Cited'
                            }
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
                            {
                                name: 'titleInfoIncludeTitle',
                                title: 'Include Title'
                            },
                            {
                                name: 'titleInfoIncludeName',
                                title: 'Include Name'
                            },
                            {
                                name: 'titleInfoIncludeClass',
                                title: 'Include Class'
                            },
                            {
                                name: 'titleInfoIncludeProfessor',
                                title: 'Include Professor'
                            },
                            {
                                name: 'titleInfoIncludeSchool',
                                title: 'Include School'
                            },
                            {
                                name: 'titleInfoIncludeOtherText',
                                title: 'Include Other Text'
                            }
                        ]
                    },
                    {
                        name: 'titleInfoAlign',
                        displayName: 'Alignment',
                        inputType: 'radio',
                        options: [
                            {
                                name: 'titleInfoAlignLeft',
                                title: 'Left'
                            },
                            {
                                name: 'titleInfoAlignCenter',
                                title: 'Center'
                            },
                            {
                                name: 'titleInfoAlignRight',
                                title: 'Right'
                            }
                        ]
                    },
                    {
                        name: 'titleInfoPos',
                        displayName: 'Information Location',
                        inputType: 'radio',
                        options: [
                            {
                                name: 'titleInfoSeparatePage',
                                title: 'Separate Title Page'
                            },
                            {
                                name: 'titleInfoTopFirstPage',
                                title: 'At Top of First Page'
                            }
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
                        name: 'headerLeft',
                        displayName: 'Left',
                        inputType: 'radioInput',
                        options: [
                            {
                                name: 'headerLeftPaperTitle',
                                title: 'Paper Title',
                                type: 'text'
                            },
                            {
                                name: 'headerLeftPageNumber',
                                title: 'Page Number',
                                type: 'none'
                            },
                            {
                                name: 'headerLeftOtherText',
                                title: 'Other Text',
                                type: 'text'
                            }
                        ]
                    },
                    {
                        name: 'headerRight',
                        displayName: 'Right',
                        inputType: 'radioInput',
                        options: [
                            {
                                name: 'headerRightPaperTitle',
                                title: 'Paper Title',
                                type: 'text'
                            },
                            {
                                name: 'headerRightPageNumber',
                                title: 'Page Number',
                                type: 'none'
                            },
                            {
                                name: 'headerRightOtherText',
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
                                name: 'headerDifferentFirstPage',
                                displayName: 'Different First Page',
                                inputType: 'toggle'
                            },
                            {
                                name: 'headerUseRunningHeader',
                                displayName: 'Use "Running head:"',
                                inputType: 'toggle',
                                hideUntil: [
                                    'firstPageDifferent'
                                ]
                            },
                            {
                                name: 'headerMoreDifferent',
                                displayName: 'More Differences',
                                inputType: 'toggle',
                                hideUntil: [
                                    'firstPageDifferent'
                                ]
                            },
                            {
                                name: 'headerFirstLeft',
                                displayName: 'First Page Left',
                                inputType: 'radioInput',
                                hideUntil: [
                                    'firstPageDifferent',
                                    'moreDifferent'
                                ],
                                options: [
                                    {
                                        name: 'headerFirstLeftPaperTitle',
                                        title: 'Paper Title',
                                        type: 'text'
                                    },
                                    {
                                        name: 'headerFirstLeftPageNumber',
                                        title: 'Page Number',
                                        type: 'none'
                                    },
                                    {
                                        name: 'headerFirstLeftOtherText',
                                        title: 'Other Text',
                                        type: 'text'
                                    }
                                ]
                            },
                            {
                                name: 'headerFirstRight',
                                displayName: 'First Page Right',
                                inputType: 'radioInput',
                                hideUntil: [
                                    'firstPageDifferent',
                                    'moreDifferent'
                                ],
                                options: [
                                    {
                                        name: 'headerFirstRightPaperTitle',
                                        title: 'Paper Title',
                                        type: 'text'
                                    },
                                    {
                                        name: 'headerFirstRightPageNumber',
                                        title: 'Page Number',
                                        type: 'none'
                                    },
                                    {
                                        name: 'headerFirstRightOtherText',
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
                        name: 'summaryOwnPage',
                        optionName: 'On its Own Page',
                        displayName: 'Separate Page',
                        inputType: 'toggle'
                    },
                    {
                        name: 'summaryIncludeSectionLabel',
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
                        name: 'bodyBetweenSections',
                        displayName: 'Between Sections',
                        inputType: 'radio',
                        options: [
                            {
                                name: 'bodyBlankLineBetweenSections',
                                title: 'Blank Line Between Each Section'
                            },
                            {
                                name: 'bodyEachSectionOwnPage',
                                title: 'Each Section On Its Own Page'
                            },
                            {
                                name: 'bodyNoSpaceBetweenSections',
                                title: 'No Space Between Sections'
                            }
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