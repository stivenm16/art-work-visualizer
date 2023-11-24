import { ScrollView, Text } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import Layout from '../../Layout'
import getArtWorks from '../services/getArtWorks'
import { ArtWorkT } from '../types/apiResponses'
import colors from '../utils/colorPallete'

const Home = () => {
  const [artWorks, setArtWorks] = useState<ArtWorkT[] | null>(null)
  useEffect(() => {
    getArtWorks().then((res) => setArtWorks(res))
  }, [])

  return (
    <ScrollView>
      <Layout>
        <Text color={colors.darkPrimary} size={'2xl'}>
          Home
        </Text>
        {artWorks &&
          artWorks?.length > 0 &&
          artWorks.map((artWork) => (
            <Image
              source={{
                uri: `${artWork.img.baseUrl}/${artWork.img.imgCode}/full/843,/0/default.jpg`,
              }}
              style={{ width: 200, height: 200, marginVertical: 10 }}
            />
          ))}
      </Layout>
    </ScrollView>
  )
}

export default Home
