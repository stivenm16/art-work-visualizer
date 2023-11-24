import { Image, Text, View } from '@gluestack-ui/themed'
import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../utils/colorPallete'

const ArtWorkCard = ({ title, imgUrl, artistTitle }: any) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imgUrl }} style={styles.image} alt={title} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artistTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.darkBarkground,
    borderRadius: 10,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: colors.darkOnSurface,
    fontSize: 18,
    fontWeight: 'bold',
  },
  artist: {
    color: colors.darkOnSurface,
    fontSize: 16,
    marginTop: 5,
  },
  // Add styles for other details
})

export default ArtWorkCard
