import { ScrollView, Spinner, Text } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import Layout from '../../Layout'
import ArtWorkCard from '../components/Card'
import getArtWorks from '../services/getArtWorks'
import { ArtWorkT } from '../types/apiResponses'
import colors from '../utils/colorPallete'

const Home = () => {
  const [artWorks, setArtWorks] = useState<ArtWorkT[] | null>(null)
  useEffect(() => {
    getArtWorks().then((res) => setArtWorks(res))
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <Layout>
          <Text color={colors.darkPrimary} size={'2xl'}>
            Home
          </Text>
          {artWorks ? (
            artWorks?.length > 0 &&
            artWorks.map((artWork) => (
              <ArtWorkCard
                title={artWork.title}
                imgUrl={`${artWork.img.baseUrl}/${artWork.img.imgCode}/full/843,/0/default.jpg`}
                artistTitle={artWork.artistTitle}
                key={artWork.img.imgCode}
              />
            ))
          ) : (
            <Spinner size={'large'} />
          )}
        </Layout>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
