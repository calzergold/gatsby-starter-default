import React from 'react'

import { Item } from '../components/Item'
import Layout from '../components/layout'

const listings = [
  {
    id: 'quay-school',
    title: 'Quay School',
    description: 'asdjkasdhasdjkhasjkasd',
  },
  {
    id: 'lisa-chambers',
    title: 'Lisa Chambers',
    description: 'ASJASJKLDJKLDJLASJKDL',
  },
]

const Listings = () => (
  <Layout>
    {listings.map(listing => <Item id="lisa-chambers" />)}
    <Item id="lisa-chambers" />
    <Item id="quay-school" />
  </Layout>
)

export default Listings
