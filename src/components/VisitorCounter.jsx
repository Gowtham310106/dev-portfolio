"use client"
import React, { useState, useEffect } from 'react'
import { incrementLocalCount, getLocalCount, incrementCountAPI, getCountAPI } from '../utils/visitorCounter'
import '../styles/VisitorCounter.css'

const VisitorCounter = ({ 
  showCounter = true, 
  useCountAPI = false, 
  countAPINamespace = '' 
}) => {
  const [visitCount, setVisitCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const updateCount = async () => {
      setIsLoading(true)
      
      if (useCountAPI && countAPINamespace) {
        // Use CountAPI for real-time visitor counting
        try {
          const newCount = await incrementCountAPI(countAPINamespace, 'visits')
          setVisitCount(newCount)
        } catch (error) {
          // Fallback to local storage
          const count = incrementLocalCount()
          setVisitCount(count)
        }
      } else {
        // Use local storage
        const count = incrementLocalCount()
        setVisitCount(count)
      }
      
      setIsLoading(false)
    }

    updateCount()
  }, [useCountAPI, countAPINamespace])

  if (!showCounter) return null

  return (
    <div className="visitor-counter">
      <div className="counter-content">
        <i className='bx bx-show'></i>
        <span className="counter-value">
          {isLoading ? '...' : visitCount > 999 ? '999+' : visitCount}
        </span>
      </div>
    </div>
  )
}

export default VisitorCounter
