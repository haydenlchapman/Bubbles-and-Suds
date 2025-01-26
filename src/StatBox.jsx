function StatBox({ hp, attack, defense }) {
  return (
    <div id="stat-box">
      <div className="stat-item">HP: {hp}</div>
      <div className="stat-item">Attack: {attack}</div>
      <div className="stat-item">Defense: {defense}</div>
    </div>
  );
}
