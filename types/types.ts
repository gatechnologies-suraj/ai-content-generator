export type Template = {
  name: string
  desc: string
  icon: string
  slug: string
  category: string
  aiPrompt: string
  form?: FORM[]
}

export type FORM = {
  name: string
  required?: boolean
  field: string
  label: string
}