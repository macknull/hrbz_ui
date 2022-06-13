import axios from 'axios'

export interface Herb {
  _id: string
  name: string
  latin_name: string
  description: string
}

export async function getAllHerbs(): Promise<Herb[]> {
  const res = await axios.get('http://localhost:3000/herbs')
  const herbs = res.data
  return herbs
}

export async function getHerbById(id: string): Promise<Herb> {
  const res = await axios.get(`http://localhost:3000/herbs/${id}`)
  const herb = res.data
  return herb
}

export async function getHerbsByName(name: string): Promise<Herb[]> {
  const res = await axios.get(`http://localhost:3000/herbs?name=${name}`)
  const herbs = res.data
  return herbs
}
