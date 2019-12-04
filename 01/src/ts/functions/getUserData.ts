export type User = {
  name: string;
  age: number;
};

export type UserData = {
  data: User[];
};

export default function getUserData(): Promise<UserData> {
  return new Promise((resolve, rejects) => {
    fetch('./assets/data/user.json')
      .then(response => {
        if (response.ok) return response.json();
        rejects();
      })
      .then(json => {
        resolve(json);
      });
  });
}
