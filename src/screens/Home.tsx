import { ScrollView, Spinner, Text } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { TouchableOpacity } from 'react-native'
import Layout from '../../Layout'
import ArtWorkCard from '../components/ArtWorkCard/ArtWorkCard'
import getArtWorks from '../services/getArtWorks'
import { ArtWorkT } from '../types/apiResponses'
import colors from '../utils/colorPallete'
import { clearAllData } from '../utils/persistDataFunc'

const Home = () => {
  const [artWorks, setArtWorks] = useState<ArtWorkT[] | null>(null)
  useEffect(() => {
    getArtWorks().then((res) => setArtWorks(res))
  }, [])

  const clearAsyncStorage = () => {
    clearAllData()
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <Layout>
          <Text color={colors.darkPrimary} size={'2xl'}>
            Home
          </Text>

          <TouchableOpacity onPress={clearAsyncStorage}>
            <Text>Clear</Text>
          </TouchableOpacity>
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
