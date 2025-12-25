'use client'

import { useEffect, useRef, useState } from 'react'
import './counter.css'

type CounterProps = {
  end: number
  duration?: number 
}

export default function Counter({ end, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true

          let start = 0
          const increment = end / (duration / 16)

          const animate = () => {
            start += increment
            if (start < end) {
              setCount(Math.ceil(start))
              requestAnimationFrame(animate)
            } else {
              setCount(end)
            }
          }

          animate()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [end, duration])

  return <span className='count-number' ref={ref}>{count}</span>
}
