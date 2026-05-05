export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "2rem",
      fontFamily: "sans-serif"
    }}>
      
      <div style={{
        maxWidth: "900px",
        margin: "auto"
      }}>
        
        {/* HEADER */}
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          👋 Hello, I'm Mikaila Kafka Akmalsyah
        </h1>

        <p style={{ opacity: 0.7 }}>
          NIM: 2341720223
        </p>

        {/* TECH */}
        <section style={{ marginTop: "2rem" }}>
          <h2>🚀 Tech Interests</h2>

          <div style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginTop: "1rem"
          }}>
            {["Next.js", "Laravel", "IoT", "UI/UX"].map((tech) => (
              <span key={tech} style={{
                background: "#1e293b",
                padding: "0.5rem 1rem",
                borderRadius: "999px",
                fontSize: "0.9rem"
              }}>
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section style={{ marginTop: "3rem" }}>
          <h2>📌 Projects</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "1rem"
          }}>
            
            <div style={card}>
              <h3>Traktir.id</h3>
              <p>Platform donasi sederhana untuk kreator.</p>
            </div>

            <div style={card}>
              <h3>IoT Safety System</h3>
              <p>Sistem monitoring gas, suhu, dan kelembapan.</p>
            </div>

            <div style={card}>
              <h3>Portfolio Website</h3>
              <p>Website personal berbasis Next.js.</p>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section style={{ marginTop: "3rem" }}>
          <h2>📫 Contact</h2>
          <p>Email: mikaila082@email.com</p>
        </section>

      </div>
    </main>
  );
}

const card = {
  background: "#1e293b",
  padding: "1.5rem",
  borderRadius: "1rem",
  transition: "0.3s"
};