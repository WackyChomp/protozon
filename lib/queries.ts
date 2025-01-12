import { defineQuery } from "next-sanity";

export const IDEA_QUERY = defineQuery(
  `*[_type == 'idea' && defined(slug.current)] | order(_createdAt desc){
    _id, 
    title, 
    slug, 
    _createdAt, 
    author -> { _id, name, image, bio }, 
    views, 
    description, 
    category, 
    image,
  }`
);
