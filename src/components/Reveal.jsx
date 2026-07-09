import { useReveal } from '../hooks/useReveal'

function Reveal({ children, className = '', delay = 0, as: Component = 'div' }) {
  const [ref, isVisible] = useReveal()

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Component>
  )
}

export default Reveal
