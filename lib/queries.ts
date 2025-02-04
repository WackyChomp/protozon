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

export const IDEA_VIEWS_QUERY = defineQuery(
  `*[_type == 'idea' && _id == $id][0]{
    _id, views
  }
`)

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
  `*[_type == 'author' && id == $id][0]{
   _id,
   id,
   name,
   username,
   email,
   image,
   bio
  }
`)

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == 'author' && _id == $id][0]{
   _id,
   id,
   name,
   username,
   email,
   image,
   bio
  }
`)