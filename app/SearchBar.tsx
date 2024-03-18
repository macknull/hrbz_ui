'use client'
/** @jsxImportSource @emotion/react */
import { ChangeEvent, useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { debounce } from 'lodash'
import { Herb } from './api/herbs/Herb'
import { useRouter } from 'next/navigation'

const mapHerbToOption = (herb: Herb) => {
  return {
    label: `${herb.name} (${herb.latin_name})`,
    _id: herb._id,
  }
}

export interface SearchOption {
  label: string
  _id: string
}

async function getAllHerbs(): Promise<Herb[]> {
  const herbs = await fetch(`/api/herbs`)
  return herbs.json()
}


async function getHerbById(id: string): Promise<Herb> {
  const herbs = await fetch(`/api/herbs/${id}`)
  return herbs.json()
}

async function getHerbsByName(name: string): Promise<Herb[]> {
  const herbs = await fetch(`/api/herbs?name=${name}`)
  return herbs.json()
}

const SearchBar = () => {
  const [options, setOptions] = useState<SearchOption[]>([])

  useEffect(() => {
    getAllHerbs().then((herbs) => {
      setOptions(herbs.map(mapHerbToOption))
    })
  }, [])

  async function handleInputChange(
    event: ChangeEvent<unknown>,
    value: string
  ): Promise<void> {
    const herbs = await getHerbsByName(value)
    setOptions(herbs.map(mapHerbToOption))
  }
  const router = useRouter()


  return (
    <Autocomplete
      options={options}
      id="herb-search"
      freeSolo
      renderInput={(params) => <TextField {...params} />}
      onChange={(
        event: ChangeEvent<unknown>,
        value: string | SearchOption | null
      ) => {
        value && typeof value !== 'string' && router.push(`/herbs/${value._id}`)
      }}
      onInputChange={debounce(handleInputChange, 300)}
      sx={{ width: 600 }}
    />
  )
}

export default SearchBar
