import { Image, Spinner } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Layout from '../../Layout'
import getArtWork from '../services/getArtWork'
import { ArtWorkT } from '../types/apiResponses'
import colors from '../utils/colorPallete'

const ArtWorkDetailed = ({ route, navigation }: any) => {
  const [artWorkDetailed, setArtWorkDetailed] = useState<ArtWorkT | null>(null)

  useEffect(() => {
    getArtWork(route.params.id).then((res) => setArtWorkDetailed(res))
  }, [])

  const addToFavorites = () => {}
  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        {artWorkDetailed ? (
          <>
            <Image
              source={{
                uri: `${artWorkDetailed.img.baseUrl}/${artWorkDetailed.img.imgCode}/full/843,/0/default.jpg`,
              }}
              alt={artWorkDetailed.title}
              style={styles.image}
            />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{artWorkDetailed.title}</Text>
              <Text style={styles.artist}>{artWorkDetailed.artistTitle}</Text>

              <TouchableOpacity onPress={addToFavorites} style={styles.button}>
                <Text style={styles.buttonText}>Add to Favorites</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={[styles.button, { marginTop: 10 }]}
              >
                <Text style={styles.buttonText}>Go back</Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 470,
            }}
          >
            <Spinner size={'large'} />
          </View>
        )}
      </Layout>
    </SafeAreaView>
  )
}

export default ArtWorkDetailed

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
  },
  title: {
    color: colors.darkOnSurface,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artist: {
    color: colors.darkOnSurface,
    fontSize: 18,
    marginBottom: 10,
  },
  description: {
    color: colors.darkOnSurface,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.darkPrimary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
  },
})
