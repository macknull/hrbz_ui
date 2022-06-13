/** @jsxImportSource @emotion/react */
import { ChangeEvent, useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import { debounce } from 'lodash'
import Router from 'next/router'
import { getAllHerbs, getHerbsByName, Herb } from '../lib/herbs'

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
        value && typeof value !== 'string' && Router.push(`/herbs/${value._id}`)
      }}
      onInputChange={debounce(handleInputChange, 300)}
      sx={{ width: 600 }}
    />
  )
}

export default SearchBar
