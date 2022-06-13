import { ChangeEvent, SyntheticEvent, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Autocomplete from '@mui/material/Autocomplete'
import Container from '@mui/material/Container'
import { Typography } from '@mui/material'
import Router from 'next/router'
import { debounce } from 'lodash'
import { getHerbsByName } from '../lib/herbs'

interface SearchOption {
  label: string
  _id: string
}

const Home: NextPage<string, never> = () => {
  const [options, setOptions] = useState([
    {
      label: 'rumianek zwyczajny (matricaria chamomila)',
      _id: '62a3adfa142940dd012a3a52',
    },
  ])

  async function handleInputChange(
    event: ChangeEvent<unknown>,
    value: string
  ): Promise<void> {
    const herbs = await getHerbsByName(value)
    setOptions(
      herbs.map((herb) => {
        return {
          label: `${herb.name} (${herb.latin_name})`,
          _id: herb._id,
        }
      })
    )
  }

  return (
    <div>
      <Head>
        <title>HRBZ.org - Encyclopedia herbam</title>
      </Head>
      <Container maxWidth="md">
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h4">search for a herb</Typography>
          <Autocomplete
            options={options}
            id="herb-search"
            freeSolo
            renderInput={(params) => <TextField {...params} />}
            onChange={(
              event: ChangeEvent<unknown>,
              value: string | SearchOption | null
            ) => {
              value &&
                typeof value !== 'string' &&
                Router.push(`/herbs/${value._id}`)
            }}
            onInputChange={debounce(handleInputChange, 300)}
            sx={{ width: 600 }}
          />
        </Stack>
      </Container>
    </div>
  )
}

export default Home
