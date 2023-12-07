import React from 'react'

const Country = ({...country}) => {
    const {name:{common}} = country
  return (
    <div>
      {common}
    </div>
  )
}

export default Country
