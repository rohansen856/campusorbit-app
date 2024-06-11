export function AnimatedButton({
  className,
  href,
  onClick,
  children,
  px,
  white,
}: any) {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`
  const spanClasses = "relative z-10"

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  )

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      <ButtonGradient />
    </a>
  )

  return href ? renderLink() : renderButton()
}

const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
      />
    </svg>
    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
          />
          <polygon
            fill="url(#btn-bottom)" // mentioned in ButtonGradient.jsx
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
          />
        </>
      )}
    </svg>
    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // mentioned in ButtonGradient.jsx
        strokeWidth="2"
        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
      />
    </svg>
  </>
)

const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#89F9E8" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#D87CEE" />
          <stop offset="100%" stopColor="#FACB7B" />
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#89F9E8" />
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9099FC" />
          <stop offset="100%" stopColor="#D87CEE" />
        </linearGradient>
      </defs>
    </svg>
  )
}
