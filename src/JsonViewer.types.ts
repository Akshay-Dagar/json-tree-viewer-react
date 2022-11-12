import { CSSProperties } from 'react'
import { IAccordionProps, IAccordionStyleFunctionOrObject, IAccordionStyleProps, IAccordionStyles } from 'react-collapsible-accordion-accessible'


export interface IJsonViewerProps {
    data: Object
    styles?: IJsonViewerStyles
    jsonNodeProps?: IJsonNodeProps
}

export interface IJsonViewerStyles {
  root?: CSSProperties
  jsonNode?: IJsonNodeStyles
}

export interface IJsonNodeProps {
    title: string
    value: object
    seperator?: any
    styles?: IJsonNodeStyles
    jsonViewerStyles?: IJsonViewerStyles
    accordionProps?: IAccordionProps
}
  
export interface IJsonNodeStyles {
    root?: CSSProperties
    content?: CSSProperties
    title?: CSSProperties
    value?: CSSProperties
    seperator?: CSSProperties
    accordion?: IAccordionStyleFunctionOrObject<IAccordionStyleProps, IAccordionStyles>
}