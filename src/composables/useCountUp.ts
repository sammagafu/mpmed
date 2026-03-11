import { ref, onMounted, type Ref } from 'vue'

export function useCountUp(
  end: number,
  options: { duration?: number; startOnView?: boolean; rootMargin?: string; observeRef?: Ref<HTMLElement | null> } = {}
) {
  const { duration = 2000, startOnView = false, rootMargin = '0px', observeRef } = options
  const count = ref(0)
  const hasStarted = ref(false)

  function animate() {
    if (hasStarted.value) return
    hasStarted.value = true
    const start = 0
    const startTime = performance.now()
    function step(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - (1 - progress) ** 4
      count.value = Math.floor(start + (end - start) * easeOutQuart)
      if (progress < 1) requestAnimationFrame(step)
      else count.value = end
    }
    requestAnimationFrame(step)
  }

  onMounted(() => {
    if (!startOnView) {
      animate()
      return
    }
    const el = observeRef?.value ?? null
    if (!el) {
      animate()
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) animate()
      },
      { threshold: 0.3, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  })

  return { count }
}
