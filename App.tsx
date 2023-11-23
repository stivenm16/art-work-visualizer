import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import {
  Box,
  GluestackUIProvider,
  Progress,
  ProgressFilledTrack,
  Text,
} from '@gluestack-ui/themed'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box
        width="100%"
        justifyContent="center"
        alignItems="center"
        height={'$full'}
        backgroundColor="lightblue"
      >
        <Text>Open up App.js to start working on your app!</Text>
        <Progress value={55} w="$80" h="$1">
          <ProgressFilledTrack h="$1" />
        </Progress>
      </Box>
    </GluestackUIProvider>
  )
}
