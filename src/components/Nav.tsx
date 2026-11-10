import React from "react";

type navProps = {
  name: string;
  age: number;
  add: (a: number, b: number) => number;
};

function Nav({ name, age, add }: navProps) {
  return (
    <div>
      hello my name is {name} and my age is {age}
    </div>
  );
}

export default Nav;
