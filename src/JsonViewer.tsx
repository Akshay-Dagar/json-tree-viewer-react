import * as React from 'react'
import JsonNode from './JsonNode'
import { IJsonViewerProps } from './JsonViewer.types'

import './JsonViewer.scss'

const JsonViewer: React.FC<IJsonViewerProps> = (props: IJsonViewerProps) => {
  return (
    <div style={props.styles?.root} className="jsonviewer-root">
        {Object.entries(props.data).map((node: [string, object], idx: number) => {
            return <JsonNode key={idx} title={node[0]} value={node[1]} seperator={props.jsonNodeProps?.seperator} styles={props.jsonNodeProps?.styles || props.styles?.jsonNode} accordionProps={props.jsonNodeProps?.accordionProps} jsonViewerStyles={props.styles} />
        })}
    </div>
  )
}

export default JsonViewer