export default function Home() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.13/cropper.min.css" />
      <div style={{
        background: 'var(--bg-gradient)',
        backgroundColor: '#1a100b',
        backgroundAttachment: 'fixed',
        color: '#e0e0e0',
        fontFamily: "'Inter', sans-serif",
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <h1 style={{
          textAlign: 'center',
          fontSize: '2.8rem',
          fontFamily: "'Cinzel', serif",
          color: '#d59c3e',
          textShadow: '0 2px 4px rgba(0,0,0,1)',
          margin: '40px 0 10px 0',
        }}>EL BAZAR DE LEYENDAS</h1>
        <p style={{
          textAlign: 'center',
          color: '#a0a0a0',
          maxWidth: '600px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}>Explora los tesoros descubiertos por los Maestres del gremio. Obras invaluables de coleccionismo forjadas en el tiempo.</p>
      </div>
    </>
  )
}