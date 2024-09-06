import { db } from "@/lib/db";
import Link from "next/link";

export default async function Home() {
  const result = await db.query(`SELECT * FROM cartoon`);
  const cartoon = result.rows;

  return (
    <div className="formdata">
      <h3 className="header2">Have you watched these cartoons?</h3>
      {cartoon.map(function (cartoon) {
        return (
          <p key={cartoon.username}>
            {" "}
            {cartoon.username} - {cartoon.favourite_cartoon}
          </p>
        );
      })}
    </div>
  );
}

// return (
//   <div className="formdata">
//     <h3 className="header2">Have you watched these cartoons?</h3>
//     {cartoons.map((cartoon) => (
//       <p key={cartoon.username}>
//         {cartoon.username} - {cartoon.favourite_cartoon}
//       </p>
//     ))}
//   </div>
// );
// }
