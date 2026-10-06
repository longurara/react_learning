import { useState } from 'react'

export default function PlayerImage({ src, alt, className = '' }) {
    const [hasError, setHasError] = useState(false)
    const initials = alt
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()

    if (hasError) {
        return <div className={`${className} player-placeholder`} aria-label={alt}>{initials}</div>
    }

    return <img src={src} alt={alt} className={className} onError={() => setHasError(true)} />
}
