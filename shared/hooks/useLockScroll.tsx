import { useEffect } from "react"

const useLockScroll = (isLocked: boolean) => {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLocked])
}

export default useLockScroll
