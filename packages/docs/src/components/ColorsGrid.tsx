import { colors } from '@matheus/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {Object.entries(colors).map(([key, color]) => (
        <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>${key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
