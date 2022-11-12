import * as React from 'react'
import Accordion from 'react-collapsible-accordion-accessible'
import JsonViewer from './JsonViewer'
import { IJsonNodeProps } from './JsonViewer.types'
import { FaAngleRight } from "react-icons/fa"

import './JsonViewer.scss'

const JsonNode:React.FC<IJsonNodeProps> = (props: IJsonNodeProps) => {

  const accordionIcon = props.accordionProps?.icon || FaAngleRight

  return (
    <div style={props.styles?.root} className='jsonnode-root'>
      {checkIfObjectOrArray(props.value) ? 
        <Accordion {...{...props.accordionProps, title: props.title || "", styles: props.accordionProps?.styles || props.styles?.accordion, icon: accordionIcon}}>
          <JsonViewer data={props.value || {}} jsonNodeProps={props} styles={props.jsonViewerStyles}/>
        </Accordion>
        : 
        <div style={props.styles?.content} className='jsonnode-content'>
          <span style={props.styles?.title} className='jsonnode-title'>{props.title}</span>
          {props.seperator && <span style={props.styles?.seperator} className='jsonnode-seperator'>{props.seperator}</span>}
          <span style={props.styles?.value} className='jsonnode-value'>{getObjectValueAsString(props.value)}</span>
        </div>
      }
    </div>
  )
}

const checkIfObjectOrArray = (value: any) => {  
  return value && typeof value === 'object' && !(checkIfOtherObject(value)) && Object.keys(value)?.length
}

const checkIfOtherObject = (value: any) => {
  return value && typeof value === 'object' && (value instanceof Date || value instanceof Boolean || value instanceof Number || value instanceof String)
}

const getObjectValueAsString = (value: any) => {
  if (typeof value === 'object' && value) {
    if (value instanceof Date || value instanceof Boolean || value instanceof Number || value instanceof String) {
      return value.toString()
    }

    else if ((value instanceof Object || value instanceof Array) && Object.keys(value)?.length === 0) {
      return value instanceof Array ? "[]" : "{}"
    }
  }
  return value === undefined ? "undefined" : value ? value.toString() : "null"
}

JsonNode.defaultProps = {
  seperator: ':'
}

export default JsonNode