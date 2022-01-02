import React from 'react'

import './Song.less'

const Song = ({
  artist,
  name,
  lyrics,
}) => {
  return (
    <div className='song'>
      <h2 className='song-title'>{artist} - {name}</h2>
      {lyrics.split('\n\n').map((p, pIndex) => <SongParagraph text={p} key={pIndex} />)}
    </div>
  )
}

const SongParagraph = ({
  text
}) => {
  const formattedText = text.split('\n').filter(t => Boolean(t))
  return (
    <p className='song-paragraph'>
      {formattedText.map((line, lineIndex) => <SongLine key={lineIndex} text={line} />)}
    </p>
  )
}

const SongLine = ({
  text
}) => {
  return (
    <span className='song-line'>{text}<br/></span>
  )
}

export default Song