import { useEffect, useState } from 'react'
import { Box } from '@mui/material'

/** Thin brass bar under the top edge showing reading progress. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: 2,
        zIndex: (theme) => theme.zIndex.appBar + 1,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          height: '100%',
          width: `${progress * 100}%`,
          bgcolor: 'primary.main',
          transition: 'width 0.1s linear',
        }}
      />
    </Box>
  )
}
