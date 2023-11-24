import { Text } from '@gluestack-ui/themed'
import React from 'react'
import Layout from '../../Layout'
import colors from '../utils/colorPallete'

const Home = () => {
  return (
    <Layout>
      <Text color={colors.darkPrimary} size={'2xl'}>
        Home
      </Text>
    </Layout>
  )
}

export default Home
