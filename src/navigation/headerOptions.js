
import React from 'react'

import AccountAndBag from './../components/organisms/accountAndBag'

export const HeaderOptions = ({navigation}) => ({
  headerRight: () => <AccountAndBag navigation={navigation} />
})