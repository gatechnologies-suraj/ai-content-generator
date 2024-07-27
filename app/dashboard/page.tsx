"use client";
import React from 'react'
import SearchSection from './_component/SearchSection'
import TemplateListSection from './_component/TemplateListSection'

const page = () => {
  const [search, setSearch] = React.useState('');
  return (
    <div>
      <SearchSection setSearch={setSearch} />
      <TemplateListSection search={search} />
    </div>
  )
}

export default page