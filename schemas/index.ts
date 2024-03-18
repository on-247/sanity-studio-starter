import annotationLinkExternal from './annotations/linkExternal'
import annotationLinkInternal from './annotations/linkInternal'
import annotationLinkAnchor from './annotations/linkAnchor'
const annotations = [
    annotationLinkAnchor,
    annotationLinkExternal,
    annotationLinkInternal
]

import page from './documents/page'
import form from './documents/form'
const documents = [page, form]

import home from './singletons/home'
import settings from './singletons/settings'
const singletons = [home, settings]

import body from './blocks/body'
const blocks = [body]

import accordionGroup from './objects/module/fragment/accordionGroup'
import accordionBody from './objects/module/fragment/accordionBody'
import articleGroup from './objects/module/fragment/articleGroup'
import articleBody from './objects/module/fragment/articleBody'
import footerAbout from './objects/global/footerAbout'
import formCheckbox from './objects/form/checkbox'
import formInput from './objects/form/input'
import formRadio from './objects/form/radio'
import formStep from './objects/form/step'
import formValue from './objects/form/fragment/value'
import linkAnchor from './objects/global/linkAnchor'
import linkExternal from './objects/global/linkExternal'
import linkInternal from './objects/global/linkInternal'
import linkCta from './objects/global/linkCta'
import links from './objects/global/links'
import menu from './objects/global/menu'
import moduleAccordion from './objects/module/accordion'
import moduleArticle from './objects/module/article'
import pageSection from './objects/global/pageSection'
import seo from './objects/seo/seo'
import seoHome from './objects/seo/home'
import seoPage from './objects/seo/page'
import seoTitle from './objects/seo/fragment/title'
import seoDescription from './objects/seo/fragment/description'
import seoImage from './objects/seo/fragment/image'
const objects = [
    accordionGroup,
    accordionBody,
    articleGroup,
    articleBody,
    footerAbout,
    formCheckbox,
    formInput,
    formRadio,
    formStep,
    formValue,
    linkAnchor,
    linkExternal,
    linkInternal,
    linkCta,
    links,
    menu,
    pageSection,
    moduleAccordion,
    moduleArticle,
    seo,
    seoHome,
    seoPage,
    seoTitle,
    seoDescription,
    seoImage
]

export const schemaTypes = [...annotations, ...singletons, ...objects, ...blocks, ...documents]