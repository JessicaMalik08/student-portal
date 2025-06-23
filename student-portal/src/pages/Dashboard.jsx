export default function Dashboard() {
  const cards = [
    { title: "GPA", value: "3.85" },
    { title: "Attendance", value: "90%" },
    { title: "Subjects", value: "12/15" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {cards.map((card, i) => (
        <div key={i} className="bg-white p-6 shadow rounded-lg hover:scale-105 transition">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-2xl">{card.value}</p>
        </div>
      ))}
    </div>
  );
}
