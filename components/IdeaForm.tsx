'use client'

import React, { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import MDEditor from '@uiw/react-md-editor'

const IdeaForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState('***Sample text to fill up space***');
  
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
        />
        {errors.title && <p className="idea_form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className='idea_form_label'>Description</label>
        <Textarea
          id='description'
          name='description'
          className="idea_form_textarea"
          required
          placeholder="Idea Description"
        />
        {errors.description && <p className="idea_form_error">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="category" className='idea_form_label'>Category</label>
        <Input
          id='category'
          name='category'
          className="idea_form_input"
          required
          placeholder="Idea Category (Ex: Tech, Lifestyle, Education, ...)"
        />
        {errors.category && <p className="idea_form_error">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="link" className='idea_form_label'>Image URL</label>
        <Input
          id='link'
          name='link'
          className="idea_form_input"
          required
          placeholder="Idea Image URL"
        />
        {errors.link && <p className="idea_form_error">{errors.link}</p>}
      </div>

      <div data-color-mode='light'>
        <label htmlFor="pitch" className='idea_form_label capitalize'>Pitch your idea</label>
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
        />
        {errors.link && <p className="idea_form_error">{errors.link}</p>}
      </div>

    </form>
  )
}

export default IdeaForm