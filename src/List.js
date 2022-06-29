export default function List({ items }) {
  return (
    <table>
      {items.map((food) => (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      ))}
    </table>
  );
}
