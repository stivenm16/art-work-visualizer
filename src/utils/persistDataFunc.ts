import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveFavoriteRecord = async (record: any) => {
  try {
    let favorites = await getFavoriteRecords()
    if (!favorites) {
      favorites = []
    }
    favorites.push(record)
    await AsyncStorage.setItem('favoriteRecords', JSON.stringify(favorites))
  } catch (error) {
    console.error('Error saving favorite record:', error)
  }
}

export const getFavoriteRecords = async () => {
  try {
    const favorites = await AsyncStorage.getItem('favoriteRecords')
    return favorites ? JSON.parse(favorites) : null
  } catch (error) {
    console.error('Error getting favorite records:', error)
    return null
  }
}

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear()
    console.log('AsyncStorage data cleared successfully.')
  } catch (error) {
    console.error('Error clearing AsyncStorage data:', error)
  }
}
