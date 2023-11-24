import { Image, Text, View } from '@gluestack-ui/themed'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import {
  getFavoriteRecords,
  saveFavoriteRecord,
} from '../../utils/persistDataFunc'
import { artWorkValidation } from '../../utils/validations'
import styles from './ArtWorkCard.styles'

const ArtWorkCard = ({ title, imgUrl, artistTitle }: any) => {
  const [isOnFavorites, setIsOnFavorites] = useState<boolean | null>(null)

  const checkIfOnFavorites = async () => {
    const result = await artWorkValidation(title)
    setIsOnFavorites(result)
  }
  useEffect(() => {
    checkIfOnFavorites()
  }, [title])

  const handleSetFavorites = async () => {
    if (!isOnFavorites) {
      await saveFavoriteRecord({
        title,
        artistTitle,
        imgUrl,
      })
      checkIfOnFavorites()
    } else {
      checkIfOnFavorites()

      console.log('This record is already in favs')
    }
  }

  const handleGetFavorites = async () => {
    checkIfOnFavorites()
    const favorites = await getFavoriteRecords()
    console.log(favorites)
  }

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: imgUrl }} style={styles.image} alt={title} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artistTitle}</Text>
        <TouchableOpacity
          onPress={handleSetFavorites}
          style={styles.addToFavoritesButton}
        >
          <Text style={styles.addToFavoritesText}>
            {isOnFavorites ? 'Remove from favorites' : 'Add to favorites'}
            {/* Add to favorites */}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetFavorites} style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ArtWorkCard
