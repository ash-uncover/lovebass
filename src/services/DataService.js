import { get } from 'lib/RestHelper'

import { actions as songActions } from 'store/data/songs'
import { actions as setActions } from 'store/data/sets'

export const getSongs = async (dispatch) => {
  dispatch(songActions.getSongsFetchFirst())
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          name: 'I Will Survive',
          artist: 'Gloria Gaynor',
          lyrics: `
            At first I was afraid, I was petrified
            Kept thinking I could never live without you by my side
            But then I spent so many nights thinking how you did me wrong
            And I grew strong
            And I learned how to get along
            And so you're back
            From outer space
            I just walked in to find you here with that sad look upon your face
            I should have changed that stupid lock, I should have made you leave your key
            If I'd known for just one second you'd be back to bother me

            Go on now, go, walk out the door
            Just turn around now
            'Cause you're not welcome anymore
            Weren't you the one who tried to hurt me with goodbye?
            You think I'd crumble?
            You think I'd lay down and die?

            Oh no, not I, I will survive
            Oh, as long as I know how to love, I know I'll stay alive
            I've got all my life to live
            And I've got all my love to give and I'll survive
            I will survive, hey, hey

            It took all the strength I had not to fall apart
            Kept trying hard to mend the pieces of my broken heart
            And I spent oh-so many nights just feeling sorry for myself
            I used to cry
            But now I hold my head up high and you see me
            Somebody new
            I'm not that chained-up little person still in love with you
            And so you felt like dropping in and just expect me to be free
            Well, now I'm saving all my lovin' for someone who's loving me

            Go on now, go, walk out the door
            Just turn around now
            'Cause you're not welcome anymore
            Weren't you the one who tried to break me with goodbye?
            You think I'd crumble?
            You think I'd lay down and die?

            Oh no, not I, I will survive
            Oh, as long as I know how to love, I know I'll stay alive
            I've got all my life to live
            And I've got all my love to give and I'll survive
            I will survive

            Oh
            Go on now, go, walk out the door
            Just turn around now
            'Cause you're not welcome anymore
            Weren't you the one who tried to break me with goodbye?
            You think I'd crumble?
            You think I'd lay down and die?

            Oh no, not I, I will survive
            Oh, as long as I know how to love, I know I'll stay alive
            I've got all my life to live
            And I've got all my love to give and I'll survive
            I will survive
            I will survive
          `
        },
        {
          name: '7 Nation Army',
          artist: 'The White Stripes',
          lyrics: `
            I'm gonna fight 'em all
            A seven nation army couldn't hold me back
            They're gonna rip it off
            Taking their time right behind my back
            And I'm talking to myself at night
            Because I can't forget
            Back and forth through my mind
            Behind a cigarette

            And the message coming from my eyes
            Says, "Leave it alone"

            Don't wanna hear about it
            Every single one's got a story to tell
            Everyone knows about it
            From the Queen of England to the Hounds of Hell
            And if I catch it coming back my way
            I'm gonna serve it to you
            And that ain't what you want to hear
            But that's what I'll do

            And the feeling coming from my bones
            Says, "Find a home"

            I'm going to Wichita
            Far from this opera forevermore
            I'm gonna work the straw
            Make the sweat drip out of every pore
            And I'm bleeding, and I'm bleeding, and I'm bleeding
            Right before the Lord
            All the words are gonna bleed from me
            And I will sing no more

            And the stains coming from my blood
            Tell me, "Go back home"
          `
        },
        {
          name: 'Hasta siempre',
          artist: 'Nathalie Cardone',
          lyrics: `
            Aprendimos a quererte
            Desde la histórica altura
            Donde el sol de tu bravura
            Le puso un cerco a la muerte

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Vienes quemando la brisa
            Con soles de primavera
            Para plantar la bandera
            Con la luz de tu sonrisa

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Tu amor revolucionario
            Te conduce a nueva empresa
            Donde esperan la firmeza
            De tu brazo libertario

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Seguiremos adelante
            Como junto a ti seguimos
            Y con Fidel, te decimos
            Hasta siempre, Comandante

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Aquí se queda la clara
            La entrañable transparencia
            De tu querida presencia
            Comandante Che Guevara

            Esa ola irá creciendo cada día que pase
            Esa ola ya no parará más
          `
        }
      ]
    })
  })
    .then((result) => {
      result.data.sort(
        (song1, song2) => {
          return song2.name.localeCompare(song1.name)
        }
      )
      dispatch(songActions.getSongsSuccess(result))
    })
    .catch((error) => {
      dispatch(songActions.getSongsFailure({ error }))
    })
}

export const getSets = async (dispatch) => {
  dispatch(setActions.getSetsFetchFirst())
  return new Promise((resolve, reject) => {
    resolve({
      data: [
        {
          date: '05-12-2021',
          place: 'Baramusik',
          songs: [
            'Hasta siempre',
            'I Will Survive',
          ]
        },
        {
          date: '12-01-2022',
          place: 'Bijou Bar',
          songs: [

          ]
        }
      ]
    })
  })
    .then((result) => {
      result.data.sort(
        (set1, set2) => {
          return set2.date.localeCompare(set1.date)
        }
      )
      dispatch(setActions.getSetsSuccess(result))
    })
    .catch((error) => {
      dispatch(setActions.getSetsFailure({ error }))
    })
}

const DataService = {
  getSongs,
  getSets
}

export default DataService
