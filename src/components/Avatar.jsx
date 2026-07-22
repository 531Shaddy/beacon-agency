import { palettes } from '../data/palettes'

export default function Avatar({ initials, palette = 'blue', size = 48 }) {
  const c = palettes[palette] || palettes.blue
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-full font-display font-semibold text-white"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.36,
        background: `linear-gradient(135deg, ${c.from}, ${c.to})`,
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}
