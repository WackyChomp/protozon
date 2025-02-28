import { defineQuery } from "next-sanity";

export const IDEA_QUERY = defineQuery(
  `*[_type == 'idea' && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc){
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

export const IDEA_BY_ID_QUERY = defineQuery(
  `*[_type == 'idea' && _id == $id][0]{
    _id, 
    title, 
    slug, 
    _createdAt, 
    author -> { _id, name, username, image, bio }, 
    views, 
    description, 
    category, 
    image,
    pitch,
  }`
);