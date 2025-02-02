'use client'

import React, { useActionState, useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Send } from "lucide-react"

import { z } from 'zod';

import MDEditor from '@uiw/react-md-editor'
import { formSchema } from "@/lib/validation"
import { useToast } from "@/hooks/use-toast"

const IdeaForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState('');

  const { toast } = useToast();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try{
      const formValues = {
        title: formData.get('title') as string,
        description: formData.get('description') as string,
        category: formData.get('category') as string,
        link: formData.get('link') as string,
        pitch
        // : formData.get('') as string,
      }
      await formSchema.parseAsync(formValues);
      console.log(formValues);
      
    } catch(error) {
      if (error instanceof z.ZodError){
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        toast({
          title: 'Error',
          description: 'Please check your inputs carefully and try again!',
          variant: 'destructive',
        })

        return { ...prevState, error: 'Validation Failed :(', status:'Error' }
      }

      toast({
        title: 'Error',
        description: 'Unexpected error has occurred',
        variant: 'destructive',
      })

      return{
        ...prevState,
        error: 'A real error has occurred',
        status: "ERROR",
      };

    } finally{

    }
  };

  const [state, formAction, isPending] = useActionState(
    handleFormSubmit, {
      error: '',
      status: 'initial'
    }
  );
  
  return (
    <form action={formAction} className='idea_form'>
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
          id='pitch'
          preview="edit"
          height={300}
          style={{ borderRadius:20, overflow:'hidden' }}
          textareaProps={{
            placeholder: 'Describe your idea/inspiration and your motivation for sharing!'
          }}
          previewOptions={{
            disallowedElements: ['style']
          }}
        />
        {errors.link && <p className="idea_form_error">{errors.link}</p>}
      </div>

      <Button type='submit' className='idea_form_btn text-gray-600 hover:text-green-700 group'
        disabled={isPending}
      >
        <span className="underline_hover flex">
          {isPending ? 'Submitting...' : 'sUbMiT YoUr pItCh'}
          <Send className='size-12 ml-2 transition group-hover:animate-spin'/>
        </span>
      </Button>

    </form>
  )
}

export default IdeaForm