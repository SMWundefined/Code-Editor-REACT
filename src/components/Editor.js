import React, {useState} from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
//xml is essentially the same as html in this scenario
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt} from '@fortawesome/free-solid-svg-icons'

import { Controlled as ControlledEditor} from 'react-codemirror2'


export default function Editor(props) {
    const{
        language,
        displayName,
        value,
        onChange
    } = props 

    const [open, setOpen] = useState(true)

    function handleChange(editor, data, value){
        onChange(value)
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button  onClick ={() => setOpen (prevOpen => !prevOpen)}
                type ="button"
                className ="expand-collapse-btn">
                <FontAwesomeIcon icon ={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
            <ControlledEditor 
            onBeforeChange ={handleChange}
            value={value}
            className="code-mirror-wrapper"
            options={{
                lineWrapping: true,
                lint: true,
                mode: language,
                theme: 'material',
                lineNumbers: true
            }}
            />
        </div>

        

    )
}
