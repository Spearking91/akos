'use client'
import React from 'react'

interface props{
    title: string
    click: any
}

const CustomButton = ({title, click}:props) => {
  return (
    <button className='btn btn-primary ' onClick={click}>{title}</button>
  )
}

export default CustomButton