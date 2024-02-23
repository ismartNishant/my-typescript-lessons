import { Box } from '@mui/material'
import BoxCompo from './components/UseContext/Box'
import ThemeContextProvider from './components/UseContext/ThemeContext'
// import { eventNames } from 'process'
// import React from 'react'
// import Destructt from './components/Advance/Destructt'
// import ExportProps from './components/Advance/ExportProps'
// import SharingArrayProps from './components/Advance/SharingArrayProps'
// // import LoggedIn from './components/UseStates/LoggedIn'
// import User from './components/UseStates/User'
// import UserTypeAssertion from './components/UseStates/UserTypeAsserrtion'
// import UserWithany from './components/UseStates/UserWithany'
// import Heading from './components/Advance/Heading'
// import Optional from './components/Advance/Optional'
// import ArrayOfobjectProp from './components/ArrayOfobjectProp'
// import Greet from './components/Greet'
// import ObjectProp from './components/ObjectProp'
// import Status from './components/Advance/Status'
// import PropButton from './components/EventsAsProps/Button'
// import ButtonWithEvent from './components/EventsAsProps/ButtonWithEvent'
// import Input from './components/EventsAsProps/Input'
const App = () => {
  // const Personnames = {
  //    first:"lisa",
  //    last:"manoban"
  // }
  // const namelist =
  // [
  //   {
  //     first:"lisa",
  //     last:"manoban"
  //   },
  //   {
  //     first:"Nancy",
  //     last:"Jwel"
  //   },
  //   {
  //     first:"Somi",
  //     last:"Jeon"
  //   },
  //   {
  //     first:"Mike",
  //     last:"D,Angelo"
  //   }
  // ]
  return (
    <Box component='div' sx={{ py: 4, textAlign: "center" }}>
      {/*
      <Greet name="lisa" age={22} isloggedIn={true}/>
      <ObjectProp name={Personnames}/> 
      <ArrayOfobjectProp names={namelist}/>
      <PropButton handleClick={ () => console.log("button clic ked ")} />
      <Input value='' handleChange={(event) => console.log("Input event changed",event)} />
      <ButtonWithEvent handleClick={ (event) => console.log("button clicked with event ",event)} />
      <Status status="loading" />
      <Optional name='lisa manoban'  isloggedIn={true} />
      <Heading>PlaceHolder text</Heading> 
      <Destructt  name='nancy' age={21} isloggedIn={true}/> 
      <ExportProps name="Nishant" age={21} />
      <SharingArrayProps names={namelist} />
      <LoggedIn />
      <User />
      <UserTypeAssertion />
      <UserWithany />  */}
      <ThemeContextProvider >
        <BoxCompo />
      </ThemeContextProvider>
    </Box>
  )
}

export default App


