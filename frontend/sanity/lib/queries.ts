import { defineQuery } from 'next-sanity'

export const settingsQuery = defineQuery(`*[_type == "settings"][0]`)

export const allCollaboratorsQuery = defineQuery(`*[_type == "colaborator"] | order(_updatedAt asc) {
  _id,
  name,
  "role": role[$locale],
  "description": description[$locale],
  "quote": quote[$locale],
  photoUrl
}`)

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{firstName, lastName, picture},
`
export const projectFields = /* groq */ `
  _id,
  _type,
  _updatedAt,
  "status": select(_id in path("drafts.**") => "draft", "published"),
  "title": title[$locale],
  "slug": slug.current,
  "category": category[$locale],
  "area": area,
  "year": year,
  "location": location[$locale],
  "story": story[]{
    "en": en,
    "es": es
  },
  "portfolio_image": portfolio_image,
  "other_projects_image": other_projects_image,
  "project_page_image": project_page_image,
  gallery_media[]{
    src,
    alt,
    gif,
    mp4,
    position
  },
  information_media[]{
    src,
    alt,
    gif,
    mp4,
    position
  },
  gridColumns,
  grid_variant,
  model3d_url,
  "date": coalesce(date, _updatedAt)
`
const linkReference = /* groq */ `
  _type == "link" => {
    "page": page->slug.current,
    "post": post->slug.current
  }
`

const linkFields = /* groq */ `
  link {
      ...,
      ${linkReference}
      }
`
const customersFields = /* groq */`
 company,
 contact,
 logo
`
// Consulta GROQ combinada: Traemos el proyecto Y la configuración global al mismo tiempo
export const metadataProjectQuery = /* groq */ `{
    "project": *[_type == "project" && slug.current == $slug][0] {
      "title": title[$locale],
      "story": story[]{
        "en": en,
        "es": es
      },
    },
    "settings": *[_type == "settings"][0] {
      "siteTitle": title[$locale],
      ogImage
    }
  }`

export const metadataPageQuery = /* groq */ `{
    "page": *[_type == "page" && slug.current == $slug][0] {
      "title": title[$locale],
      "description": description[$locale],
      "ogImage": ogImage
    },
    "settings": *[_type == "settings"][0] {
      "siteTitle": title[$locale],
      ogImage
    }
  }`

export const getPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == $slug][0]{
    _id,
    _type,
    name,
    slug,
    heading,
    subheading,
    "pageBuilder": pageBuilder[]{
      ...,
      _type == "callToAction" => {
        ...,
        button {
          ...,
          ${linkFields}
        }
      },
      _type == "infoSection" => {
        content[]{
          ...,
          markDefs[]{
            ...,
            ${linkReference}
          }
        }
      },
    },
  }
`)

export const sitemapData = defineQuery(`
  *[_type == "page" || _type == "post" && defined(slug.current)] | order(_type asc) {
    "slug": slug.current,
    _type,
    _updatedAt,
  }
`)

export const allPostsQuery = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    ${postFields}
  }
`)

export const morePostsQuery = defineQuery(`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    ${postFields}
  }
`)

export const postQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug] [0] {
    content[]{
    ...,
    markDefs[]{
      ...,
      ${linkReference}
    }
  },
    ${postFields}
  }
`)

export const postPagesSlugs = defineQuery(`
  *[_type == "post" && defined(slug.current)]
  {"slug": slug.current}
`)

export const pagesSlugs = defineQuery(`
  *[_type == "page" && defined(slug.current)]
  {"slug": slug.current}
`)

export const allCustomers = defineQuery(`
    *[_type == "customer"] {
    ${customersFields}
    }
  `)

export const allProjectsQuery = defineQuery(`
  * [_type == "project" && defined(slug.current)] | order(order asc) {
    ${projectFields}
}
`)
export const moreProjectsQuery = defineQuery(`
  * [_type == "project" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc)[0...$limit] {
    ${projectFields}
}
`)

export const projectQuery = defineQuery(`
  * [_type == "project" && slug.current == $slug][0] {
    ${projectFields}
}
`)