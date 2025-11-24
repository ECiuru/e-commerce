export default function Button({ icon, text, onClick, className = "" }) {
  return (
    <button onClick={onClick} className={`${className} flex items-center gap-2 font-medium transition-colors`}>
      {icon}
      {text}
    </button>
  )
}
