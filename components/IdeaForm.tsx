'use client'

import React, { useState } from "react"
import { Input } from "./ui/input"

const IdeaForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  return (
    <form action={()=>{}} className='idea_form'>
      <div>IdeaForm Goes Here Unga Bunga</div>

      <div>
        <label htmlFor="title" className='idea_form_label'>Title</label>
        <Input
          id='title'
          name='title'
          className="idea_form_input"
          required
          placeholder="Idea Title"
        >
          {errors.title && <p className="idea_form_error">{errors.title}</p>}
        </Input>
      </div>

    </form>
  )
}

export default IdeaForm