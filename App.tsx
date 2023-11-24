import { config } from '@gluestack-ui/config' // Optional if you want to use default theme
import { GluestackUIProvider } from '@gluestack-ui/themed'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <AppNavigation />
    </GluestackUIProvider>
  )
}
