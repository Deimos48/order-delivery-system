import { mockUser } from "../mock/user";

export default function Profile() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Личный кабинет</h1>

      <div style={{ display: "flex", gap: 20 }}>
        <img
          src={mockUser.avatar}
          style={{ width: 150, height: 150, borderRadius: "50%" }}
        />

        <div>
          <h2>{mockUser.name}</h2>
          <p><b>Email:</b> {mockUser.email}</p>
          <p><b>Телефон:</b> {mockUser.phone}</p>
          <p><b>Адрес доставки:</b> {mockUser.address}</p>
        </div>
      </div>
    </div>
  );
}
