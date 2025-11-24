// Simple Visitor Counter Utility
// Tracks unique visitors using localStorage and optionally sends to a backend

const VISITOR_COUNT_KEY = 'portfolio_visitor_count'
const VISITOR_ID_KEY = 'portfolio_visitor_id'
const VISIT_DATE_KEY = 'portfolio_last_visit'

// Generate or get visitor ID
export const getVisitorId = () => {
  if (typeof window === 'undefined') return null
  
  let visitorId = localStorage.getItem(VISITOR_ID_KEY)
  
  if (!visitorId) {
    // Generate a unique ID
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    localStorage.setItem(VISITOR_ID_KEY, visitorId)
  }
  
  return visitorId
}

// Check if this is a new visit (not just a page reload within the same session)
export const isNewVisit = () => {
  if (typeof window === 'undefined') return false
  
  const lastVisit = localStorage.getItem(VISIT_DATE_KEY)
  const now = Date.now()
  const oneHour = 60 * 60 * 1000 // 1 hour in milliseconds
  
  // Consider it a new visit if last visit was more than 1 hour ago
  if (!lastVisit || (now - parseInt(lastVisit)) > oneHour) {
    localStorage.setItem(VISIT_DATE_KEY, now.toString())
    return true
  }
  
  return false
}

// Increment visitor count (local storage version)
export const incrementLocalCount = () => {
  if (typeof window === 'undefined') return 0
  
  const isNew = isNewVisit()
  if (isNew) {
    const currentCount = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0')
    const newCount = currentCount + 1
    localStorage.setItem(VISITOR_COUNT_KEY, newCount.toString())
    return newCount
  }
  
  return parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0')
}

// Get current visitor count from local storage
export const getLocalCount = () => {
  if (typeof window === 'undefined') return 0
  return parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0')
}

// Send visitor data to backend API (optional - you need to set this up)
export const sendVisitorData = async (backendUrl = '') => {
  if (!backendUrl || typeof window === 'undefined') return
  
  try {
    const visitorId = getVisitorId()
    const isNew = isNewVisit()
    
    if (isNew && visitorId) {
      await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          visitorId,
          timestamp: new Date().toISOString(),
          pageUrl: window.location.href,
          referrer: document.referrer || 'direct',
        }),
      })
    }
  } catch (error) {
    console.error('Error sending visitor data:', error)
  }
}

// CountAPI integration (free service for visitor counting)
// Create a namespace at https://countapi.xyz/ or use their API directly
export const incrementCountAPI = async (namespace = '', key = 'visits') => {
  if (!namespace || typeof window === 'undefined') {
    // Fallback to local storage if no namespace provided
    return incrementLocalCount()
  }
  
  try {
    const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    const data = await response.json()
    return data.value || getLocalCount()
  } catch (error) {
    console.error('Error with CountAPI:', error)
    // Fallback to local storage
    return incrementLocalCount()
  }
}

// Get count from CountAPI
export const getCountAPI = async (namespace = '', key = 'visits') => {
  if (!namespace || typeof window === 'undefined') {
    return getLocalCount()
  }
  
  try {
    const response = await fetch(`https://api.countapi.xyz/get/${namespace}/${key}`)
    const data = await response.json()
    return data.value || getLocalCount()
  } catch (error) {
    console.error('Error getting count from CountAPI:', error)
    return getLocalCount()
  }
}

