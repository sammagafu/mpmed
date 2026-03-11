import { ref, onMounted, watch } from 'vue'
import type { Ref } from 'vue'

export function useScrollAnimation(
  options: { rootMargin?: string; threshold?: number; observeRef?: Ref<HTMLElement | null> } = {}
) {
  const { rootMargin = '0px 0px -60px 0px', threshold = 0.05, observeRef } = options
  const isInView = ref(false)

  function setupObserver(el: HTMLElement) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) isInView.value = true
      },
      { threshold, rootMargin }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }

  onMounted(() => {
    const el = observeRef?.value ?? null
    if (el) setupObserver(el)
    else if (observeRef) {
      const stop = watch(
        observeRef,
        (newEl) => {
          if (newEl) setupObserver(newEl)
        },
        { immediate: true }
      )
      return () => stop()
    }
  })

  return { isInView }
}
