import User from "@/models/User";

export default class UserService {
  private newUser: User;

  constructor(user: User) {
    this.newUser = user;
  }

  async getAllUsers(): Promise<Array<User>> {
    const response = await fetch("https://localhost:44376/Register");
    return response.json();
  }

  async getUserById(idUser: number): Promise<User> {
    const response = await fetch(`https://localhost:44376/Register/${idUser}`);
    return response.json();
  }

  async registerUser(): Promise<Response> {
    return await fetch("https://localhost:58691/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(this.newUser),
    });
  }

  async loginUser(): Promise<Response> {
    return await fetch("https://localhost:58691/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.newUser.Name,
        password: this.newUser.Password,
      }),
    });
  }
}
