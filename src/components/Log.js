export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.suqare.row}${turn.suqare.col}`}>
          {turn.player} selected {turn.suqare.row}, {turn.suqare.col}
        </li>
      ))}
    </ol>
  );
}
