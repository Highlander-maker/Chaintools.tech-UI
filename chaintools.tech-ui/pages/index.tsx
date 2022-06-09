import type { NextPage } from 'next'
import WalletLoader from 'components/WalletLoader'
import WelcomeLoader from 'components/WelcomeLoader'

const Home: NextPage = () => {

  return (
    <>
    <WelcomeLoader/>
    <WalletLoader/>
    </>
  )
}

export default Home
